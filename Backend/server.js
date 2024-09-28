import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'https://livetrackvehicle.netlify.app/'
}))

let vehicleData = [
    { latitude: 13.000694, longitude: 77.495999, timestamp: "2024-09-28T07:00:00Z" }, //Home
];

let currentPosition = { latitude: 13.000694, longitude: 77.495999 };


//Dynamically updating the vehicleData
let simulateMovment = () => {
    currentPosition.latitude += (Math.random() - 0.5) * 0.01,
        currentPosition.longitude += (Math.random() - 0.5) * 0.01

    vehicleData.push({
        latitude: currentPosition.latitude,
        longitude: currentPosition.longitude,
        timestamp: new Date().toISOString()
    })

    //Deletes the vehicle Data when the data is more than 100
    if (vehicleData.length > 100) {
        vehicleData.shift()
    }
}

setInterval(simulateMovment, 5000)



app.get('/api/vehicle-data', (req, res) => {
    res.json(vehicleData)
})

app.listen(3000, () => {
    console.log('Server Connected')
})
