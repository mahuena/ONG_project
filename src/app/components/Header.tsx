import { useState } from "react";
import { Menu, Dropdown } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { key: "home", label: <Link to="/" className="text-lg">Accueil</Link> },
        {
            key: "travaux",
            label: <span className="text-lg">Travaux</span>,
            children: [
                { key: "projects", label: <Link to="/projects" className="text-lg">Projects</Link> },
                { key: "articles", label: <Link to="/articles" className="text-lg">Articles</Link> },
                { key: "partenariats", label: <Link to="/partenariats" className="text-lg">Partenariats</Link> },
                { key: "interviews", label: <Link to="/interviews" className="text-lg">Interviews</Link> }
            ]
        },
        { key: "actions", label: <Link to="/actions" className="text-lg">Nous Soutenir</Link> },
        { key: "partners", label: <Link to="/partners" className="text-lg">Tchat Box</Link> },
        { key: "contact", label: <Link to="/contact" className="text-lg">À Propos</Link> }
    ];

    const dropdownMenuItems = [
        { key: "projects", label: <Link to="/projects" className="text-lg">Projects</Link> },
        { key: "articles", label: <Link to="/articles" className="text-lg">Articles</Link> },
        { key: "partenariats", label: <Link to="/partenariats" className="text-lg">Partenariats</Link> },
        { key: "interviews", label: <Link to="/interviews" className="text-lg">Interviews</Link> }
    ];

    return (
        <div className='p-3 lg:p-4 flex flex-col items-center w-full'>
            <header className="text-black flex justify-between items-center max-w-7xl w-full">
                <Link to="/" className="text-4xl font-bold flex items-center mb-3 mr-8">Logo</Link>

                <button
                    className="lg:hidden text-2xl hover:text-yellow-400"
                    onClick={toggleMenu}
                >
                    <MenuOutlined />
                </button>

                <Menu
                    mode="horizontal"
                    className="border-none w-full hidden lg:flex justify-center gap-6"
                    items={menuItems}
                />

                <motion.button
                    className="custom-button hidden lg:block"
                    whileHover={{ scale: 1.1 }}
                >
                    Nous Contacter
                </motion.button>
            </header>

            {isMenuOpen && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden w-full bg-white shadow-lg z-50"
                >
                    <nav>
                        <ul className="flex flex-col w-full">
                            <li className="text-lg p-2"><Link to="/">Accueil</Link></li>
                            <li className="text-lg p-2 relative">
                                <Dropdown menu={{ items: dropdownMenuItems }} trigger={['click']}>
                                    <button className="w-full text-left">Travaux</button>
                                </Dropdown>
                            </li>
                            <li className="text-lg p-2"><Link to="/actions">Nous Soutenir</Link></li>
                            <li className="text-lg p-2"><Link to="/partners">Tchat Box</Link></li>
                            <li className="text-lg p-2"><Link to="/contact">À Propos</Link></li>
                        </ul>
                    </nav>
                </motion.div>
            )}
        </div>
    );
};