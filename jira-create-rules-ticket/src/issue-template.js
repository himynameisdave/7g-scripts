module.exports = (rule) => `Turn on the eslint rule ${rule.name}.
${rule.url}

Reason we are turning it on: ${rule.reason}

Is auto-fixable? ${rule.isFixable ? 'Yes' : 'No/unsure'}

====
Process:
* Run \`yarn run lint:fix-rule\`
* You will be prompted for what rule you want to fix, enter the rule name.
* The rule will be removed from the .eslintrc file for you.
* It will then run \`yarn run lint:fix\` for you.
* If the issue is auto-fixable, the issues will be fixed for you.
* If the rule is not auto-fixable, then you must go through each of the files reported in and fix them manually.
* Commit the updated \`.eslintrc\` along with any fixed file changes.`;
