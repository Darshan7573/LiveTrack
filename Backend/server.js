import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())


const vehicleData = [
    { "latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z" },
    { "latitude": 17.385045, "longitude": 78.486672, "timestamp": "2024-07-20T10:00:05Z" },
    { "latitude": 17.385046, "longitude": 78.486673, "timestamp": "2024-07-20T10:00:10Z" },
]

app.get('/api/vehicle-data', (req, res) => {
    res.json(vehicleData)
})

app.listen(3000, () => {
    console.log('Server Connected')
})
