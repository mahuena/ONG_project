import {useEffect, useState} from "react";

export const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/app_pics/hero_pic1.avif",
        "/app_pics/hero_pic2.jpg",
        "/app_pics/hero_pic5.jpg",
        "/app_pics/hero_pic3.jpg",
        "/app_pics/hero_pic4.jpg",

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className="relative w-full h-80 md:h-[700px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover"/>
                    </div>
                ))}
                <div className="absolute inset-0 flex flex-col justify-center bg-blue bg-opacity-50">
                    <div className="justify-start max-w-7xl w-full mx-auto">
                        <span className="text-yellow-400 text-lg md:text-2xl font-bold mb-5 md:mb-10 uppercase space-x-5">Uni
                            dans la Concorde</span>
                    </div>


                </div>
            </div>
        </>
    );
};