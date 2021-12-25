const LANGUAGE_CODES = Object.freeze({
    ENGLISH: "en",
    VIETNAMESE: "vi"
})

const UNKNOW_ENGLISH_ANSWERS = Object.freeze([
    "Hm!",
    "Oh no!",
    ":(",
    "I ..."
])

const DEPLOY_MODES = Object.freeze({
    API: "API",
    UI: "UI"
})

const UNKNOW_VIETNAMES_ANSWERS = Object.freeze([
    "Hm!",
    "Híc",
    ":(",
    "Mình sẽ trả lời bạn sau"
])

const VIETNAMESE_CHARECTERS = "á,à,ạ,ắ,ắ,ằ,ặ,ơ,ờ,ớ,ợ,đ,ê,ề,ế,ệ,ô,ồ,ố,ộ"

const LOG_TYPES = Object.freeze({
    CHAT: 1,
    ERROR: 2,
})

module.exports = {
    LANGUAGE_CODES,
    VIETNAMESE_CHARECTERS,
    UNKNOW_ENGLISH_ANSWERS,
    UNKNOW_VIETNAMES_ANSWERS,
    DEPLOY_MODES,
    LOG_TYPES
}