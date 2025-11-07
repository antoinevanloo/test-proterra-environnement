import express from 'express'
import payload from 'payload'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
const PORT = parseInt(process.env.PAYLOAD_PORT || '3001', 10)

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'YOUR-SECRET-KEY',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: http://localhost:${PORT}/admin`)
    },
  })

  app.listen(PORT, () => {
    console.log(`✅ Payload CMS Admin running on http://localhost:${PORT}/admin`)
  })
}

start()
