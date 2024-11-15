import { useState, useEffect } from 'react'
import { ArrowRight, Clock, Users, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import MapComponent from './MapComponent'
import 'leaflet/dist/leaflet.css'

const locations = [
  { name: "Polideportivo Municipal", lat: -28.468611, lng: -65.779167 },
  { name: "Estadio Bicentenario", lat: -28.463889, lng: -65.770833 },
  { name: "Club Atlético Vélez Sarsfield", lat: -28.471944, lng: -65.785556 },
  { name: "Complejo Deportivo La Gruta", lat: -28.459722, lng: -65.776389 },
  { name: "Cancha de Fútbol Parque Adán Quiroga", lat: -28.455556, lng: -65.783333 },
]

const deportes = [
  {
    name: "Fútbol",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    description: "Forma parte de nuestros equipos y compite en ligas locales.",
    edades: ["6-12 años", "13-17 años", "18+ años"],
    horarios: ["Lunes y Miércoles 16:00-18:00", "Martes y Jueves 18:00-20:00", "Sábados 10:00-12:00"]
  },
  {
    name: "Baloncesto",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    description: "Mejora tus habilidades en la cancha con nuestros entrenamientos.",
    edades: ["8-14 años", "15-20 años", "21+ años"],
    horarios: ["Martes y Jueves 17:00-19:00", "Lunes y Miércoles 19:00-21:00", "Sábados 09:00-11:00"]
  },
  {
    name: "Tenis",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
    description: "Aprende o perfecciona tu técnica con nuestros instructores.",
    edades: ["7-12 años", "13-18 años", "19+ años"],
    horarios: ["Lunes y Viernes 15:00-17:00", "Martes y Jueves 17:00-19:00", "Sábados 08:00-10:00"]
  },
  {
    name: "Natación",
    image: "https://images.unsplash.com/photo-1560090995-01632a28895b?w=800&q=80",
    description: "Desde principiantes hasta avanzados, tenemos clases para todos.",
    edades: ["5-10 años", "11-16 años", "17+ años"],
    horarios: ["Miércoles y Viernes 16:00-18:00", "Martes y Jueves 18:00-20:00", "Sábados 11:00-13:00"]
  },
]

function App() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMapLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      <header className="bg-amber-100 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-bold text-amber-800">
            Deportes Municipales Catamarca
          </h1>
          <button
            className="md:hidden text-amber-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <nav className={`${menuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-amber-100 md:bg-transparent`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <li><a href="#actividades" className="text-amber-900 hover:text-amber-700 transition-colors block">Actividades</a></li>
              <li><a href="#beneficios" className="text-amber-900 hover:text-amber-700 transition-colors block">Beneficios</a></li>
              <li><a href="#ubicaciones" className="text-amber-900 hover:text-amber-700 transition-colors block">Ubicaciones</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4 md:mb-6">
            ¡Vive la pasión del deporte en Catamarca!
          </h2>
          <p className="text-xl md:text-2xl text-amber-800 mb-6 md:mb-10 max-w-2xl mx-auto">
            Descubre nuevas pasiones, haz amigos y mantente en forma con nuestras emocionantes actividades deportivas en la capital catamarqueña.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center mx-auto">
            Conoce nuestras instalaciones <ArrowRight className="ml-2" />
          </button>
        </section>

        <section id="actividades" className="mb-12 md:mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 md:mb-12 text-center">Nuestras Actividades</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {deportes.map((deporte, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-lg">
                <img src={deporte.image} alt={deporte.name} className="w-full h-48 md:h-64 object-cover" />
                <div className="p-4 md:p-6">
                  <h4 className="text-xl md:text-2xl font-semibold mb-2 text-amber-800">{deporte.name}</h4>
                  <p className="text-gray-600 mb-4">{deporte.description}</p>
                  <div className="mb-4">
                    <h5 className="font-semibold text-amber-700 mb-2 flex items-center">
                      <Users className="mr-2" size={20} /> Grupos de edad:
                    </h5>
                    <ul className="list-disc list-inside text-gray-600">
                      {deporte.edades.map((edad, i) => (
                        <li key={i}>{edad}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-amber-700 mb-2 flex items-center">
                      <Clock className="mr-2" size={20} /> Horarios:
                    </h5>
                    <ul className="list-disc list-inside text-gray-600">
                      {deporte.horarios.map((horario, i) => (
                        <li key={i}>{horario}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="beneficios" className="mb-12 md:mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 md:mb-12 text-center">Beneficios de participar</h3>
          <div className="bg-white shadow-xl rounded-lg">
            <div className="p-6 md:p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-base md:text-lg">
                {[
                  "Mejora tu salud física y mental",
                  "Desarrolla habilidades de trabajo en equipo",
                  "Haz nuevos amigos y amplía tu círculo social",
                  "Aprende disciplina y compromiso",
                  "Diviértete mientras te mantienes activo",
                  "Representa a Catamarca en competencias regionales"
                ].map((beneficio, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 md:mb-12 text-center">Nuestras Instalaciones</h3>
          <div className="bg-white shadow-xl rounded-lg p-4 md:p-6">
            <div className="mb-6">
              <p className="text-base md:text-lg text-gray-700 mb-4">
                Visita nuestras instalaciones deportivas distribuidas por San Fernando del Valle de Catamarca. Acércate a la más cercana para obtener información e inscribirte en las actividades que te interesen.
              </p>
              <p className="text-base md:text-lg text-amber-800 font-semibold">
                Horario de atención para inscripciones: Lunes a Viernes de 9:00 a 18:00
              </p>
            </div>
            <div className="h-[500px] md:h-[600px] rounded-lg overflow-hidden mb-6 relative z-40">
              {mapLoaded && <MapComponent locations={locations} />}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-amber-800">Ubicaciones:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <li key={index} className="flex items-start">
                    <MapPin className="mr-2 text-amber-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{location.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-amber-800 text-amber-100 py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2024 Deportes Municipales. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-pink-400 transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-blue-300 transition-colors"><Twitter /></a>
          </div>
          <p className="text-sm text-amber-200">Diseñado con pasión para inspirar a nuestra comunidad catamarqueña</p>
        </div>
      </footer>
    </div>
  )
}

export default App