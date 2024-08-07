// AppLayout.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { InfoWrapper } from './InfoWrapper';
import { Hero } from './Hero';
import Spinner from './Spinner';

interface LayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500); // Simulate loading delay
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <InfoWrapper />
                    <Header />
                    {location.pathname !== '/' && <Hero />}
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </>
            )}
        </div>
    );
};