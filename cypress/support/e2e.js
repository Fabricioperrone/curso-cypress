// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
require('cypress-xpath')
import '@shelex/cypress-allure-plugin'
import moment from 'moment'
//import dayjs from "dayjs"
// import '@shelex/cypress-allure-plugin';

require('@shelex/cypress-allure-plugin');
// import 'cypress-iframe';
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.SelectorPlayground.defaults({
    selectorPrioritary: ['data-cw','data-cy','id', 'class', 'attributes', 'data-test', 'data-testid','tag','nth-child',]
})

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};

const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}