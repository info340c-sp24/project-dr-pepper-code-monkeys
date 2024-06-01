import React from 'react';
// Generic footer, change as needed
import './index.css';
export function Footer() {
    return (
        <footer className='footerbackground mt-0 border-dark border-top border-3' >
            <div className='container ms-0 pt-2'>
                <div className='row'>
                    <div className='col col-lg-3'>
                        <img src="/img/logo.svg" alt="FFS logo" className="rounded img-fluid float-start w-25 h-25 d-inline ms-0 me-2" />
                        <p className='text-start fs-4'><span style={{ color: 'green' }}> Find Food </span><span style={{ color: 'red' }}> Seattle, </span>2024</p>
                        <p>Driven by compassion and a desire to combat hunger, they passionately dedicate their time and resources to food donation, ensuring others have access to nutritious meals.</p>
                        <p>&copy; 2024</p>
                    </div>
                    <div className='col col-6 text-center'>
                        <h3 className='mb-3'>Our address & Hours</h3>
                        <p className='my-0'>1410 NE Campus Parkway, Seattle, WA 98195</p>
                        <p className='my-0'>Mon: 10am-5pm</p>
                        <p className='my-0'>Tue: 10am-5pm</p>
                        <p className='my-0'>Wed: 10am-5pm</p>
                        <p className='my-0'>Thu: 10am-5pm</p>
                        <p className='my-0'>Fri: 10am-3pm</p>
                        <p className='my-0'>Sat: Close</p>
                        <p className='my-0'>Sun: Close</p>
                    </div>
                    <div className='col col-3 text-center'>
                        <h3>Contact Us</h3>
                        <p><a className='link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href='tel: +18880000000'>Phone: (206) 785-9341</a></p>
                        <p><a className='link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href='mailto:example@uw.edu'>Email: drpeppercodingmonkeys@uw.edu</a></p>
                        <div id="social-links">
                            <a href="#"><i className="fa fa-instagram mx-1" aria-label="instagram"></i></a>
                            <a href="#"><i className="fa fa-twitter-square mx-1" aria-label="twitter"></i></a>
                            <a href="#"><i className="fa fa-facebook-square mx-1" aria-label="facebook"></i></a>
                            <a href="#"><i className="fa fa-github mx-1" aria-label="github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
