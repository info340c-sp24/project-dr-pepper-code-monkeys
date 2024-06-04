import React from 'react';
import './index.css';

export function Footer() {
    return (
        <footer className='footer pt-3 border-dark border-top border-1'>
            <div className='footer-content d-flex flex-column flex-md-row justify-content-between align-items-center'>
                <div className='footer-left d-flex flex-column align-items-center'>
                    <img src="/img/logo.svg" alt="FFS logo" className="rounded img-fluid logo-footer" />
                    <p className='fs-4 text-secondary text-center'> Find Food Seattle<span className="copyright"> &copy;2024</span></p>
                </div>
                <div className='footer-right d-flex flex-column align-items-center'>
                    <div className="contact-info text-center">
                        <h3>Contact Us</h3>
                        <div id="social-links" className="mb-2">
                            <a href="https://www.instagram.com" className="fa fa-instagram mx-1 link-underline link-underline-opacity-0" aria-label="Instagram"></a>
                            <a href="https://twitter.com" className="fa fa-twitter-square mx-1 link-underline link-underline-opacity-0" aria-label="Twitter"></a>
                            <a href="https://www.facebook.com" className="fa fa-facebook-square mx-1 link-underline link-underline-opacity-0" aria-label="Facebook"></a>
                            <a href="https://github.com" className="fa fa-github mx-1 link-underline link-underline-opacity-0" aria-label="GitHub"></a>
                        </div>
                        <p className='footer-contact'><a className='link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href='tel:+18880000000'>Phone: (206) 785-9341</a></p>
                        <p className='footer-email'><a className='link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href='mailto:drpeppercodingmonkeys@uw.edu'>Email: drpeppercodingmonkeys@uw.edu</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
