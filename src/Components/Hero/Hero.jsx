import './Hero.css'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero(){

    return(
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration: 0.8 }}
            className='hero'

        >
            <h1>Hi, I'm <span className='highlight'>Bayode Adegboyega</span></h1>
            <p className='subtitle'>Frontend Developer & UI UX Designer</p>
            <div className='cta-buttons'>
                <Link to="/projects" className='btn btn-primary'>
                    View My Work
                </Link>
                <a href="#contact" className='btn btn-secondary'>
                    Hire Me
                </a>
            </div>
        </motion.section>
    )
}