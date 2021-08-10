import React, {  } from 'react';
import { NavLink } from 'react-router-dom';


import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.jsx';
import '../styles/Styles.css';
import Projects from './Projects.jsx';
import About from './About.jsx'
import Contact from './Contact.jsx';
import Experience from './Experience.jsx';



const Homepage = () => {
    return (
        
        <div>
               <NavBar />
             <section className="hero-section"> 

                <div className="media-links"> 
                <span className="introduction" >Hi, my name is</span>
                <h1 className="eve">Evelyn Ita.</h1>
                <p className="use">I solve problems with technology</p>
                
                <h3>I am a junior frontend developer, i create beautiful and functional websites,
                    with over a year experience in frontend technologies.
                    I am a life long learner, open to learning new things.</h3>
                
                <button className="about-me" >
                <NavLink to="/Contact">
                Get in touch
                    </NavLink>
                    </button>
                </div>

             </section>
             <About />
             <Experience />
             <Projects />
            
             <Contact />
             <Footer />

        </div>

    )


}

export default Homepage;