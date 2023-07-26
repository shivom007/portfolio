import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Shiv</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/ig_shivom/" className="footer__social-link" >
        <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://github.com/shivom007" className="footer__social-link" >
        <i className="bx bxl-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/shiv-kumar-mahto/" className="footer__social-link" >
        <i className='bx bxl-linkedin'></i>
        </a>
            </div>
            <span className="footer__copy">
                &#169; Made with ❤ by Shiv
            </span>
        </div>
    </footer>
  )
}

export default Footer