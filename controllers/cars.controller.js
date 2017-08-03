import Car from '../models/cars.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getAll = (req, res, next) => {
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

controller.addCar = (req, res, next) => {
    let carToAdd = new Car({
        name: req.body.name
    })
    Car.addCar(carToAdd, (err, savedCar) => {
        if(err) {
            logger.error('Error in saving car- ' + err);
            res.send('Got error in getAll');
        }
        else {
            logger.info('Adding car...');
            res.send('added: ' + savedCar);
        }
    })
}

controller.deleteCar = (req, res, next) => {
    let carName = req.body.name;
    Car.removeCar(carName, (err) => {
       if(err) {
           logger.error('Failed to delete car...');
           res.send('Delete failed..!');
       }
       else {
           logger.info('Deleted Car');
           res.send('Car successfully deleted');
       }
    });
}

export default controller;