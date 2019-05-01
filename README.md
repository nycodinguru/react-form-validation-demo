# Simple React Form Validation

This mini project contains a React form component that has validations for 4 different fields. Although there are dozens of libraries that serve the same exact purpose, in fact even more robustly, I wanted to give this a shot myself and code a component from scratch.

## Features

- Empty fields prevent form from being submitted.
- Fields with invalid characters prevent the form from being submitted.
- An email written with an invalid pattern prevent the form from being submitted (Regex is used to match the pattern).
- The message length can be limited to whatever length is desired (500 chars by default).
- The form is responsive to mobile, tablet, and desktop browers.
- An animation is triggered if all of the fields are found to be valid after the submit button is clicked.

#### Demo link: <http://react-form-validation-demo.surge.sh/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
