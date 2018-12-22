module.exports = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the ESlint rule',
    },
    {
        type: 'input',
        name: 'url',
        message: 'Enter the documentation URL for this rule',
    },
    {
        type: 'input',
        name: 'reason',
        message: 'Enter the reason we are turning this rule on',
    },
    {
        type: 'confirm',
        name: 'isFixable',
        message: 'Is this rule auto-fixable?',
    },
];
