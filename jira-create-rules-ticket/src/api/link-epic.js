const constants = require('../constants.js');
const utils = require('../utils.js');


const linkEpic = (issueKey) => utils.postRequest({
    uri: constants.LINK_EPIC_ENDPOINT,
    body: {
        issues: [issueKey],
    },
}).then(() => `${constants.BASE_BROWSE_ISSUE_URL}/${issueKey}`);

module.exports = linkEpic;
