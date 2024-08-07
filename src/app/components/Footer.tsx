import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

export const Footer = () => {
    return (
        <>
            <div className=' py-5 flex flex-col bg-gray-800 mt-10'>
                <div className='w-full max-w-7xl mx-auto'>
                    <div className='flex flex-wrap border-b border-white py-2 md:py-7 lg:py-10 px-5 gap-10 justify-between'>
                        <div className='w-full md:w-auto'>
                            <div className='flex flex-row justify-between gap-5'>
                                <div>
                                    <h4 className='text-white text-md lg:text-xl'>Liens rapide</h4>
                                    <ul className='space-y-3 mt-2'>
                                        <li className='rounded-bullet'><a href='#' className='text-white hover:text-yellow-400 text-sm lg:text-lg'>Lien 1</a></li>
                                        <li className='rounded-bullet'><a href='#' className='text-white hover:text-yellow-400 text-sm lg:text-lg'>Lien 2</a></li>
                                        <li className='rounded-bullet'><a href='#' className='text-white hover:text-yellow-400 text-sm lg:text-lg'>Lien 3</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className='text-white text-md lg:text-xl'>Liens important</h4>
                                    <ul className='space-y-3 mt-2'>
                                        <li className='rounded-bullet'><a href='#' className='text-white hover:text-yellow-400 text-sm lg:text-lg'>Lien A</a></li>
                                        <li className='rounded-bullet'><a href='#' className='text-white hover:text-yellow-400 text-sm lg:text-lg'>Lien B</a></li>
                                        <li className='rounded-bullet'><a href='#' className='text-white hover:text-yellow-400 text-sm lg:text-lg'>Lien C</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-auto flex justify-center'>
                            <div className='flex flex-col items-center space-y-3'>
                                <div className='text-center' style={{width: '200px'}}>
                                    <Link to='/dashboard'>
                                        <h1 className='font-bold text-3xl text-white'>Logo</h1>
                                    </Link>
                                </div>
                                <p className='text-white text-sm lg:text-lg'>Et si ensemble, nous repensions le Gabon ?</p>

                                <div className='flex gap-2'>
                                    <motion.a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'
                                              className="p-2 rounded-full bg-transparent hover:bg-yellow-400 flex items-center justify-center social-icon"
                                              whileHover={{y: -10}}>
                                        <FontAwesomeIcon icon={faInstagram} className='text-white text-sm lg:text-lg'/>
                                    </motion.a>
                                    <motion.a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'
                                              className="p-2 rounded-full bg-transparent hover:bg-yellow-400 flex items-center justify-center social-icon"
                                              whileHover={{y: -10}}>
                                        <FontAwesomeIcon icon={faFacebookF} className='text-white text-sm lg:text-lg'/>
                                    </motion.a>
                                    <motion.a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'
                                              className="p-2 rounded-full bg-transparent hover:bg-yellow-400 flex items-center justify-center social-icon"
                                              whileHover={{y: -10}}>
                                        <FontAwesomeIcon icon={faTwitter} className='text-white text-sm lg:text-lg'/>
                                    </motion.a>
                                    <motion.a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'
                                              className="p-2 rounded-full bg-transparent hover:bg-yellow-400 flex items-center justify-center social-icon"
                                              whileHover={{y: -10}}>
                                        <FontAwesomeIcon icon={faLinkedinIn} className='text-white text-sm lg:text-lg'/>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-auto hidden md:flex flex-col items-start space-y-3'>
                            <h4 className='text-white text-lg lg:text-xl'>Rejoignez-nous</h4>
                            <div className='flex items-center space-x-3'>
                                <FontAwesomeIcon icon={faEnvelope} className='text-yellow-400 text-lg'/>
                                <p className='mb-0 text-sm lg:text-lg text-white'>info@example.com</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <FontAwesomeIcon icon={faPhone} className='text-yellow-400 text-lg'/>
                                <p className='mb-0 text-sm lg:text-lg text-white'>(123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-center'>
                        <p className='text-white text-sm lg:text-lg'>&copy; 2023 Votre Entreprise. Tous droits
                            réservés.</p>
                    </div>
                </div>
            </div>
        </>
    );
};