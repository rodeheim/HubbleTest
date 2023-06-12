---

# Tokopedia Test

This repository contains automated tests for the Tokopedia website using Cypress.

## Test Scenario

The test scenario includes the following steps:

1. Visit the Tokopedia webpage.
2. Search for the iPhone 14 Pro.
3. Validate the search results to ensure the correct product is displayed.

## Prerequisites

To run the tests locally, ensure that you have the following software installed:

- Node.js

## Installation

Follow these steps to set up the project and install the dependencies:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install Node.js if you haven't already. You can download it from the official website: [Node.js](https://nodejs.org).
4. Install the project dependencies by running the following command: `npm install`

## How to Run the Tests

Follow these steps to run the tests:

1. Ensure you are in the project directory in your terminal.
2. Run the tests using Cypress by running the command: `npx cypress run`

The tests will be executed in headless mode, and the test results will be displayed in the terminal.

If you prefer to run the tests in Cypress's interactive mode, use the command: `npx cypress open`

## Personal Note

1. I spent quite a bit of time just trying to debug my selenium java on my machine so i opted to use cypress as i was more familiar with it.
2. I did not finish the test where it is supposed to filter from 100000 to 30000000
3. I did not finish the test where it is supposed to be sorted by lowest price
4. I did not finish the test where it is suppposed to grab all the items on the first 3 pages and print it out on the console
---
