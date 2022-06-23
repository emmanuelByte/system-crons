const shell = require('shelljs')
console.log("Running Script from Node")

var cron = require('node-cron');

cron.schedule('*/5 * * * * *', () => {
  console.log('running a task every 5 seconds');
 shell.exec('./githubcron.sh')
})
