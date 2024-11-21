import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_CATACAPI_claro.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-blue-600 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl md:text-3xl font-bold text-white">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo Canchas"
                            className="w-48 md:w-40 inline-block mx-auto pointer-events-none"
                        />
                    </Link>
                </h1>
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <nav className={`${menuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-blue-600 md:bg-transparent`}>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
                        <li><a href="/" className="text-white hover:text-yellow-400 transition-colors block">Inicio</a></li>
                        <li><a href="#actividades" className="text-white hover:text-yellow-400 transition-colors block">Actividades</a></li>
                        <li><a href="#beneficios" className="text-white hover:text-yellow-400 transition-colors block">Beneficios</a></li>
                        <li><a href="#ubicaciones" className="text-white hover:text-yellow-400 transition-colors block">Ubicaciones</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
