const common = require('../common');
let pageObj = require('../pageObj');

describe('Login', function () {

    before(browser => browser.url(common.envUrl));

    test('Login to CRM', function (browser) {
        common.login(browser);
    });

    after(browser => browser.end());
});