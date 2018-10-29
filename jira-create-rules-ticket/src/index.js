/**
 *   Writing this in plain JS then converting to TS later
 */
const dotenv = require('dotenv');
const inquirer = require('inquirer');
const chalk = require('chalk');

const createRule = require('./api/create-rule.js');
const linkEpic = require('./api/link-epic.js');
const againPrompt = require('./prompts/again.js');
const rulePrompts = require('./prompts/rules.js');
const utils = require('./utils.js');

dotenv.config();
utils.validateEnv();


let createdIssueUrls = [];

const newRule = () => inquirer
    .prompt(rulePrompts)
    .then(answers => createRule(answers))
    .then(response => linkEpic(response.key))
    .then(url => {
        createdIssueUrls = createdIssueUrls.concat([url]);
        const green = chalk.green('\n🎉 Successfully created issue in Jira!');
        const blue = chalk.blue(`\n🔗  ${url}\n`);
        console.log(`${green}${blue}`);
        return inquirer.prompt(againPrompt);
    })
    .then(shouldRun => shouldRun.again
            ? newRule()
            : utils.showCreatedIssues(createdIssueUrls)
    )
    .catch((error) => onsole.warn(
        chalk.red('Something has gone catastrophically wrong.\nThrow your machine out the window.', error)
    ));

newRule()
