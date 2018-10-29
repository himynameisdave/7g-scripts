const BASE_URL = 'https://7geese.atlassian.net';

const constants = {
    BASE_URL: BASE_URL,
    CREATE_ISSUE_ENDPOINT: `${BASE_URL}/rest/api/2/issue`,
    LINK_EPIC_ENDPOINT: `${BASE_URL}/rest/agile/1.0/epic/FE-15/issue`, // NOTE: This assumes you want to link to the Code Quality Epic (FE-15)
    BASE_BROWSE_ISSUE_URL: `${BASE_URL}/browse`
};

module.exports = constants;
