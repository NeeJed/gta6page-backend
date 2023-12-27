import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors';

const prisma = new PrismaClient()
const app = express()
const PORT = 5000;

app.use(cors())
app.use(express.json())

app.post('/api', async (req, res) => {
    console.log(req)
    const {email, name} = req.body
    if (!email || !name) {
        return res.status(400).json({message: 'Email and name required fields'})
    }
    try {
        const newRecord = await prisma.waitList.create({
            data: {
                email, name
            },
        })
        res.json(newRecord)
    } catch (error) {
        res.status(400).json({message: error})
    }
})

const server = app.listen(PORT, () => {
    console.log(`Current port: ${PORT}`)
})