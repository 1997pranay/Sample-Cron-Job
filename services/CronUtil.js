const cron = require('node-cron');
const cron_config = require('../config/cron_config.json');

class CronUtil {
    /**
     * @description This method is used to initialize Cron jobs
     * @returns
     * @memberof CronUtil
     */
    async initiateCronJob() {
        try {
            // Here the scheduler or the time at which cron job runs is prepared
            const scheduler = this.prepareScheduler();

            // Check whether the scheduler is prepared correctly or not
            if (cron.validate(scheduler)) {
                // Here the main scheduling is done using schedule method
                const task = cron.schedule(scheduler, () => {
                    console.log('Hello World');
                });
                task.start();
            } else {
                console.log('-----Invalid Cron Scheduler Configuration-----');
            }
            return true;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }

    /**
     *@description This method is used to prepare the scheduler for cron job
     * @returns {String} scheduler string
     * @memberof CronUtil
     */
    prepareScheduler() {
        const scheduler = cron_config.sec.default + cron_config.min.default + ' ' + cron_config.hour.default +
            ' ' + cron_config.dayOfMonth.default + ' ' + cron_config.month.default + ' ' +
            cron_config.dayOfWeek.default;
        return scheduler;

    }
}
module.exports = CronUtil;
