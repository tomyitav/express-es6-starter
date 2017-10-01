import * as winston from 'winston';
/* though this is not explicitly referenced it is implicitly required */
import * as rotate from 'winston-daily-rotate-file';
import config from '../config/config.dev';

const fs = require('fs');

const dir = config.logFileDir;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const logger = new winston.Logger({
    level: 'info',
    transports: [
        new (winston.transports.Console)({
            colorize: true,
        }),
        new winston.transports.DailyRotateFile({
            filename: config.logFileName,
            dirname: config.logFileDir,
            maxsize: 20971520, // 20MB
            maxFiles: 25,
            datePattern: '.dd-MM-yyyy'
        })
    ]
});

export default logger;
