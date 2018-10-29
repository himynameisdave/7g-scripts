## jira-create-rules-ticket

A script for Dave to quickly create ESLint rule tickets on Jira.

### Usage

This uses Jira's [Basic Auth](https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-basic-authentication/), meaning that you'll need to [go generate an API token](https://id.atlassian.com/manage/api-tokens).

Run the following to create an `.env` file (assumes you have `cd`'ed into the `jira-create-rules-ticket/` directory):

```
touch .env
echo "JIRA_TOKEN=<YOUR TOKEN HERE>\nJIRA_EMAIL=<YOUR EMAIL HERE>\nFE_PROJECT_ID=\nTASK_ISSUE_TYPE=" > .env
```

Note that there are two variables empty variables being included there. They are the ID of the Front-end project (`nFE_PROJECT_ID`) and the ID of the issue type that we want to use ("task", `TASK_ISSUE_TYPE`). You can find these by querying [the createmeta API](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-api-2-issue-createmeta-get), or by asking [Dave](https://github.com/himynameisdave).

Once you've got the `.env` variables in there, you can run it with one of the following commands:

```
npm run start
npm run go
node src/index.js
```

This will prompt you about some info that needs to be provided for the ESLint rule you're creating this issue for, such as the
name, it's documentation URL, as well as the reason we decided to turn it on.
