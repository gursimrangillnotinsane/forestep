import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const prortolio = () => {
    const portfolioItems = [
        {
            id: "portfolio-1",
            image: "images/portfolio2.jpg",
            icon: "fa-pencil-square-o",
            title: "Portfolio 2",
            description: "Lorem Ipsum is simply dummy text of the printing and Quisque enim dolor.",
        },
        {
            id: "portfolio-2",
            image: "images/portfolio3.jpg",
            icon: "fa-users",
            title: "Portfolio 3",
            description: "Lorem Ipsum is simply dummy text of the printing and Quisque enim dolor.",
        },
        {
            id: "portfolio-3",
            image: "images/portfolio1.jpg",
            icon: "fa-snapchat",
            title: "Portfolio 4",
            description: "Lorem Ipsum is simply dummy text of the printing and Quisque enim dolor.",
        },
        {
            id: "portfolio-4",
            image: "images/portfolio2.jpg",
            icon: "fa-pencil-square-o",
            title: "Portfolio 5",
            description: "Lorem Ipsum is simply dummy text of the printing and Quisque enim dolor.",
        },
        {
            id: "portfolio-5",
            image: "images/portfolio3.jpg",
            icon: "fa-users",
            title: "Portfolio 6",
            description: "Lorem Ipsum is simply dummy text of the printing and Quisque enim dolor.",
        },
    ];
    return (
        <section id="portfolio">
            <div id="portfolio-info" className="padding-one-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 text-center  wow fadeInRight  ">
                            <h2>Portfolio</h2>

                            <p className="p-margin">Lorem Ipsum is simply dummy text of the printing and typesetting Quisque enim
                                dolor, mauris ac sagittis erat pulvinar leo, sed ultrices ipsum elit sed leo dolor in justo
                                pretium et elit.</p>
                        </div>
                    </div>
                    <div className="portfolio-section row margin-60-top" id="owl-demo">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}

                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 2000 }}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                1024: { slidesPerView: 3 }, // 3 slides on desktop
                                768: { slidesPerView: 2 },  // 2 slides on tablet
                                480: { slidesPerView: 1 },  // 1 slide on mobile
                            }}
                        >
                            {portfolioItems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='owl-item'>
                                        <div className="item">
                                            <div className="hovereffect">
                                                <img className="img-responsive" src={item.image} alt="" />
                                                <div className="overlay">
                                                    <div className="owl-captions">
                                                        <a className="fancy-box" id={item.id} href={item.image} title="Portfolio">
                                                            <i className={`fa ${item.icon}`} aria-hidden="true"></i>
                                                        </a>
                                                        <h3>
                                                            <a className="fancy-box" href={item.image} title="Portfolio">{item.title}</a>
                                                        </h3>
                                                        <p className="p-margin">{item.description}.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default prortolio
