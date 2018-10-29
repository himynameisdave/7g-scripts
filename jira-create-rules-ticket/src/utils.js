const Base64 = require('js-base64').Base64;


module.exports.getAuthHeader = (email) => {
    const string = Base64.encode(`${email}:${process.env.JIRA_TOKEN}`);
    return `Basic ${string}`;
};
