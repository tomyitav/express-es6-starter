import mongoose from 'mongoose';

const CarSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true, index: true}
}, {collection : 'Car'});

let CarsModel = mongoose.model('Car', CarSchema);

CarsModel.getAll = () => {
    return CarsModel.find({});
}

CarsModel.addCar = (carToAdd) => {
    return carToAdd.save();
}

CarsModel.removeCar = (carName) => {
    return CarsModel.remove({name: carName});
}

export default CarsModel;