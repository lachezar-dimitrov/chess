module.exports = {
    'should change the status when one of the players win'(browser) {
        const url = 'http://localhost:3000/';

        const board = '[data-test="board"]';
        const xWins = '[data-test="wins-x"]';
        const oWins = '[data-test="wins-o"]';

        const downLeftBox = '[data-test="box-2-0"]';

        browser
            .url(url)
            .waitForElementVisible(board)
            .click('[data-test="box-0-0"]') // X
            .click('[data-test="box-0-1"]') // O
            .click('[data-test="box-1-1"]') // X
            .click('[data-test="box-0-2"]') // O
            .click('[data-test="box-2-2"]') // X
            .waitForElementVisible(xWins)

            .assert
            .containsText(xWins,'1')
            
            .assert
            .containsText(oWins,'0')

            .assert
            .containsText(downLeftBox, '')

            .click(downLeftBox)
            
            .assert
            .containsText(downLeftBox, '');
    },

    'should change the status when a draw occur'(browser) {
        const url = 'http://localhost:3000/';

        const board = '[data-test="board"]';
        const draws = '[data-test="draws"]';
        const downLeftBox ='[data-test="box-2-0"]';

        browser
            .url(url)
            .waitForElementVisible(board)
            .click('[data-test="box-0-0"]') // X
            .click('[data-test="box-0-1"]') // O
            .click('[data-test="box-0-2"]') // X
            .click(downLeftBox) // O
            .click('[data-test="box-2-1"]') // X
            .click('[data-test="box-2-2"]') // O
            .click('[data-test="box-1-0"]') // X
            .click('[data-test="box-1-1"]') // O
            .click('[data-test="box-1-2"]') // X
            .waitForElementVisible(draws)

            .assert
            .containsText(draws,'1')

            .click(downLeftBox)

            .assert
            .containsText(downLeftBox, 'O');
    }
};
