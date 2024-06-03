import React from 'react';
// Generic footer, change as needed
import './index.css';
export function Footer() {
    return (
        <footer className='pt-3 border-dark border-top border-1' >
            <div className='d-flex flex-row wrap justify-content-between'>
                    <div className='mx-3 d-flex justify-content-start'>
                        <img src="/img/logo.svg" alt="FFS logo" className="rounded img-fluid w-25 h-25 d-inline" />
                        <p className='fs-4 text-secondary'> Find Food Seattle<span className="copyright"> &copy;2024</span></p>
                    </div>
                    <div className='mx-3 d-flex'>
                        <div className="me-3">
                            <h3>Contact Us</h3>
                            <div id="social-links">
                                <a href="#" className="fa fa-instagram mx-1 link-underline link-underline-opacity-0"></a>
                                <a href="#" className="fa fa-twitter-square mx-1 link-underline link-underline-opacity-0" aria-label="twitter"></a>
                                <a href="#" className="fa fa-facebook-square mx-1 link-underline link-underline-opacity-0" aria-label="facebook"></a>
                                <a href="#" className="fa fa-github mx-1 link-underline link-underline-opacity-0" aria-label="github"></a>
                            </div>
                        </div>
                        <div>
                            <p><a className='link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href='tel: +18880000000'>Phone: (206) 785-9341</a></p>
                            <p><a className='link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href='mailto:example@uw.edu'>Email: drpeppercodingmonkeys@uw.edu</a></p>
                        </div>
                    </div>
            </div>
        </footer>
    );
}
