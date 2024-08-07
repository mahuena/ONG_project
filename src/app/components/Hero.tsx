import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero: React.FC = () => {
    const location = useLocation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/app_pics/hero_pic1.avif",
        "/app_pics/hero_pic2.jpg",
        "/app_pics/hero_pic5.jpg",
        "/app_pics/hero_pic3.jpg",
        "/app_pics/hero_pic4.jpg"
    ];

    const getTitle = () => {
        switch (location.pathname) {
            case '/projects':
                return 'Nos Projets';
            case '/articles':
                return 'Nos Articles';
            case '/partenariats':
                return 'Nos Partenaires';
            case '/interviews':
                return 'Entretiens Concorde';
            case '/actions':
                return 'Nous Soutenir';
            case '/partners':
                return 'Notre Tchat Box';
            case '/contact':
                return 'À Propos';
            default:
                return 'Welcome';
        }
    };
    const getCaption = () => {
        switch (location.pathname) {
            case '/projects':
                return 'Projets';
            case '/articles':
                return 'Réflexion-Débat';
            case '/partenariats':
                return 'Partenariats';
            case '/interviews':
                return 'Interviews';
            case '/actions':
                return 'Nous soutenir';
            case '/partners':
                return 'Tchat Box';
            case '/contact':
                return 'À propos';
            default:
                return 'Welcome';
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-80 md:h-96">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-white text-4xl md:text-5xl font-bold mb-5 md:mb-10">{getTitle()}</h1>
                <div className="flex flex-row gap-2 items-center text-white text-lg md:text-xl font-bold">
                    <Link to="/" className="text-white hover:text-yellow-400">Accueil</Link>
                    <RightOutlined  className="text-yellow-400 "/>
                    <span>{getCaption()}</span>
                </div>
            </div>
        </div>
    );
};