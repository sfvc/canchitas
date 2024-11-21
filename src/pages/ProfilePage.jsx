import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Clock, Facebook, Instagram, User, Users, Youtube } from "lucide-react";
import L from "leaflet";
import deportes from "../json/deportes.json";
import Navbar from "../assets/components/Navbar";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
})

const ProfilePage = ({ canchas = [] }) => {
    const { nombre } = useParams();

    const cancha = canchas.find((c) => c.nombre === nombre);

    if (!cancha) {
        return (
            <div className="bg-gray-100 min-h-screen flex justify-center items-center">
                <h1 className="text-2xl font-bold text-red-600">Cancha no encontrada.</h1>
            </div>
        );
    }

    const deportesDisponibles = deportes.filter((deporte) =>
        cancha.deportes.includes(deporte.nombre)
    );

    return (
        <div className="bg-gray-100 min-h-screen">

            <Navbar />

            <header className="bg-blue-700 text-white p-6 shadow-md rounded-b-lg">
                <h1 className="text-3xl font-bold text-center">{cancha.nombre}</h1>
                <p className="text-center text-lg mt-2">Conocé más sobre esta cancha y sus actividades</p>
                <div className="mt-4 text-center">
                    <p className="text-sm md:text-base">
                        <span className="font-semibold">Horario general:</span> Lunes a Viernes de 9:00 a 19:00
                    </p>
                    <p className="text-sm md:text-base">
                        <span className="font-semibold">Dirección:</span> {cancha.direccion || 'Ubicación no especificada'}
                    </p>
                    <p className="text-sm md:text-base">
                        <span className="font-semibold">Teléfono:</span> {cancha.telefono || 'No disponible'}
                    </p>
                    {cancha.descripcion && (
                        <p className="text-sm md:text-base mt-2">
                            <span className="font-semibold">Descripción:</span> {cancha.descripcion}
                        </p>
                    )}
                </div>
            </header>


            <div className="container mx-auto p-6">
                {/* Deportes disponibles */}
                <div>
                    <h3 className="text-lg font-bold text-green-600 mb-4 mt-4">Deportes Disponibles:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                        {deportesDisponibles.map((deporte, i) => (
                            <div
                                key={i}
                                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
                            >
                                <img
                                    src={deporte.image}
                                    alt={`Imagen representativa del deporte ${deporte.nombre}`}
                                    className="w-full h-48 md:h-64 object-cover rounded"
                                />
                                <div className="p-4 md:p-6">
                                    <h4 className="text-xl md:text-2xl font-semibold mb-2 text-blue-700 mt-2">{deporte.nombre}</h4>
                                    <p className="text-gray-600 mb-2 line-clamp-2">
                                        {deporte.description}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <h5 className="font-semibold text-blue-500 mb-2 flex items-center">
                                                <Users className="mr-2" size={20} /> Grupos de edad:
                                            </h5>
                                            <ul className="list-disc list-inside text-gray-600">
                                                {deporte.edades.map((edad, i) => (
                                                    <li key={i}>{edad}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-blue-500 mb-2 flex items-center">
                                                <Clock className="mr-2" size={20} /> Horarios:
                                            </h5>
                                            <ul className="list-disc list-inside text-gray-600">
                                                {deporte.horarios.map((horario, i) => (
                                                    <li key={i}>{horario}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-blue-500 mb-2 flex items-center">
                                                <User className="mr-2" size={20} /> Docentes:
                                            </h5>
                                            <ul className="list-disc list-inside text-gray-600">
                                                {deporte.docente.map((docente, i) => (
                                                    <li key={i}>{docente}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mapa */}
                <div className="mt-8">
                    <h3 className="text-lg font-bold text-green-600 mb-4">Ubicación en el mapa</h3>
                    <MapContainer
                        center={[cancha.lat, cancha.lng]}
                        zoom={15}
                        style={{ height: '400px', width: '100%' }}
                        scrollWheelZoom={false}
                        className="rounded-lg shadow-md"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker
                            position={[cancha.lat, cancha.lng]}
                            eventHandlers={{
                                click: () => {
                                    window.open(`https://www.google.com/maps?q=${cancha.lat},${cancha.lng}`, '_blank');
                                },
                            }}
                        />
                    </MapContainer>
                    <div className="text-center mt-6">
                        <a
                            href={`https://www.google.com/maps?q=${cancha.lat},${cancha.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white font-semibold text-lg py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                            Ver en Google Maps
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-blue-800 text-white py-8 md:py-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-4">Copyright &copy; <span>{(new Date().getFullYear())} Municipalidad de la Ciudad de San Fernando Del Valle de Catamarca.</span></p>
                    <div className="flex justify-center space-x-6 mb-6">
                        <a href="https://www.facebook.com/catamarcatucapital" target='blank_' className="hover:text-blue-400 transition-colors"><Facebook /></a>
                        <a href="https://www.instagram.com/catamarcacapital" target='blank_' className="hover:text-pink-400 transition-colors"><Instagram /></a>
                        <a href="https://www.youtube.com/c/CatamarcaCapital" target='blank_' className="hover:text-red-500 transition-colors"><Youtube /></a>
                    </div>
                    <p className="text-sm text-gray-200">Diseñado con pasión para inspirar a nuestra comunidad catamarqueña</p>
                </div>
            </footer>
        </div>
    );
};

export default ProfilePage;
