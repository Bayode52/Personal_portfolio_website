import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css';

export default function Footer(){
    
    return(
        <footer className="footer">
            <div className="social-links">
                <a 
                href="https://github.com/Bayode52"
                target="_blank"
                rel="norefferrer"
                >
                    <FaGithub />
                </a>

                <a 
                href="https://linkedin.com/in/Bayode52"
                target='_blank'
                rel='noreferrer'
                >
                    <FaLinkedin />
                </a>

                <a
                href="https//x.com/@BayodeEmmanuel7"
                target='_blank'
                rel='noreferrer'
                >
                    <FaTwitter />
                </a>
            </div>
            <p>
                &copy; {new Date().getFullYear()} Bayode Adegboyega. All rights reserved.
            </p>
        </footer>
    )
}