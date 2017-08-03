import mongoose from 'mongoose';

const CarSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true, index: true}
}, {collection : 'Car'});

let CarsModel = mongoose.model('Car', CarSchema);

CarsModel.getAll = (cb) => {
    CarsModel.find({}, cb);
}

CarsModel.addCar = (carToAdd, cb) => {
    carToAdd.save(cb);
}

CarsModel.removeCar = (carName, cb) => {
    CarsModel.remove({carName}, cb);
}

export default CarsModel;