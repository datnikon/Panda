const { LOG_TYPES } = require('../constants/app.constant');
const { witeFile } = require('./file.service');
function writeLog(type = LOG_TYPES.ERROR, text = "") {
    let filePath = './logs/error.log'
    switch (type) {
        case LOG_TYPES.ERROR: {
            filePath = './logs/error.log'
            break
        }
        case LOG_TYPES.CHAT: {
            filePath = './logs/chat.log'
            break
        }
    }
    const today = new Date();
    const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    const logContent = `${date} ${time}: ${text.toString()}\n`
    witeFile(filePath, logContent)
}

module.exports = {
    writeLog
}