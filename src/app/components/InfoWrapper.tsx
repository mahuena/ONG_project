import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {motion} from "framer-motion";

export const InfoWrapper = () => {
    return (
        <>
            <div className=' p-1 md:p-3 lg:p-4 flex justify-center bg-gray-800 w-full'>
                <div className='flex flex-row justify-between w-full max-w-7xl'>
                    <div className='hidden md:flex flex-row gap-10'>
                        <div className='flex flex-row items-center gap-3'>
                            <FontAwesomeIcon icon={faPhone} className='text-white text-lg' />
                            <p className='mb-0 text-lg text-white'>(123) 456-7890</p>
                        </div>

                        <div className='flex-row items-center gap-3 hidden lg:flex'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-white text-lg' />
                            <p className='mb-0 text-lg text-white'>info@example.com</p>
                        </div>
                        <div className='flex flex-row items-center gap-3'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className='text-white text-lg' />
                            <p className='mb-0 text-lg text-white'>Libreville, Gabon - Lyon, France</p>
                        </div>
                    </div>

                    <div className='flex flex-row gap-1 justify-end'>
                        <motion.a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'
                                  className="p-2 rounded-full bg-transparent hover:bg-yellow-300 flex items-center justify-center social-icon"
                                  whileHover={{y: -10}}>
                            <FontAwesomeIcon icon={faInstagram} className='text-white text-md lg:text-lg'/>
                        </motion.a>
                        <motion.a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'
                                  className="p-2 rounded-full bg-transparent hover:bg-yellow-300 flex items-center justify-center social-icon"
                                  whileHover={{y: -10}}>
                            <FontAwesomeIcon icon={faFacebookF} className='text-white text-md lg:text-lg'/>
                        </motion.a>
                        <motion.a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'
                                  className="p-2 rounded-full bg-transparent hover:bg-yellow-300 flex items-center justify-center social-icon"
                                  whileHover={{y: -10}}>
                            <FontAwesomeIcon icon={faTwitter} className='text-white text-md lg:text-lg'/>
                        </motion.a>
                        <motion.a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'
                                  className="p-2 rounded-full bg-transparent hover:bg-yellow-300 flex items-center justify-center social-icon"
                                  whileHover={{y: -10}}>
                            <FontAwesomeIcon icon={faLinkedinIn} className='text-white text-md lg:text-lg'/>
                        </motion.a>
                    </div>
                </div>
            </div>
        </>
    );
};