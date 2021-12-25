const { readFile } = require('./file.service')
const { detectLanguageCode } = require('./translate.services')
const { LANGUAGE_CODES,
    UNKNOW_VIETNAMES_ANSWERS,
    UNKNOW_ENGLISH_ANSWERS,
    LOG_TYPES } = require('../constants/app.constant')
const { handleDeploy } = require('./deploy.service')
const { writeLog } = require('./log.service')

function getResponse(text = "") {
    try {
        const deployResponse = handleDeploy(text)
        if (deployResponse) {
            return deployResponse
        }
        const language = detectLanguageCode(text)
        const data = readFile(language)
        const exitingData = data.find(t => t.question.split(", ").some(q => text.toLocaleLowerCase().includes(q.toLocaleLowerCase())))
        if (!exitingData) {
            writeLog(LOG_TYPES.CHAT, text)
            return _getUnknonwRespone(language)
        }
        const answers = exitingData.answer.split(", ")
        return answers[Math.floor(Math.random() * answers.length)]
    }
    catch (e) {
        writeLog(LOG_TYPES.ERROR, e)
        return "Hm!!!"
    }
}

function _getUnknonwRespone(languageCode = LANGUAGE_CODES.ENGLISH) {
    const unknowAnswers = languageCode === LANGUAGE_CODES.ENGLISH ? UNKNOW_ENGLISH_ANSWERS : UNKNOW_VIETNAMES_ANSWERS
    return unknowAnswers[Math.floor(Math.random() * unknowAnswers.length)]
}

module.exports = {
    getResponse
}
