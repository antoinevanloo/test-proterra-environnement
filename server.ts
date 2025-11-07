import express from 'express'
import payload from 'payload'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PAYLOAD_PORT || 3001

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'YOUR-SECRET-KEY',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: http://localhost:${PORT}${payload.getAdminURL()}`)
    },
  })

  app.listen(PORT, () => {
    console.log(`Payload CMS Admin running on http://localhost:${PORT}/admin`)
  })
}

start()
