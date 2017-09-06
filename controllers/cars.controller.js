import Car from '../models/cars.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const cars = await Car.getAll();
        logger.info('sending all cars...');
        res.send(cars);
    }
    catch(err) {
        logger.error('Error in getting cars- ' + err);
        res.send('Got error in getAll');
    }
}

controller.addCar = async (req, res) => {
    let carToAdd = Car({
        name: req.body.name
    });
    try {
        const savedCar = await Car.addCar(carToAdd);
        logger.info('Adding car...');
        res.send('added: ' + savedCar);
    }
    catch(err) {
        logger.error('Error in getting cars- ' + err);
        res.send('Got error in getAll');
    }
}

controller.deleteCar = (req, res) => {
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