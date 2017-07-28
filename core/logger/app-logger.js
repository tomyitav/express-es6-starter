import * as winston from 'winston'
import * as rotate from 'winston-daily-rotate-file'
import config from '../config/config.dev'

let logger = new winston.Logger({
    level: 'info',
    transports: [
        new (winston.transports.Console)({
            colorize: true,
            }),
        new winston.transports.DailyRotateFile({
            filename: config.logFileName,
            dirname: config.logFileDir,
            datePattern: '.dd-MM-yyyy'
        })
    ]
});

export default logger;