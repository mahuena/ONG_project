import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export const Articles = () => {
    return (
        <div className="container mx-auto px-4 my-5 lg:my-24 flex justify-center items-center">
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                <motion.div
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    className="bg-white shadow-lg rounded-lg overflow-hidden mt-7 w-80"
                >
                    <div className="h-52 overflow-hidden">
                        <img alt="Pour une politique publique de la lecture au Gabon" src="/app_pics/hero_pic.jpg"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="px-5 py-4">
                        <h2 className="text-md">Pour une politique publique de la lecture au Gabon</h2>
                        <p className="text-sm text-gray-400 mt-2">Alors qu’il n’est pas utile de revenir sur les nombreux avantages de
                            la lecture quotidienne des œuvres littéraires, force est de constater que les lycéens et
                            collégiens lisent très peu.</p>
                        <Link to="/project1" className="text-md text-yellow-400 hover:text-green-800 mt-2 block">DÉCOUVRIR
                            LE PROJET</Link>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    className="bg-white shadow-lg rounded-lg overflow-hidden mt-7 w-80"
                >
                    <div className="h-52 overflow-hidden">
                        <img alt="L'émission : Samedis de la Concorde" src="/app_pics/hero_pic2.jpg"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-4">
                        <h2 className="text-md">L'émission : Samedis de la Concorde</h2>
                        <p className="text-sm text-gray-400 mt-2">Des débats autour de sujets sociétaux qui concernent le Gabon ! Ceci
                            en compagnie d’expertes et diverses personnalités publiques. En partenariat avec le cabinet
                            NEC et Gabon Première.</p>
                        <Link to="/project2" className="text-md text-yellow-400 hover:text-green-800 mt-2 block">DÉCOUVRIR
                            LE PROJET</Link>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    className="bg-white shadow-lg rounded-lg overflow-hidden mt-7 w-80"
                >
                    <div className="h-52 overflow-hidden">
                        <img alt="Pour un accès aux ouvrages panafricains" src="/app_pics/hero_pic5.jpg"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-4">
                        <h2 className="text-md">Pour un accès aux ouvrages panafricains</h2>
                        <p className="text-sm text-gray-400 mt-2">Découvrez le projet bibliothèque Imya. Un projet tourné vers l’accès
                            aux ouvrages panafricains en milieu populaire. En partenariat avec l’Association Cri de
                            l’Enfant et la bibliothèque Imya.</p>
                        <Link to="/project3" className="text-md text-yellow-400 hover:text-green-800 mt-2 block">DÉCOUVRIR
                            LE PROJET</Link>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    className="bg-white shadow-lg rounded-lg overflow-hidden mt-7 w-80"
                >
                    <div className="h-52 overflow-hidden">
                        <img alt="Pour un accès aux ouvrages panafricains" src="/app_pics/hero_pic5.jpg"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-4">
                        <h2 className="text-md">Pour un accès aux ouvrages panafricains</h2>
                        <p className="text-sm text-gray-400 mt-2">Découvrez le projet bibliothèque Imya. Un projet tourné vers l’accès
                            aux ouvrages panafricains en milieu populaire. En partenariat avec l’Association Cri de
                            l’Enfant et la bibliothèque Imya.</p>
                        <Link to="/project3" className="text-md text-yellow-400 hover:text-green-800 mt-2 block">DÉCOUVRIR
                            LE PROJET</Link>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    className="bg-white shadow-lg rounded-lg overflow-hidden mt-7 w-80"
                >
                    <div className="h-52 overflow-hidden">
                        <img alt="Pour un accès aux ouvrages panafricains" src="/app_pics/hero_pic5.jpg"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-4">
                        <h2 className="text-md">Pour un accès aux ouvrages panafricains</h2>
                        <p className="text-sm text-gray-400 mt-2">Découvrez le projet bibliothèque Imya. Un projet tourné vers l’accès
                            aux ouvrages panafricains en milieu populaire. En partenariat avec l’Association Cri de
                            l’Enfant et la bibliothèque Imya.</p>
                        <Link to="/project3" className="text-md text-yellow-400 hover:text-green-800 mt-2 block">DÉCOUVRIR
                            LE PROJET</Link>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    className="bg-white shadow-lg rounded-lg overflow-hidden mt-7 w-80"
                >
                    <div className="h-52 overflow-hidden">
                        <img alt="Pour un accès aux ouvrages panafricains" src="/app_pics/hero_pic5.jpg"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-4">
                        <h2 className="text-md">Pour un accès aux ouvrages panafricains</h2>
                        <p className="text-sm text-gray-400 mt-2">Découvrez le projet bibliothèque Imya. Un projet tourné vers l’accès
                            aux ouvrages panafricains en milieu populaire. En partenariat avec l’Association Cri de
                            l’Enfant et la bibliothèque Imya.</p>
                        <Link to="/project3" className="text-md text-yellow-400 hover:text-green-800 mt-2 block">DÉCOUVRIR
                            LE PROJET</Link>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    className="bg-white shadow-lg rounded-lg overflow-hidden mt-7 w-80"
                >
                    <div className="h-52 overflow-hidden">
                        <img alt="Pour un accès aux ouvrages panafricains" src="/app_pics/hero_pic5.jpg"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-4">
                        <h2 className="text-md">Pour un accès aux ouvrages panafricains</h2>
                        <p className="text-sm text-gray-400 mt-2">Découvrez le projet bibliothèque Imya. Un projet tourné vers l’accès
                            aux ouvrages panafricains en milieu populaire. En partenariat avec l’Association Cri de
                            l’Enfant et la bibliothèque Imya.</p>
                        <Link to="/project3" className="text-md text-yellow-400 hover:text-green-800 mt-2 block">DÉCOUVRIR
                            LE PROJET</Link>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    className="bg-white shadow-lg rounded-lg overflow-hidden mt-7 w-80"
                >
                    <div className="h-52 overflow-hidden">
                        <img alt="Pour un accès aux ouvrages panafricains" src="/app_pics/hero_pic5.jpg"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-4">
                        <h2 className="text-md">Pour un accès aux ouvrages panafricains</h2>
                        <p className="text-sm text-gray-400 mt-2">Découvrez le projet bibliothèque Imya. Un projet tourné vers l’accès
                            aux ouvrages panafricains en milieu populaire. En partenariat avec l’Association Cri de
                            l’Enfant et la bibliothèque Imya.</p>
                        <Link to="/project3" className="text-md text-yellow-400 hover:text-green-800 mt-2 block">DÉCOUVRIR
                            LE PROJET</Link>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    className="bg-white shadow-lg rounded-lg overflow-hidden mt-7 w-80"
                >
                    <div className="h-52 overflow-hidden">
                        <img alt="Pour un accès aux ouvrages panafricains" src="/app_pics/hero_pic5.jpg"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-4">
                        <h2 className="text-md">Pour un accès aux ouvrages panafricains</h2>
                        <p className="text-sm text-gray-400 mt-2">Découvrez le projet bibliothèque Imya. Un projet tourné vers l’accès
                            aux ouvrages panafricains en milieu populaire. En partenariat avec l’Association Cri de
                            l’Enfant et la bibliothèque Imya.</p>
                        <Link to="/project3" className="text-md text-yellow-400 hover:text-green-800 mt-2 block">DÉCOUVRIR
                            LE PROJET</Link>
                    </div>
                </motion.div>
                {/* Add more duplicated blocks as needed */}
            </div>
        </div>
    );
};