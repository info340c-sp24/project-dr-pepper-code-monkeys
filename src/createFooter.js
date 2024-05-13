import React from 'react';

//Generic footer, change as needed
export function Footer(){
    return (
        <footer>
        <div id="social-links">
            <a href="#"><i className="fa fa-instagram" aria-label="instagram"></i></a>
            <a href="#"><i className="fa fa-twitter-square" aria-label="twitter"></i></a>
            <a href="#"><i className="fa fa-facebook-square" aria-label="facebook"></i></a>
            <a href="#"><i className="fa fa-github" aria-label="github"></i></a>
        </div>
        <p>&copy; <span style={{color:'green'}}> Find Food </span><span style={{color:'red'}}> Seattle, </span>2024</p>
        </footer>
    )
}