const common = require('../common');
let pageObj = require('../pageObj');

describe('Smoke', function () {

  before(browser => browser.url(common.envUrl));

  test('Navigate to Logine Page', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.urlContains("cloudmaxis")
      .assert.title("CloudMaxis")
  });

  test('Enter Login Credentials', function (browser) {
    browser
      .setValue(pageObj.pages.login.email_input, [common.credentials.userEmail, browser.Keys.ENTER])
      .setValue(pageObj.pages.login.password_input, [common.credentials.password, browser.Keys.ENTER])
      .pause(5000)
  });

  test('Validate the common page for Maxis Products', function (browser) {
    browser
      .assert.containsText(pageObj.pages.cloudmaxis_product.our_products_text, 'Our Products')
      .assert.containsText('.user-name', common.credentials.fullName)
      .assert.containsText(pageObj.pages.cloudmaxis_product.maxis_bot_section, 'Maxis Bot')
      .assert.containsText(pageObj.pages.cloudmaxis_product.maxis_crm_section, 'Maxis CRM')
  });

  test('Navigate to CRM Dashboard', function (browser) {
    browser
      .click(pageObj.pages.cloudmaxis_product.maxis_crm_section)
      .pause(5000)
      .assert.containsText(pageObj.pages.dashboard.dasboard_header_text, 'Dashboard');
  });

  test('Navigate to Contacts Section', function (browser) {
    browser
      .click(pageObj.pages.side_nav.contacts_menu)
      .click(pageObj.pages.side_nav.contacts)
      .pause(5000)
      .assert.containsText(pageObj.pages.contacts.contacts_header_text, 'Contact')
  });

  after(browser => browser.end());
});