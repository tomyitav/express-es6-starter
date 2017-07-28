import Car from '../models/cars.model'
import logger from '../core/logger/app-logger'

const getAll = (req, res, next) => {
    // res.send("All Cars received");
    Car.getAll((err, cars) => {
        if(err) {
            logger.error('Error in getting cars- ' + err);
            res.send('Got error in getAll');
        }
        else {
            logger.info('sending all cars...');
            res.send(cars);
        }
    })
}

const addCar = (req, res, next) => {
    let carToAdd = new Car({
        name: req.body.name
    })
    Car.addCar(carToAdd, (err, savedCar) => {
        if(err) {
            logger.error('Error in saving car- ' + err);
            res.send('Got error in getAll');
        }
        else {
            logger.info('sending all cars...');
            res.send('added: ' + savedCar);
        }
    })
}

export { getAll, addCar };