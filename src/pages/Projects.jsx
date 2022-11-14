import React from 'react';

const Projects = () => {

    return (
        <div className="bg-primary pb-10">

            <h2 className=" flex justify-center mb-14 text-white">Some things i've worked on</h2>
            <div className="flex justify-center flex-wrap gap-10 md:px-10">
                <div className="text-white bg-cards md:p-6 p-3 md:m-0 m-auto md:max-w-sm w-[90%] rounded-lg">
                    <ul className="text-primary font-semibold flex flex-wrap gap-5">
                        <li className="bg-secondary rounded p-2 text-sm text-center">React</li>
                        <li className="bg-secondary rounded p-2 text-sm">React query</li>
                        <li className="bg-secondary rounded p-2 text-sm">Tailwind</li>
                        <li className="bg-secondary rounded p-2 text-sm">Headless UI</li>
                    </ul>
                    <p className="py-3 text-white">Wema bank's wikipedia page.It contains answers to questions customers need answers to.</p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href='https://wiki.wemabank.com/'
                        className="underline ">
                        WemaWiki
                    </a>
                </div>

                <div className=" bg-cards md:p-6 p-3 md:m-0 m-auto md:max-w-sm w-[90%] rounded-lg">
                    <ul className="text-primary font-semibold flex flex-wrap gap-5">
                        <li className="bg-secondary rounded p-2 text-sm text-center">React</li>
                        <li className="bg-secondary rounded p-2 text-sm">JavaScript</li>
                        <li className="bg-secondary rounded p-2 text-sm">Tailwind</li>
                    </ul>
                    <p className="py-3 text-white">An idea portal that allows you to make suggestions on improvements to be made.</p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href='https://ideaportal.wemabank.com/v2/'
                        className="underline">
                        IDEA PORTAL
                    </a>
                </div>


                <div className=" bg-cards md:p-6 p-3 md:m-0 m-auto md:max-w-sm w-[90%] rounded-lg">
                    <ul className="text-primary font-semibold flex flex-wrap gap-5">
                        <li className="bg-secondary rounded p-2 text-sm text-center">React</li>
                        <li className="bg-secondary rounded p-2 text-sm">JavaScript</li>
                        <li className="bg-secondary rounded p-2 text-sm">Tailwind</li>
                    </ul>
                    <p className="py-3 text-white">A frontend mentor challenge for a restaurant.</p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href='https://dine-restaurant-challenge.netlify.app/'
                        className="underline">
                        DINE RESTAURANT
                    </a>
                </div>
                <div className=" bg-cards md:p-6 p-3 md:m-0 m-auto md:max-w-sm w-[90%] rounded-lg">
                    <ul className="text-primary font-semibold flex flex-wrap gap-5">
                        <li className="bg-secondary rounded p-2 text-sm text-center">React</li>
                        <li className="bg-secondary rounded p-2 text-sm">Redux</li>
                        <li className="bg-secondary rounded p-2 text-sm">Shopify</li>
                        <li className="bg-secondary rounded p-2 text-sm">Bootstrap</li>
                    </ul>
                    <p className="py-3 text-white">A morekathon hackathon product that solves a problem regarding climate change.</p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href='http://precycle.herokuapp.com/'
                        className="underline">
                        PRECYCLE
                    </a>
                </div>
                <div className=" bg-cards md:p-6 p-3 md:m-0 m-auto md:max-w-sm w-[90%] rounded-lg">
                    <ul className="text-primary font-semibold flex flex-wrap gap-5">
                        <li className="bg-secondary rounded p-2 text-sm text-center">React</li>
                        <li className="bg-secondary rounded p-2 text-sm">Redux</li>
                        <li className="bg-secondary rounded p-2 text-sm">Tailwind</li>
                    </ul>
                    <p className="py-3 text-white">A microsite to register participants for hackaholics masterclass</p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href='https://hackaholics.wemabank.com/masterclass/'
                        className="underline">
                        MASTERCLASS
                    </a>
                </div>
                <div className=" bg-cards md:p-6 p-3 md:m-0 m-auto md:max-w-sm w-[90%] rounded-lg">
                    <ul className="text-primary font-semibold flex flex-wrap gap-5">
                        <li className="bg-secondary rounded p-2 text-sm text-center">React</li>
                        <li className="bg-secondary rounded p-2 text-sm">JavaScript</li>
                        <li className="bg-secondary rounded p-2 text-sm">Tailwind</li>
                    </ul>
                    <p className="py-3 text-white">A metabnb WebApp</p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href='https://evelyn-metabnb.vercel.app/'
                        className="underline">
                        Metabnb WebApp
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Projects;