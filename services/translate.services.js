const { LANGUAGE_CODES, VIETNAMESE_CHARECTERS } = require('../constants/app.constant')

function detectLanguageCode(text = "") {
    return VIETNAMESE_CHARECTERS.split(",").some(c => text.includes(c)) ? LANGUAGE_CODES.VIETNAMESE : LANGUAGE_CODES.ENGLISH
}

module.exports = {
    detectLanguageCode
}