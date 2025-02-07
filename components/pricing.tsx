import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const pricing = () => {
    const clients = [
        {
            image: "images/client2.png",
            testimonial:
                "Working with this team was an incredible experience! They built us a stunning website that truly represents our business. Since launching, we’ve seen a noticeable increase in customer engagement and online inquiries. Highly recommended!",
            name: "Bikramjit Singh",
            position: "CEO - Arjan Gill Sounds",
        },
        {
            image: "images/client1.png",
            testimonial:
                "This team exceeded our expectations! They developed a sleek, user-friendly fitness app that our customers love. The app runs smoothly, looks great, and has helped us grow our user base significantly. Couldn't be happier with the results",
            name: "Sarah Mitchell",
            position: "CEO - Founder, FitTrack App",
        },
    ];

    return (
        <section id="pricing">
            <div id="pricing-table" className="padding-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12  wow fadeInRight">
                            <h2>Pricing Table</h2>
                            {/* 
                            <p className="text-center p-margin">Lorem Ipsum is simply dummy text of the printing and typesetting
                                Quisque enim dolor, mauris ac sagittis erat pulvinar leo, sed ultrices ipsum elit sed leo dolor
                                in justo pretium et elit.</p> */}
                        </div>
                    </div>
                    <div className="row margin-60-top tables">
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft  ">
                            <ul className="price price-1">
                                <li className="header"><span>$</span>250</li>
                                <li className="grey">
                                    <h3>Basic</h3>
                                    <p> Plan</p>
                                    {/* <p>24/7 Customer Support</p> */}
                                </li>
                                <li>
                                    <p>3 custom pages</p>
                                </li>
                                <li>
                                    <p>Custom logo design</p>
                                </li>
                                <li>
                                    <p>1 jQuery Slider Banner</p>
                                </li>
                                <li>
                                    <p>Fast delivery</p>
                                </li>
                                <li>
                                    <p>Integrated Contact Form</p>
                                </li>
                                <li className="grey"><a href="#" className="btn btn-default buttons">Sign Up</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft  ">
                            <ul className="price price-2 price-selected">
                                <li className="header"><span>$</span>350</li>
                                <li className="grey">
                                    <h3>Startup</h3>
                                    <p> Plan</p>
                                    {/* <p>Basic +</p> */}
                                </li>
                                <li>
                                    <p>6 Custom Pages</p>
                                </li>
                                <li>
                                    <p>Custom logo + 4 stock images</p>
                                </li>
                                <li>
                                    <p>2 jQuery Slider Banner</p>
                                </li>
                                <li>
                                    <p>Fast delivery</p>
                                </li>
                                <li>
                                    <p>SEO friendly</p>
                                </li>
                                <li className="grey"><a href="#" className="btn btn-default buttons">Sign Up</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInRight  ">
                            <ul className="price price-3">
                                <li className="header"><span>$</span>599</li>
                                <li className="grey">
                                    <h3>Professional</h3>
                                    <p> Plan</p>
                                    {/* <p>24/7 Customer Support</p> */}
                                </li>
                                <li>
                                    <p>10 Custom Pages</p>
                                </li>
                                <li>
                                    <p>Custom logo + 8 High-Quality Stock Images</p>
                                </li>
                                <li>
                                    <p>Mobile Responsive</p>
                                </li>
                                <li>
                                    <p>CMS / Admin Panel</p>
                                </li>
                                <li>
                                    <p>App Integration</p>
                                </li>
                                <li className="grey"><a href="#" className="btn btn-default buttons">Sign Up</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3  col-md-12 col-sm-6 wow fadeInRight  ">
                            <ul className="price price-4">
                                <li className="header"><span>$</span>999</li>
                                <li className="grey">
                                    <h3>Elite</h3>
                                    <p>Plan</p>
                                    {/* <p>24/7 Customer Support</p> */}
                                </li>
                                <li>
                                    <p>Up to 15 Custom Pages</p>
                                </li>
                                <li>
                                    <p>Dynamic pages</p>
                                </li>
                                <li>
                                    <p>Online Payment Integration </p>
                                </li>
                                <li>
                                    <p>Lead Capture Forms</p>
                                </li>
                                <li>
                                    <p>Complete deployment</p>
                                </li>
                                <li className="grey"><a href="#" className="btn btn-default buttons">Sign Up</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/pricing-table--> */}

            {/* <!--happy-clients start --> */}
            <div id="happy-clients" className="padding-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12  wow fadeInRight  ">
                            <h2>Happy Clients</h2>
                            <div id="owl-slider" className="owl-carousel owl-theme">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 3000 }}
                                >
                                    {clients.map((client, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="item text-center">
                                                <div className="client-img">
                                                    <img src={client.image} alt="client" />
                                                </div>
                                                <p className="p-margin italic">{client.testimonial}</p>
                                                <h5>{client.name}</h5>
                                                <p className="client-p ">{client.position}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default pricing
