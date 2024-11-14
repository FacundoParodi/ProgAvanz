import React from 'react'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <ul>
                    <li>LinkedIn</li>
                    <li>Crunchbase</li>
                    <li>Hackernews</li>
                </ul>
            </div>
            <div className="footer-batata">
                <span className="footer-logo"></span>
                <p className="footer-copyright">® Batabit 2020</p>
            </div>
        </footer>
    );
};

export default Footer;