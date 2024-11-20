import { useParams, Link } from 'react-router-dom';
import deportes from '../json/deportes.json';

function DeportePage() {
  const { url } = useParams();
  const deporte = deportes.find(d => d.url === url);

  if (!deporte) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-600 text-white">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-xl">
          Deporte no encontrado
        </h1>
        <Link
          to="/"
          className="bg-red-700 hover:bg-red-800 px-6 py-3 rounded-full shadow-xl text-white font-semibold text-lg transition duration-300 transform hover:scale-105"
        >
          Volver a la página principal
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 shadow-xl">
        <div className="text-center container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
            {deporte.nombre}
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-6">
            {deporte.description}
          </p>
        </div>
      </header>

      {/* Secciones de Información */}
      <section className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-yellow-500 rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300 transform">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
            🧒 Grupos de Edad
          </h2>
          <ul className="list-disc list-inside space-y-3 text-white">
            {deporte.edades.map((edad, index) => (
              <li key={index} className="hover:text-yellow-300 transition duration-200">
                {edad}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-700 rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300 transform">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
            👨‍🏫 Docentes
          </h2>
          <ul className="list-disc list-inside space-y-3 text-white">
            {deporte.docente.map((docente, index) => (
              <li key={index} className="hover:text-blue-300 transition duration-200">
                {docente}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Horarios */}
      <section className="container mx-auto px-6 py-10">
        <div className="bg-green-600 rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300 transform">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            🕒 Horarios
          </h2>
          <ul className="list-disc list-inside space-y-4 text-white">
            {deporte.horarios.map((horario, index) => (
              <li key={index} className="hover:text-green-300 transition duration-200">
                {horario}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="text-center">
          <Link
            to="/"
            className="bg-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-110"
          >
            Volver a la página principal
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default DeportePage;
