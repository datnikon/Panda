
const { LANGUAGE_CODES } = require('../constants/app.constant')
const English = require('../data/en.json')
const Vi = require('../data/vi.json')
const fs = require('fs')

function readFile(languageCode = LANGUAGE_CODES.ENGLISH) {
    return languageCode === LANGUAGE_CODES.ENGLISH ? English : Vi
}

function witeFile(path, logContent) {
    fs.appendFile(path, logContent, () => {
    })
}

module.exports = {
    readFile,
    witeFile
}