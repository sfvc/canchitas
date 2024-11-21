import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MapComponent = ({ canchas, deporteSeleccionado }) => {
  const center = [-28.468611, -65.779167];
  
  // Filtra las canchas por el deporte seleccionado
  const canchasFiltradas = canchas.filter(cancha =>
    cancha.deportes && cancha.deportes.includes(deporteSeleccionado)
  );

  // Si no hay canchas filtradas, muestra las canchas completas
  const canchasAMostrar = deporteSeleccionado ? canchasFiltradas : canchas;

  return (
    <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {canchasAMostrar.map((location, index) => (
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
  );
};

export default MapComponent;
