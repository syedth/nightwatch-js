const envUrl = 'https://testin-accounts.cloudmaxis.com/login';
const pageObj = require('./pageObj');

const credentials = {
    userEmail: 'syed@calibraint.com',
    password: 'Sye@crm1',
    firstName: 'Syed',
    lastName: 'Thoufiq',
    fullName: 'Syed Thoufiq'
}

/**
 * 
 * @param {*} browser - defines the webdriver browser
 */
function login(browser) {
    browser
        .url(envUrl)
        .waitForElementVisible('body')
        .setValue(pageObj.pages.login.email_input, [credentials.userEmail, browser.Keys.ENTER])
        .setValue(pageObj.pages.login.password_input, [credentials.password, browser.Keys.ENTER])
        .pause(5000)
}

module.exports = { login, envUrl,  credentials};
