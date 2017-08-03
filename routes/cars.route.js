import express from "express";
import { getAll, addCar, deleteCar } from "../controllers/cars.controller"
const router = express.Router()

router.get('/allcars', (req, res, next) => {
    getAll(req, res, next);
});

router.post('/addcar', (req, res, next) => {
    addCar(req, res, next);
});

router.delete('/deletecar', (req, res, next) => {
    deleteCar(req, res, next);
});

export default router;