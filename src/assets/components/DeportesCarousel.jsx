import { useState } from 'react';
import Slider from "react-slick";

function DeportesCarousel({ deportes, onDeporteClick }) {
    const [open, setOpen] = useState(null);

    const handleToggle = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    const handleDeporteClick = (deporte) => {
        onDeporteClick(deporte.nombre);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    

    return (
        <div>
            <Slider {...settings} className="sports-carousel">
                {deportes.map((deporte, index) => (
                    <div
                        key={index}
                        className="p-4 cursor-pointer"
                        onClick={() => handleDeporteClick(deporte)}
                    >
                        <div
                            className="bg-white rounded-lg shadow-lg text-center p-6 hover:shadow-xl transform transition flex flex-col justify-between h-full"
                            style={{ minHeight: '250px', maxHeight: '250px' }} 
                        >
                            <div className="w-24 h-24 mx-auto mb-4">
                                <img
                                    src={deporte.svgIcon}
                                    alt={`${deporte.nombre} icono`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-blue-700 mb-2">{deporte.nombre}</h4>
                            <p className="text-gray-600 text-sm flex-grow">{deporte.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* <div className="mt-12">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">Grupos por Edades</h3>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
                    {deportes.map((deporte, index) => (
                        <div key={index} className="mb-4">
                            <button
                                className="w-full text-left bg-blue-700 text-white p-4 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none"
                                onClick={() => handleToggle(index)}
                            >
                                <h4 className="text-xl font-semibold">{deporte.nombre}</h4>
                            </button>
                            {open === index && (
                                <div className="mt-4 space-y-2">
                                    {deporte.edades.map((edad, i) => (
                                        <div key={i} className="bg-blue-100 p-4 rounded-lg shadow-md">
                                            <p className="text-lg text-gray-700">{edad}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}

export default DeportesCarousel;
