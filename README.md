# Loan Request Application - React

## Introduction & project aim

App built in React (version 18.2.0) rendering a financial loan request application form. The apps aim is to allow users to request a loan for 'x' amount (in pounds), select a repayment term (from a selection of three set terms) and submit the request for consideration. Input validations will prevent submissions with missing fields, and throw errors if:

- both fields are missing entries
- loan amount is missing
- loan amount is less than £1
- loan term is not stated

Any errors will be rendered in a modal, with the error message rendered depending on the failed validation.
If all fields are entered a success message will be rendered in a modal with the loan amount requested and the loan replayment term stated.

## Built with / technologies

React - version 18.2.0
CSS3 (no framework used, i.e. bootstrap)

## Setup

To run this project,

- Install it locally using 'npm i'
- Run the app in development mode using 'npm start'
- Run tests with 'npm test'

## Responsive design

Responsive design has been built in to display on displays 375 x 851 (as per the project scope)

## Want to contribute?

To fix a bug or enhance / refactor build, follow these steps:

- Fork the repo
- Create a new branch (git checkout -b branch-name)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (git commit -m 'commit description')
- Push to the branch (git push origin branch-name)
- Create a Pull Request
