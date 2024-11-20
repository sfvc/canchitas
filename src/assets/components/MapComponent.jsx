import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Fix for default marker icon in production
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
})

const MapComponent = ({ canchas }) => {
  const center = [-28.468611, -65.779167]

  return (
    <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {canchas.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>
            <div style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#ff7f50' }}>
              {location.nombre}
            </div>
            <hr style={{ margin: '8px 0' }} />
            {location.deportes && location.deportes.length > 0 ? (
              <div>
                <div style={{ fontWeight: 'bold', color: '#4682b4' }}>Deportes disponibles:</div>
                <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                  {location.deportes.map((deporte, i) => (
                    <li key={i} style={{ listStyleType: 'circle', color: '#000' }}>
                      {deporte}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div style={{ fontStyle: 'italic', color: '#666' }}>No hay información de deportes.</div>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapComponent
