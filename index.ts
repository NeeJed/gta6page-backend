import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
const PORT = 5000;

app.use(express.json())

app.post('/api', async (req, res) => {
    const {email, name} = req.body
    if (!email || !name)
        return res.status(400).send('Email and name required fields')
    
        res.json({message: 'Hello world!'})
})

const server = app.listen(PORT, () => {
    console.log(`Current port: ${PORT}`)
})