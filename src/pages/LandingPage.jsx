import { useState, useEffect, useRef } from 'react'
import { ArrowRight, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../assets/components/Navbar'
import MapComponent from '../assets/components/MapComponent'
import canchas from '../json/canchas.json'
import deportes from '../json/deportes.json'
import beneficios from '../json/beneficios.json'
import DeportesCarousel from '../assets/components/DeportesCarousel'
import 'leaflet/dist/leaflet.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LandingPage() {
    const [mapLoaded, setMapLoaded] = useState(false);
    const [deporteSeleccionado, setDeporteSeleccionado] = useState(null);
    const ubicacionesRef = useRef(null);

    useEffect(() => {
        setMapLoaded(true);
    }, []);

    const handleDeporteClick = (deporte) => {
        setDeporteSeleccionado(deporte);
        if (ubicacionesRef.current) {
            ubicacionesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const canchasFiltradas = deporteSeleccionado
        ? canchas.filter((cancha) => cancha.deportes.includes(deporteSeleccionado))
        : canchas;

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">

            <Navbar />

            <main className="container mx-auto px-4 py-8 md:py-12">
                <section className="flex flex-col md:flex-row items-center mb-12 md:mb-20">

                    <div className="md:w-1/2 h-64 md:h-auto">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1663134090418-b27e76a752fd?w=800&q=80"
                            alt="Deportes en acción"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                            ¡Vive la pasión del deporte en Catamarca!
                        </h2>
                        <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-6">
                            Únete a una comunidad activa y vibrante mientras disfrutas de tus deportes favoritos.
                        </h3>
                        <p className="text-lg md:text-xl text-gray-700 mb-6">
                            Participa en nuestras modernas instalaciones, diseñadas para que experimentes lo mejor del deporte y la vida activa. ¡Tenemos actividades para todas las edades y niveles de experiencia!
                        </p>
                        <a
                            href="#ubicaciones"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-6 py-3 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center"
                        >
                            Descubre nuestras instalaciones
                            <ArrowRight className="ml-2" />
                        </a>
                    </div>
                </section>

                <section id="actividades" className="mb-12 md:mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 md:mb-12 text-center">Actividades</h3>
                    <DeportesCarousel deportes={deportes} onDeporteClick={handleDeporteClick} />
                </section>

                <section id="beneficios" className="mb-12 md:mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 md:mb-12 text-center">Beneficios de participar</h3>
                    <div className="bg-white shadow-xl rounded-lg">
                        <div className="p-6 md:p-8">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-base md:text-lg">
                                {beneficios.map((beneficio, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {beneficio}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="ubicaciones" className="mb-12 md:mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 md:mb-12 text-center">Nuestras Instalaciones</h3>
                    <div className="bg-white shadow-xl rounded-lg p-4 md:p-6">
                        <div className="mb-6">
                            <p className="text-base md:text-lg text-gray-700 mb-4">
                                Visita nuestras instalaciones deportivas distribuidas por San Fernando del Valle de Catamarca. Acércate a la más cercana para obtener información e inscribirte en las actividades que te interesen.
                            </p>
                            <p className="text-base md:text-lg text-blue-700 font-semibold">
                                Horario de atención para inscripciones: Lunes a Viernes de 9:00 a 18:00
                            </p>
                        </div>
                        <div ref={ubicacionesRef} className="h-[500px] md:h-[600px] rounded-lg overflow-hidden mb-6 relative z-40">
                            {mapLoaded && <MapComponent canchas={canchasFiltradas} deporteSeleccionado={deporteSeleccionado} />}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {canchasFiltradas.map((cancha, index) => (
                                <Link
                                    to={`/canchas/${cancha.nombre}`}
                                    key={index}
                                    className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 p-6"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="bg-blue-100 text-blue-700 rounded-full p-4 mb-4">
                                            <MapPin className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-blue-800 mb-2 group-hover:text-yellow-500 transition">
                                            {cancha.nombre}
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            {cancha.descripcion || "Haz clic para más detalles"}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

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
}

export default LandingPage;
