const constants = require('../constants.js');
const utils = require('../utils.js');
const getIssueTemplate = require('../issue-template.js');


const createRule = (rule) => utils.postRequest({
    uri: constants.CREATE_ISSUE_ENDPOINT,
    body: {
        fields: {
            project: {
                id: process.env.FE_PROJECT_ID
            },
            issuetype: {
                id: process.env.TASK_ISSUE_TYPE
            },
            labels: ['eslint'],
            summary: `ESLint Rule: ${rule.name}`,
            description: getIssueTemplate(rule),
        }
    },
});

module.exports = createRule;
