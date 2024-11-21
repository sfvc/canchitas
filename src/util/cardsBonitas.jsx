                {/* <section id="actividades" className="mb-12 md:mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 md:mb-12 text-center">Nuestras Actividades</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                        {deportes.map((deporte, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-lg">
                                <Link to={`/deportes/${deporte.url}`}>
                                    <img
                                        src={deporte.image}
                                        alt={deporte.nombre}
                                        className="w-full h-48 md:h-64 object-cover"
                                    />
                                </Link>
                                <div className="p-4 md:p-6">
                                    <h4 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">{deporte.nombre}</h4>
                                    <p className="text-gray-600 mb-6">{deporte.description}</p>

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
                </section> */}