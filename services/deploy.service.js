const { DEPLOY_MODES } = require("../constants/app.constant")
function handleDeploy(text = "") {
    if (text.toLocaleLowerCase().includes("deploy ui")) {
        _deploy()
        return _handleDeployMessageResponse()
    }
    if (text.toLocaleLowerCase().includes("deploy api")) {
        _deploy(DEPLOY_MODES.API)
        return _handleDeployMessageResponse(DEPLOY_MODES.API)
    }
    return undefined
}
function _deploy(mode = DEPLOY_MODES.UI) {
    const job = mode === DEPLOY_MODES.UI ? process.env.JENSKINS_UI_JOB : process.env.JENSKINS_API_JOB
    const token = mode === DEPLOY_MODES.UI ? process.env.JENSKINS_DEPLOY_UI_TOKEN : process.env.JENSKINS_DEPLOY_API_TOKEN
    const apiUrl = `${process.env.JENSKINS_URL}${job}/build?token=${token}`
    console.log("Handle Call API", apiUrl)
}
function _handleDeployMessageResponse(mode = DEPLOY_MODES.UI) {
    return `Triggering Jenkins to deploy ${mode} (${mode === DEPLOY_MODES.UI ? process.env.UI_URL : process.env.API_URL})\nPlease wait for Jenkins trigger!`
}

module.exports = {
    handleDeploy
}