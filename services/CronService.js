const CronUtil = require('./CronUtil');

class CronService {
    constructor () {
        this.cronUtil = new CronUtil();
    }

    /**
     *@description Starting point of cron job execution.
     * @returns
     * @memberof CronService
     */
    async initialize () {
        try {
            await this.cronUtil.initiateCronJob();
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = CronService;
