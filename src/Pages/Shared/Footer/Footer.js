import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date ();
    const year = today.getFullYear ();

    return (
        <footer>
            <p><small><span className='copy-right-symbol'>&copy; Copyright</span> {year}</small></p>
        </footer>
    );
};

export default Footer;