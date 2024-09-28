import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const vehicleData = [
    { latitude: 13.000694, longitude: 77.495999, timestamp: "2024-09-28T07:00:00Z" }, //Home
    { latitude: 12.9716, longitude: 77.5946, timestamp: "2024-09-28T08:00:00Z" }, // Bengaluru
    { latitude: 13.3372, longitude: 77.6955, timestamp: "2024-09-28T09:00:00Z" }, // Nandi Hills
    { latitude: 14.2816, longitude: 77.3700, timestamp: "2024-09-28T11:00:00Z" }, // Anantapur
    { latitude: 15.8281, longitude: 78.0373, timestamp: "2024-09-28T13:00:00Z" }, // Kurnool
    { latitude: 17.3850, longitude: 78.4867, timestamp: "2024-09-28T15:00:00Z" }, // Hyderabad
];


app.get('/api/vehicle-data', (req, res) => {
    res.json(vehicleData)
})

app.listen(3000, () => {
    console.log('Server Connected')
})
