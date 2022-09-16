import React from "react";
import Card from "./Card";
import Cardgallery from "./Cardgallery";
import Contactform from "./Contactform";
import Gallery from "./Gallery";
import MainHeading from './MainHeading'
import Packages from "./Packages";
import SubHeading from './SubHeading'

const MainComponent = () => {

    return (
        <>

            <section className="main-content-area">
                <MainHeading />
                <SubHeading text="Showcase" id="SHOWCASES"/>
                <Gallery />
                <SubHeading text="Services"/>
                <p>We are a interior design service that focus on what's best for your home and what's best for you!</p>
                <p>Some text about our services - what we do and what we offer. We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <SubHeading text="Designers" />
                <p>The best team in the world.</p>
                <p>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h5>Our designers are thoughtfully chosen:</h5>
                <Cardgallery />
                <SubHeading text="Packages" />
                <p>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                <Packages />
                <SubHeading text="Contact" />
                <Contactform />
            </section>
            <footer className="bg-secondary text-end text-white p-3">
                <p>Tempelate From<a className="text-white ps-1" href="https://www.w3schools.com/w3css/w3css_templates.asp" target="blank">w3.Templates</a></p>
            </footer>
        </>
    )
}

export default MainComponent