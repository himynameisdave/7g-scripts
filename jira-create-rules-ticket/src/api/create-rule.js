const request = require('request-promise-native');

const constants = require('../constants.js');
const utils = require('../utils.js');


const createRule = (login, rule) => {
    const body = {
        fields: {
            project: {
                id: process.env.FE_PROJECT_ID
            },
            issuetype: {
                id: process.env.TASK_ISSUE_TYPE
            },
            labels: ['eslint'],
            summary: `ESLint Rule: ${rule.name}`,
            description: `Turn on the eslint rule ${rule.name}.
${rule.url}

Reason: ${rule.reason}

====
Process:
* In the \`.eslintrc\` file, remove the line where \`${rule.name}\` is turned "off" (because it will already be set to "error" in our eslint-config-7geese). 
* Run \`yarn run lint:fix\`.
* If the issue is auto-fixable, the issues will be fixed for you.
* If the rule is not auto-fixable, then you must go through each of the files reported in the terminal and fix them.
* Commit the updated \`.eslintrc\` along with any fixed file changes.`
        }
    };
    return request({
        method: 'POST',
        uri: constants.CREATE_ISSUE_ENDPOINT,
        body: body,
        json: true,
        headers: {
            'Authorization': utils.getAuthHeader(login.email),
            'Content-Type': 'application/json'
        }
    });
};

module.exports = createRule;
