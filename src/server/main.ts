import express from 'express'
import ViteExpress from 'vite-express'
import { config } from 'dotenv'

config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get('/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!')
})

ViteExpress.listen(app, +PORT, () => console.log('Server is listening on port 3000...'))
