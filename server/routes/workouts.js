import express from "express"
import { createWorkout,updateWorkout,deleteWorkout,getWorkout,getWorkouts } from "../controllers/workoutController.js";

const router = express.Router();

router.get('/',getWorkouts);
router.get('/:id',getWorkout);
router.post('/',createWorkout);
router.delete('/:id',deleteWorkout);
router.patch('/:id',updateWorkout);


export default router;