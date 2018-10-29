const request = require('request-promise-native');
const chalk = require('chalk');
const Base64 = require('js-base64').Base64;


const getAuthHeader = () => {
    const string = Base64.encode(`${process.env.JIRA_EMAIL}:${process.env.JIRA_TOKEN}`);
    return `Basic ${string}`;
};

const getHeaders = () => ({
    'Authorization': getAuthHeader(),
    'Content-Type': 'application/json'
});

const postRequest = (opts) => request({
    method: 'POST',
    uri: opts.uri,
    body: opts.body,
    json: true,
    headers: getHeaders(),
});

const validateEnvVar = (key) => {
    if (!process.env[key]) {
        console.warn(chalk.red(`\nENV ERROR: No ${key} found in .env file!\n`));
        process.exit(1);
    }
}
const validateEnv = () => [
    'JIRA_TOKEN',
    'JIRA_EMAIL',
    'FE_PROJECT_ID',
    'TASK_ISSUE_TYPE'
].forEach(validateEnvVar)

const showCreatedIssues = (createdIssueUrls) => {
    console.log(chalk.green('✨ Issues created:'))
    createdIssueUrls.forEach(issueUrl => console.log(
        chalk.blue(` - ${issueUrl}`)
    ))
};

module.exports.getAuthHeader = getAuthHeader;
module.exports.getHeaders = getHeaders;
module.exports.postRequest = postRequest;
module.exports.validateEnv = validateEnv;
module.exports.showCreatedIssues = showCreatedIssues;
