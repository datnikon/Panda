require('dotenv').config()
const { App } = require('@slack/bolt')
const { writeLog } = require('./services/log.service')
const { getResponse } = require('./services/response.service')

const app = new App({
    token: process.env.SLACK_OAUTH_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    port: process.env.PORT,
    socketMode: true,
    appToken: process.env.SLACK_WRITE_TOKEN
})

app.message(({ message, say }) => {
    const inputText = message.text
    const responeText = getResponse(inputText)
    say(responeText)
        .catch(err => writeLog(LOG_TYPES.ERROR, err))
})

app.event("app_mention", ({ say, event }) => {
    const inputText = event.text
    const responeText = getResponse(inputText)
    say(responeText)
        .catch(err => writeLog(LOG_TYPES.ERROR, err))
})

app.start()
    .then(() => console.warn('App is running'))
    .catch(err => writeLog(LOG_TYPES.ERROR, err))

