import { useState, useEffect } from 'react'
import { ArrowRight, Clock, Users, MapPin, Facebook, Instagram, Twitter, User } from 'lucide-react'
import MapComponent from './MapComponent'
import canchas from './json/canchas.json'
import deportes from './json/deportes.json'
import 'leaflet/dist/leaflet.css'

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
            <a href="#ubicaciones">Conoce nuestras instalaciones</a><ArrowRight className="ml-2" />
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
                  <div className="mt-4">
                    <h5 className="font-semibold text-amber-700 mb-2 flex items-center">
                      <User className="mr-2" size={20} /> Docente:
                    </h5>
                    <ul className="list-disc list-inside text-gray-600">
                      {deporte.docente.map((docente, i) => (
                        <li key={i}>{docente}</li>
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
              {mapLoaded && <MapComponent canchas={canchas} />}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-amber-800">Ubicaciones:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {canchas.map((cancha, index) => (
                  <li key={index} className="flex items-start">
                    <MapPin className="mr-2 text-amber-600 flex-shrink-0 mt-1" />
                    <a
                      href={`https://www.google.com/maps?q=${cancha.lat},${cancha.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-amber-600"
                    >
                      {cancha.name}
                    </a>
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