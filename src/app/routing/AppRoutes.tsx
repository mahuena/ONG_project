// AppRoutes.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout';
import { Home } from '../modules/home/Home';
import { Projects } from '../modules/pages/Projects';
import { Articles } from '../modules/pages/Articles';
import Spinner from '../components/Spinner';
import {Partenariats} from "../modules/pages/Partenariats.tsx";
import {Interviews} from "../modules/pages/Interviews.tsx";

const AppRoutes: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500); // Simulate loading delay
    }, []);

    return (
        <Router>
            {loading ? (
                <Spinner />
            ) : (
                <AppLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/articles" element={<Articles />} />
                        <Route path="/partenariats" element={<Partenariats />} />
                        <Route path="/interviews" element={<Interviews />} />
                    </Routes>
                </AppLayout>
            )}
        </Router>
    );
};

export default AppRoutes;
