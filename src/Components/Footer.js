import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
    FiInstagram,
    FiFacebook,
} from "react-icons/fi";

const socialLinks = [
    {
        id: 1,
        icon: <FiFacebook />,
        url: "https://www.facebook.com/",
        className: "facebook",
    },
    {
        id: 2,
        icon: <FiInstagram />,
        url: "https://instagram.com/",
        className: "instagram",
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faWhatsapp} />,
        url: "https://whatsapp.com/",
        className: "whatsapp",
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faXTwitter} />,
        url: "https://twitter.com/",
        className: "twitter",
    }
];

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                    <p className="powered-by">
                        Developed by
                        <a href="https://www.facebook.com/brandingmediia.eg/" target="_blank" rel="noopener noreferrer">
                        <h2 style={{fontSize: "15px", textDecoration: "none", color:"white"}}>Branding Media</h2>
                        </a>
                    </p>
                    <p className="contact-us">
                            تواصل معنا
                    </p>
                    <div className="social-links">
                    <ul>
                        {socialLinks.map((link) => (
                            <a
                                href={link.url}
                                target="__blank"
                                key={link.id}
                                className={link.className}
                            >
                                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                            </a>
                        ))}
                    </ul>
                    </div>
            </div>
        </div>
    );
};

export default Footer;
