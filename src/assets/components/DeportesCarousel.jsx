import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";

function DeportesCarousel({ deportes }) {
    const navigate = useNavigate()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
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
        <Slider {...settings} className="sports-carousel">
            {deportes.map((deporte, index) => (
                <div
                    key={index}
                    className="p-4 cursor-pointer"
                    onClick={() => navigate(`/deportes/${deporte.url}`)}
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

    );
}

export default DeportesCarousel;
