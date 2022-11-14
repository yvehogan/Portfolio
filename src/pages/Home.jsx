import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Styles.css';
import evelyn from '../assets/images/evelyn.jpg'


const Home = () => {
    return (
        <div className="relative">
            <section className="flex justify-between md:px-20 px-5 mt-24 hero-section text-white">
                <div className="">
                    <span className="introduction" >Hi, i'm Evelyn Ita,</span>
                    <h1 className="eve">
                        <span className="mr-3">Frontend</span>
                        <span>Developer</span>
                        </h1>
                    <h3>I am a frontend engineer i create beautiful and functional websites,
                        with the use of modern technologies. An exceptional team player and detail oriented.
                        When i am not writing code, i am either watching
                        a programming tutorial, seeing a good rom-com or connecting with friends.</h3>

                    <button className="about-me" >
                        <Link to="/Contact">
                            Get in touch
                        </Link>
                    </button>
                </div>

                <div className="media-links">
                    <div className="ima">
                        <img src={evelyn} className="max-w-md overflow-hidden hidden md:block rounded-lg" alt="eveita" />
                    </div>
                </div>

            </section>

           

        </div>
    )
}

export default Home;