import express from 'express'
import payload from 'payload'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PAYLOAD_PORT || 3001

// Set serverURL for Payload Admin before init
// This overrides NEXT_PUBLIC_SERVER_URL from .env for the Payload Admin context
process.env.NEXT_PUBLIC_SERVER_URL = `http://localhost:${PORT}`

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
