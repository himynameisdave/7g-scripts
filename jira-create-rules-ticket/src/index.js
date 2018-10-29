/**
 *   Writing this in plain JS then converting to TS later
 */
const dotenv = require('dotenv');
const inquirer = require('inquirer');
const request = require('request-promise-native');
const chalk = require('chalk');

const createRule = require('./api/create-rule.js');
const linkEpic = require('./api/link-epic.js');
const loginPrompts = require('./prompts/login.js');
const rulePrompts = require('./prompts/rules.js');
const constants = require('./constants.js');

dotenv.config();


const newRule = (login) => inquirer
    .prompt(rulePrompts)
    .then(answers => createRule(login, answers))
    .then(response => linkEpic(login, response.key))
    .then(url => {
        const green = chalk.green('\n🎉 Successfully created issue in Jira!');
        const blue = chalk.blue(`\n  🔗  ${url}`);
        console.log(`${green}${blue}`);
    })
    .catch((error) => onsole.warn(
        chalk.red('Something has gone catastrophically wrong.\nThrow your machine out the window.', error)
    ))

const main = () => inquirer
    .prompt(loginPrompts)
    .then(answers => newRule(answers));

main();
