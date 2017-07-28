import Mongoose from 'mongoose';
import logger from '../core/logger/app-logger'
import config from '../core/config/config.dev'

const connectToDb = () => {
    let dbHost = config.dbHost;
    let dbPort = config.dbPort;
    let dbName = config.dbName;
    Mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, (err) => {
        if (err) {
            logger.error('Could not connect to MongoDB');
        }
        else {
            logger.info('Connected to mongo!!!');
        }
    });
}

export default connectToDb;