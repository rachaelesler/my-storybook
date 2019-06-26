# Component Storybook
A library of custom components used in the Babylon project. 

## Requirements

For development, you will need to install Yarn (https://yarnpkg.com/en/docs/install) and node.js (http://nodejs.org/). 

## Install

    $ git clone https://github.com/rachaelesler/my-storybook.git
    $ cd my-storybook
    $ npm install

## Running for the first time 

    $ yarn
    $ npm run test:generate-output -- --watch

The first command ensures all dependencies are installed. The second command runs the Jest tests to ensure they display properly in the app. 

## Viewing the Storybook

In the project directory, navigate to the project directory and run:

    $ yarn run storybook

The storybook will run on port 9009 by default (http://localhost:9009). 


