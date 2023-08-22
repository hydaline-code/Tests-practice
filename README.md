## Jest Unit Testing Examples

Welcome to my testing exercise!

## Pre-requisites
* You will need to have access to the command-line, for Linux/Mac 
a Terminal or on Windows it will be a command prompt (`cmd`)
* You will need to have Vscode installed.

## Setting Up Jest

Steps:

Create a new directory, and cd into that directory.
Set up the NPM environment
mkdir jest-example && cd jest-example 
npm init -y

## Install Jest

    npm i jest --save-dev

Configure the NPM environment to use Jest by modifying the package.json file created earlier. This edit will cause the command npm test to run the tests we will be building.

// In package.json

    `  "scripts": {
      "test": "jest"
    } `

## Identify Desired Actions
To begin writing the tests, we must define what the function we will be building should do, and what the expected outcome should be when the function is invoked.

## Initializing the Test File
Typically, tests are written in a tests or __tests__ subdirectory of the app, and we will follow this same convention. From the root of our example project, let's create a tests directory and the file which will contain our tests.

    mkdir tests && cd tests && touch exampleFunctions.test.js

## Writing tests
Tests typically contain these general components: 

To  use this just  `git` to clone the ssh version:

    git clone git@github.com:hydaline-code/Tests-practice.git

**Or** download the .zip archive and unzip it to the folder 
`jest-unit-testing-examples`:

	https://github.com/jhbsk/jest-unit-testing-examples/archive/master.zip

## Installation

On the command-line or Terminal, navigate to the root of the directory which you downloaded and run:

    * If you have npm: `npm install`
    * If you have yarn: `yarn install`

## Running tests

To run the tests, run npm test (which matches the command we defined in the package.json).

    `npm test`
* Run Jest in watch mode (great for TDD): 

          `npm run test:watch` or `yarn test:watch`