const shell = require("shelljs");
//console.log("Running Script from Node")

function genCronString() {
    const rand = Math.floor(Math.random() * (10 - 1)) + 1;
    return `0 */${rand} * * *`;
}
(function cronJob() {
    const cron = require("node-cron");
    const cronExp = genCronString();
    console.log(`Cron Expression: ${cronExp}`);
    const day = new Date().getDay();
    cron.schedule(cronExp, () => {
        //console.log('running a task every 1 hour');
        shell.exec("./githubcron.sh");
        const newDay = new Date().getDay();
        if (day !== newDay) {
            cron.stop();
            cronJob();
        }
    });
})();
