# Component Storybook
A library of custom components. 

## Requirements

For development, you will need to install Yarn (https://yarnpkg.com/en/docs/install) and node.js (http://nodejs.org/). 

## Install

    $ git clone https://github.com/rachaelesler/my-storybook.git

## Running for the first time 

Navigate to the project directory

    $ cd my-storybook 
    
then run:

    $ yarn
    $ npm run test:generate-output -- --watch

The first command ensures all dependencies are installed. The second command runs the Jest tests to ensure they display properly in the app. 

## Viewing the Storybook

In the project directory, navigate to the project directory and run:

    $ yarn run storybook

The storybook will run on port 9009 by default (http://localhost:9009). 

## Developing with addons
### Jest 
Whenever you run 

    $ npm run test:generate-output -- --watchAll
    
it writes the results of any `.test` files to `$/jest-test-results.json` in the project directory. 




