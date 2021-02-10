import express from 'express'
import appointmentsRouter from './appointments.routes'

const routes = express()

routes.use('/appointments', appointmentsRouter)

export default routes
