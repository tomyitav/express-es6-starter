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

controller.deleteCar = async (req, res) => {
    let carName = req.body.name;
    try{
        const removedCar = await Car.removeCar(carName);
        logger.info('Deleted Car- ' + removedCar);
        res.send('Car successfully deleted');
    }
    catch(err) {
        logger.error('Failed to delete car- ' + err);
        res.send('Delete failed..!');
    }
}

export default controller;