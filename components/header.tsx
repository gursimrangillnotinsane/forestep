"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

const header = () => {
    const [sideNavOpen, setSideNavOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('home');
    const toggleSideNav = () => {
        setSideNavOpen(!sideNavOpen);
    };

    const handleScroll = () => {
        const sections = ['home', 'about-us', 'portfolio', 'pricing', 'contact-us'];
        let currentSection = 'home';

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section;
                }
            }
        });


        setActiveSection(currentSection);

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        console.log(activeSection);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header>
            {/* Navbar */}
            <nav className={`navbar navbar-default navbar-fixed-top navbars ${activeSection != 'home' ? 'shrink' : ''}`}>
                <div className="container-fluid">
                    <a className={`side-menu-button  ${sideNavOpen ? 'actives' : ''}`} onClick={toggleSideNav}>
                        <i className={`fa ${sideNavOpen ? 'fa-times' : 'fa-bars'} `} aria-hidden="true"></i>
                    </a>
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <Image src="/images/logo.png" alt="logo" width={150} height={50} />
                            </a>
                        </div>
                        <div className=" navbar-collapse navbar-ex1-collapse hidden-xs">
                            <ul className="nav navbar-nav navbar-right navbars">
                                <li className={activeSection === 'home' ? 'active' : ''}><a href="#home" className="scroll">Home</a></li>
                                <li className={activeSection === 'about-us' ? 'active' : ''}><a href="#about-us" className="scroll">About Us</a></li>
                                <li className={activeSection === 'portfolio' ? 'active' : ''}><a href="#portfolio" className="scroll">Portfolio</a></li>
                                <li className={activeSection === 'pricing' ? 'active' : ''}><a href="#pricing" className="scroll">Pricing Table</a></li>
                                {/* <li><a href="#blog" className="scroll">Blog</a></li> */}
                                <li className={activeSection === 'contact-us' ? 'active' : ''}><a href="#contact-us" className="scroll">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className={`sidenav ${sideNavOpen ? 'mySideBar' : ''}`}>
                            <ul className="nav " onClick={toggleSideNav}>
                                <li className={activeSection === 'home' ? 'active' : ''}><a href="#home" className="scroll">Home</a></li>
                                <li className={activeSection === 'about-us' ? 'active' : ''}><a href="#about-us" className="scroll">About Us</a></li>
                                <li className={activeSection === 'portfolio' ? 'active' : ''}><a href="#portfolio" className="scroll">Portfolio</a></li>
                                <li className={activeSection === 'pricing' ? 'active' : ''}><a href="#pricing" className="scroll">Pricing Table</a></li>
                                {/* <li><a href="#blog" className="scroll">Blog</a></li> */}
                                <li className={activeSection === 'contact-us' ? 'active' : ''}><a href="#contact-us" className="scroll">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default header
