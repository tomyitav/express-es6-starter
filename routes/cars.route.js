import express from "express";
import carController from "../controllers/cars.controller"
const router = express.Router()

router.get('/allcars', (req, res, next) => {
    carController.getAll(req, res, next);
});

router.post('/addcar', (req, res, next) => {
    carController.addCar(req, res, next);
});

router.delete('/deletecar', (req, res, next) => {
    carController.deleteCar(req, res, next);
});

export default router;