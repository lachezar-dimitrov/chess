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

### `npm run e2e`

Launches the nightwatch tests. The project should be running at [http://localhost:3000](http://localhost:3000). It does not run in watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Unit Testing Plan
## Store
### `AppStore`
#### `get status()`:
1. should show the next player
1. should change the status only when win occur
1. should change the draw status only when draw occur

#### `handleBoxClick()`:
1. should set the correct winner if there is a winner
1. should increase the win counter to the winner
1. should increase the loss counter to the losers
1. should increase the draw counter when draw occur

### `Board`
#### `calculateTheWinner()`:
1. should return empty string if there is no winner
1. should return the symbol of the winner horizontally
1. should return the symbol of the winner vertically
1. should return the symbol of the winner diagonally

## Components

### `Box`:
1. should change the box value with the symbol of the current player
1. should not change the box value if it is called twice


# Nightwatch Testing Plan
1. should change the status when a draw occur
1. should change the status when one of the players win
1. should not allow clicking on the board when the game ends (win or draw)