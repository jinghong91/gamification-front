const chalk = require('chalk');

const msg = `
Welcome to the ${chalk.blue.bold('Ionic')} ${chalk.green.bold('J')}${chalk.red.bold('Hipster')} Starter!

The Ionic JHipster Starter ships with login and signup that will work with a JHipster backend (with JWT Authentication).

For more details, please see the project's README: ${chalk.bold('https://github.com/oktadeveloper/ionic-jhipster-starter/blob/master/README.md')}
`.trim()

console.log(msg);
console.log(JSON.stringify(msg));
