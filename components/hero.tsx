"use client"
import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import '../public/css/swiper.css';
export default function Hero() {
    const content = [
        { title: 'We are ', title2: 'CREATIVE', image: './images/wallpaper-1.jpg' },
        { title: 'We are ', title2: 'INNOVATIVE', image: './images/wallpaper-2.jpg' },
        { title: 'We are', title2: 'RESONABLE', image: './images/wallpaper-3.jpg' },
    ]

    return (
        <section id="home">

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                effect={'fade'}
                autoplay={{ delay: 5000 }}
                modules={[Navigation, EffectFade]}

            >
                {content.map((item, index) => (
                    <SwiperSlide key={index} id="slider1" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >
                        {/* <div className='mySwiperImage'>

                        </div> */}
                        <div className='mySwiper z-10'>
                            <div>
                                <h2 className="m-0">{item.title}</h2>
                                <h2 className="m-0 red">{item.title2}</h2>
                            </div>
                            <br />
                            <div className='flex gap-4' >
                                <div className="  tp-resizeme" data-x="378" data-y="485" data-transform_idle="o:1;" data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1400"> <a href="#what-we-do" className="slider-button normal scroll">Learn More</a></div>
                                <div className="  tp-resizeme" data-x="580" data-y="485" data-transform_idle="o:1;" data-transform_in="x:-50px;opacity:0;s:2000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1400"> <a href="#portfolio" className="slider-button red scroll">Get Started</a></div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
                {/* <SwiperSlide id="slider1">
                    <div className='mySwiper'>
                        <h2 className="">sdfsdf</h2>
                        <h2 className=" red">sdfsdf</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySwiper'> <h2 className="tp-caption News-Title">sdfsdf</h2></SwiperSlide>
                <SwiperSlide className='mySwiper'>Slide 3</SwiperSlide> */}

            </Swiper>
        </section>
    )
}
