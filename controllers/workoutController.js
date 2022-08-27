import mongoose from 'mongoose'
import { Workout } from '../models/workouts.js'

//Create new workout controller
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Workout.create({ title, load, reps })
    res.json(workout).status(200)
  } catch (error) {
    console.log(`error ${error}`)
    res.json({ error: error.message }).status(404)
  }
}

//Get All workout controller
export const getAllWorkouts = async (req, res) => {
  try {
    const workout = await Workout.find({}).sort({ createdAt: -1 })
    res.json(workout).status(200)
  } catch (error) {
    console.log(`error ${error}`)
    res.json({ error: error.message }).status(404)
  }
}

//Get Single workout controller
export const getSingleWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'ID is invalid' })
  }

  try {
    const workout = await Workout.findById(id)
    if (!workout) {
      return res.status(404).json({ error: 'No such workout' })
    }
    res.json(workout).status(200)
  } catch (error) {
    console.log(`error ${error}`)
    res.json({ error: error.message }).status(404)
  }
}

//Delete Single workout controller
export const deleteWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid ID' })
  }
  try {
    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!workout) {
      return res.status(404).json({ error: 'No such workout' })
    }
    res.json(workout).status(200)
  } catch (error) {
    console.log(`error ${error}`)
    res.json({ error: error.message }).status(404)
  }
}

export const updateWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid ID' })
  }
  try {
    const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
    if (!workout) {
      return res.status(404).json({ error: 'No such workout' })
    }
    res.status(200).json(workout)
  } catch (error) {
    console.log(`error ${error}`)
    res.json(error).status(404)
  }
}
