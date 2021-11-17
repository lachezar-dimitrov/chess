module.exports = {
    'Open the app'(browser) {
        browser
        .url('http://localhost:3000/')
        .waitForElementVisible('.hello')
        .assert
        .containsText('.hello','Hello World');
    }
};
