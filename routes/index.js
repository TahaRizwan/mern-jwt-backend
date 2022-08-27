import express from 'express'
import {
  createWorkout,
  deleteWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
} from '../controllers/workoutController.js'
import { Workout } from '../models/workouts.js'

export const router = express.Router()

// GET ALL WORKOUT
router.get('/', getAllWorkouts)

// GET SINGLE WORKOUT
router.get('/:id', getSingleWorkout)

// POST A NEW WORKOUT
router.post('/', createWorkout)

// DELETE A WORKOUT
router.delete('/:id', deleteWorkout)

// PATCH A WORKOUT
router.patch('/:id',updateWorkout)
