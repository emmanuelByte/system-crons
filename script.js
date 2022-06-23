const shell = require('shelljs')
console.log("Running Script from Node")

var cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
 shell.exec('./githubcron.sh')
})
