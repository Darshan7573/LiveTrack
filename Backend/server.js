import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const vehicleData = [
    { "latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z" },
    { "latitude": 17.384944, "longitude": 78.487071, "timestamp": "2024-07-20T10:01:00Z" }, // 0.1 km
    { "latitude": 17.384844, "longitude": 78.487471, "timestamp": "2024-07-20T10:02:00Z" }, // 0.2 km
    { "latitude": 17.384744, "longitude": 78.487871, "timestamp": "2024-07-20T10:03:00Z" }, // 0.3 km
    { "latitude": 17.384644, "longitude": 78.488271, "timestamp": "2024-07-20T10:04:00Z" }, // 0.4 km
    { "latitude": 17.384544, "longitude": 78.488671, "timestamp": "2024-07-20T10:05:00Z" }, // 0.5 km
    { "latitude": 17.384444, "longitude": 78.489071, "timestamp": "2024-07-20T10:06:00Z" }, // 0.6 km
    { "latitude": 17.384344, "longitude": 78.489471, "timestamp": "2024-07-20T10:07:00Z" }, // 0.7 km
    { "latitude": 17.384244, "longitude": 78.489871, "timestamp": "2024-07-20T10:08:00Z" }, // 0.8 km
    { "latitude": 17.384144, "longitude": 78.490271, "timestamp": "2024-07-20T10:09:00Z" }, // 0.9 km
    { "latitude": 17.384044, "longitude": 78.490671, "timestamp": "2024-07-20T10:10:00Z" }, // 1.0 km
    { "latitude": 17.383944, "longitude": 78.491071, "timestamp": "2024-07-20T10:11:00Z" }, // 1.1 km
    // { "latitude": 17.383844, "longitude": 78.491471, "timestamp": "2024-07-20T10:12:00Z" }, // 1.2 km
    // { "latitude": 17.383744, "longitude": 78.491871, "timestamp": "2024-07-20T10:13:00Z" }, // 1.3 km
    // { "latitude": 17.383644, "longitude": 78.492271, "timestamp": "2024-07-20T10:14:00Z" }, // 1.4 km
    // { "latitude": 17.383544, "longitude": 78.492671, "timestamp": "2024-07-20T10:15:00Z" }, // 1.5 km
    // { "latitude": 17.383444, "longitude": 78.493071, "timestamp": "2024-07-20T10:16:00Z" }, // 1.6 km
    // { "latitude": 17.383344, "longitude": 78.493471, "timestamp": "2024-07-20T10:17:00Z" }, // 1.7 km
    // { "latitude": 17.383244, "longitude": 78.493871, "timestamp": "2024-07-20T10:18:00Z" }, // 1.8 km
    // { "latitude": 17.383144, "longitude": 78.494271, "timestamp": "2024-07-20T10:19:00Z" }, // 1.9 km
    // { "latitude": 17.383044, "longitude": 78.494671, "timestamp": "2024-07-20T10:20:00Z" }, // 2.0 km
    // { "latitude": 17.382944, "longitude": 78.495071, "timestamp": "2024-07-20T10:21:00Z" }, // 2.1 km
    // { "latitude": 17.382844, "longitude": 78.495471, "timestamp": "2024-07-20T10:22:00Z" }, // 2.2 km
    // { "latitude": 17.382744, "longitude": 78.495871, "timestamp": "2024-07-20T10:23:00Z" }, // 2.3 km
    // { "latitude": 17.382644, "longitude": 78.496271, "timestamp": "2024-07-20T10:24:00Z" }, // 2.4 km
    // { "latitude": 17.382544, "longitude": 78.496671, "timestamp": "2024-07-20T10:25:00Z" }, // 2.5 km
    // { "latitude": 17.382444, "longitude": 78.497071, "timestamp": "2024-07-20T10:26:00Z" }, // 2.6 km
    // { "latitude": 17.382344, "longitude": 78.497471, "timestamp": "2024-07-20T10:27:00Z" }, // 2.7 km
    // { "latitude": 17.382244, "longitude": 78.497871, "timestamp": "2024-07-20T10:28:00Z" }, // 2.8 km
    // { "latitude": 17.382144, "longitude": 78.498271, "timestamp": "2024-07-20T10:29:00Z" }, // 2.9 km
    // { "latitude": 17.382044, "longitude": 78.498671, "timestamp": "2024-07-20T10:30:00Z" }, // 3.0 km
];




app.get('/api/vehicle-data', (req, res) => {
    res.json(vehicleData)
})

app.listen(3000, () => {
    console.log('Server Connected')
})
