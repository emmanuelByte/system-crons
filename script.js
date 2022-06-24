const shell = require('shelljs')
//console.log("Running Script from Node")

var cron = require('node-cron');

cron.schedule('0 */1 * * *', () => {
  //console.log('running a task every 1 hour');
 shell.exec('./githubcron.sh')
})
