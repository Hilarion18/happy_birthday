import { CronJob } from 'cron';
import MessageService from '@src/services/MessageService';
import moment from 'moment-timezone';

export const checkBirthdayPerSpecificTimeRange = async () => {    
    const job = new CronJob(
        /*
        * CronTime every 15 mins, because few zones are offset by an additionnal 30 or 45 mins.
        * The wishes message just only for a day
        */
        '*/15 * * * *',
        function async () {
            console.debug("Job is working...");
            let currentDate = new Date()
            const formatBday = "YYYY-MM-DD"
            let formattedDate = moment(currentDate).format(formatBday);
            MessageService.sendMessage(formattedDate) // sending message
        }, // onTick
        null, // onComplete
        true, // start
        'Asia/Tokyo' // timeZone of the server
    );
    return job
}