# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Unit Testing Plan

## Store
### `AppStore`
#### `handleBoxClick()`:
Think if this should be components tests for all!
* should check if there already a winner and do nothing
* should check if the box on the given position is already clicked and do nothing
* should set the correct winner if there is a winner
* should increase the win counter to the winner
* should increase the loss counter to the losers
* if no winner and turns are equal to the maximum number of turns then draws should be incremented by one
* should change the current player index

### `Board`
#### `calculateTheWinner()`:
* should call checkRows with the symbol that belongs to the given positions
* should call checkColumns with the symbol that belongs to the given positions
* should call checkDiagonals with the symbol that belongs to the given positions

## Components
### `Game`:
* should display the rules of the game
* should display the game history
* should render the board
#### `renderHistory()`:
Do not test react!
* should display the number of wins on the first player
* should display the number of wins on the second player
* should display the number of all draws
* should change the status when one of the players win
* should change the status when a draw occur
* should increment the wins counter on the first player with one when the first player win
* should increment the wins counter on the second player with one when the second player win
* should increment the draws counter with one when a draw occur

### `Board`:
* when init all cells are empty
* should render `Box` items
### `Box`:
* should check if the right player symbol is when you click
* should change its content if it is clicked for the first time
* should not change its content if it is not  clicked for the first time

# Nightwatch Testing Plan