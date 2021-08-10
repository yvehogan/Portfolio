import React from 'react';


// images for project page
import googleclone from '../images/googleclone.JPG';
import fylo from '../images/fylo.JPG';
import Reactkeyboard from '../images/React-keyboard.JPG';
import shoppinglist from '../images/shoppinglist.JPG';
import testimonialgrids from '../images/testimonialgrids.JPG';
import gallerygrids from '../images/gallerygrids.JPG';

import '../styles/Styles.css';

const Projects = () => {
    return (
        <div>
        
            <h2 className="personal-projects">Some things i've built</h2>

            <div className="project-page">

                <div className="container">
                <h3 className="portfolio">Google clone</h3>
                <div className="overlay">
                <a href="https://gooogle-clone.netlify.app">
                <img src={ googleclone } class="googleclone-img" alt="googleclone" />
                </a>
                
                </div>
                </div>

                <div className="container">
                <h3 className="portfolio">Fylo landing page</h3>
                <div className="overlay">
                <a href="https://fylo-landng-page.netlify.app">
                <img src={ fylo } class="fylo-img" alt="fylo" />
                </a>
                
                </div>
                </div>

                <div className="container">
                <h3 className="portfolio">Testimonial grids</h3>
                <div className="overlay">
                <a href="https://testimonial-grids.netlify.app/"> 
                <img src={ testimonialgrids } class="testimonialgrids-img" alt="testimonialgrids" />                </a>
                
                </div>
                </div>

                <div className="container">
                <h3 className="portfolio">Gallery grids</h3><h3 className="portfolio">Testimonial grids</h3>
                <div className="overlay">
                <a href="https://grid-gallery-womentechsters.netlify.app">
                <img src={ gallerygrids } class="Gallery-grids-img" alt="Gallery-grids" />              </a>
                
                </div>
                </div>

                <div className="container">
                <h3 className="portfolio">React keyboard</h3>
                <div className="overlay">
                <a href="https://react-keyboard.netlify.app">
                <img src={ Reactkeyboard } class="React-keyboard-img" alt="React-keyboard" />
                </a>
                
                </div>
                </div>

                <div className="container">
                <h3 className="portfolio">Shopping list in Js</h3>
                <div className="overlay">
                <a href="shoppinglisttjs.netlify.app">
                <img src={ shoppinglist } class="shoppinglist-img" alt="shoppinglist" /> 
                </a>
                
                </div>
                </div>
             
             
                <div>

                </div>

            </div>

       
           
        </div>
    )
}

export default Projects
