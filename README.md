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
1. should check if the box on the given position is already clicked and do nothing
1. should set the correct winner if there is a winner
1. should increase the win counter to the winner
1. should increase the loss counter to the losers
1. if no winner and turns are equal to the maximum number of turns then draws should be incremented by one

### `Board`
#### `calculateTheWinner()`:
1. V should return empty string if there is no winner
1. V should return the symbol of the winner horizontally
1. V should return the symbol of the winner vertically
1. V should return the symbol of the winner diagonally

## Components
### `Game`:

1. V should display the rules of the game
1. V should display the game history V
#### `renderHistory()`:
1. V should show the next player
1. V should change the status only when win occur
1. V should change the draw status only when draw occur

### `Box`:
1. should change the value with the symbol of the current player
1. should change its content if it is clicked for the first time
1. should not change its content if it is not clicked for the first time

# Nightwatch Testing Plan
1. should not allow clicking on same box again
1. should change the status when a draw occur
1. should change the status when one of the players win
1. should increment the draws counter with one when a draw occur
1. should not allow clicking on the board when the game end (win or draw)
1. should increment the wins counter on the first player with one when the first player win
1. should increment the wins counter on the second player with one when the second player win