import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet'
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import carIcon from '/public/3d-car.png'
import stratingIcon from '/public/map-marker.png'

const vehicleIcon = new L.Icon({
    iconUrl: carIcon,
    iconSize: [50, 41],
    iconAnchor: [30, 33]
})

const startingIcon = new L.Icon({
    iconUrl: stratingIcon,
    iconSize: [35, 35],
    iconAnchor: [20, 33]
})

const Map = () => {
    const [vehiclePath, setVehiclePath] = useState([])
    const [userPosition, setUserPosition] = useState([13.000694, 77.495999]);


    useEffect(() => {
        const getGeoLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords
                        setUserPosition([latitude, longitude])
                    }
                )
            }
        }

        getGeoLocation()
    }, [])

    useEffect(() => {
        const fetchedData = async () => {
            const res = await axios.get('http://localhost:3000/api/vehicle-data')
            const path = res.data.map(coord => ({
                lat: coord.latitude,
                lng: coord.longitude
            }))
            setVehiclePath(path)
        }
        fetchedData()

        //seting the time interval to fetch data every few seconds

        const interval = setInterval(fetchedData, 5000)

        return () => clearInterval(interval)
    }, [])


    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Vehicle Movement Tracking System</h2>
            <MapContainer className='h-screen w-full' center={userPosition} zoom={15} scrollWheelZoom={true}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

                />

                {vehiclePath.length > 0 && (
                    <Marker position={vehiclePath[0]} icon={startingIcon} />
                )}

                {vehiclePath.length > 0 && (
                    <Marker position={vehiclePath[vehiclePath.length - 1]} icon={vehicleIcon} />
                )}

                (//Draws the path)

                {vehiclePath.length > 1 && (
                    <Polyline positions={vehiclePath} color='red' />
                )}
            </MapContainer>
        </div>
    )
}

export default Map