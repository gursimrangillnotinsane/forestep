import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const pricing = () => {
    const clients = [
        {
            image: "images/team1.jpg",
            testimonial:
                "Lorem Ipsum is simply dummy text of the printing and typesetting...",
            name: "John Smith",
            position: "CEO - Avada Company",
        },
        {
            image: "images/team1.jpg",
            testimonial:
                "Lorem Ipsum is simply dummy text of the printing and typesetting...",
            name: "John Smith",
            position: "CEO - Avada Company",
        },
    ];

    return (
        <section id="pricing">
            <div id="pricing-table" className="padding-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12  wow fadeInRight">
                            <h2>Pricing Table</h2>

                            <p className="text-center p-margin">Lorem Ipsum is simply dummy text of the printing and typesetting
                                Quisque enim dolor, mauris ac sagittis erat pulvinar leo, sed ultrices ipsum elit sed leo dolor
                                in justo pretium et elit.</p>
                        </div>
                    </div>
                    <div className="row margin-60-top tables">
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft  ">
                            <ul className="price price-1">
                                <li className="header"><span>$</span>29</li>
                                <li className="grey">
                                    <h3>Stater</h3>
                                    <p>Monthly Plan</p>
                                    <p>24/7 Customer Support</p>
                                </li>
                                <li>
                                    <p>10GB Storage</p>
                                </li>
                                <li>
                                    <p>10 Emails</p>
                                </li>
                                <li>
                                    <p>10 Domains</p>
                                </li>
                                <li>
                                    <p>1GB Bandwidth</p>
                                </li>
                                <li className="grey"><a href="#" className="btn btn-default buttons">Sign Up</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInLeft  ">
                            <ul className="price price-2 price-selected">
                                <li className="header"><span>$</span>49</li>
                                <li className="grey">
                                    <h3>Premium</h3>
                                    <p>Monthly Plan</p>
                                    <p>24/7 Customer Support</p>
                                </li>
                                <li>
                                    <p>10GB Storage</p>
                                </li>
                                <li>
                                    <p>10 Emails</p>
                                </li>
                                <li>
                                    <p>10 Domains</p>
                                </li>
                                <li>
                                    <p>1GB Bandwidth</p>
                                </li>
                                <li className="grey"><a href="#" className="btn btn-default buttons">Sign Up</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInRight  ">
                            <ul className="price price-3">
                                <li className="header"><span>$</span>79</li>
                                <li className="grey">
                                    <h3>Professional</h3>
                                    <p>Monthly Plan</p>
                                    <p>24/7 Customer Support</p>
                                </li>
                                <li>
                                    <p>10GB Storage</p>
                                </li>
                                <li>
                                    <p>10 Emails</p>
                                </li>
                                <li>
                                    <p>10 Domains</p>
                                </li>
                                <li>
                                    <p>1GB Bandwidth</p>
                                </li>
                                <li className="grey"><a href="#" className="btn btn-default buttons">Sign Up</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3  col-md-12 col-sm-6 wow fadeInRight  ">
                            <ul className="price price-4">
                                <li className="header"><span>$</span>99</li>
                                <li className="grey">
                                    <h3>Maximum</h3>
                                    <p>Monthly Plan</p>
                                    <p>24/7 Customer Support</p>
                                </li>
                                <li>
                                    <p>10GB Storage</p>
                                </li>
                                <li>
                                    <p>10 Emails</p>
                                </li>
                                <li>
                                    <p>10 Domains</p>
                                </li>
                                <li>
                                    <p>1GB Bandwidth</p>
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
                                                <p className="p-margin">{client.testimonial}</p>
                                                <h5>{client.name}</h5>
                                                <p className="client-p">{client.position}</p>
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
