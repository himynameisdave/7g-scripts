const request = require('request-promise-native');

const constants = require('../constants.js');
const utils = require('../utils.js');


const linkEpic = (login, issueKey) => request({
    method: 'POST',
    uri: constants.LINK_EPIC_ENDPOINT,
    body: {
        issues: [issueKey],
    },
    json: true,
    headers: {
        'Authorization': utils.getAuthHeader(login.email),
        'Content-Type': 'application/json'
    }
}).then(() => `${constants.BASE_BROWSE_ISSUE_URL}/${issueKey}`);

module.exports = linkEpic;
