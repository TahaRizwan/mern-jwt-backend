import express from 'express'
import 'dotenv/config'
import { router } from './routes/index.js'
import mongoose from 'mongoose'
import cors from 'cors'

// Express App
const app = express()

const PORT = process.env.PORT || 5000

// Middleware

app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
  next()
})

// ROUTES
app.use('/api/workouts', router)

// CONNECT TO DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Connected to DB`)
  })
  .catch((error) => {
    console.log('Error', error)
  })

// LISTENING FOR REQUEST
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})
