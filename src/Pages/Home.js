// Home.js
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Adds, banner, membership } from '../Config/Api';
import { NavLink } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import m1 from "../Images/mazine1.png";
import m2 from "../Images/mazine2.png";


import exhibition from "../Images/exhibition.jpeg";


const Home = () => {

    const addsContent = Adds.map((curElm, index) => {
        return (
            <div className="slider-container" key={index}>
                <div className="image-slider">
                    <a href={curElm.link} target='_blank' rel="noreferrer">
                        <img loading='lazy' src={curElm.img} alt="" />
                    </a>
                </div>
            </div>
        )
    });

    const responsive = {
        0: { items: 2 },
        753: { items: 4 },
        1200: { items: 5 }
    }
    return (
        <>
            {/* Banner section  */}
            <div className='mt-4'>
                <Swiper
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    loop={true}
                    slidesPerView={1}
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {banner.map((curElm, index) => (
                        <SwiperSlide key={index}>
                            <img src={curElm} alt={index} className="w-100" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Mazine Section */}

            <div className='mazine-section'>

                {/* Mazine 1 */}
                <div className="mazine-1">
                    <h1>Electricals Udaan</h1>
                    <p>India's Leading Monthly Magazine on electrical  & Lighting Industry</p>
                    <img loading='lazy' src={m1} alt="" />
                    <div>
                        <NavLink to="/flipbook-view/m1" smooth >Click here to View Mazine</NavLink>
                    </div>
                </div>

                {/* Mazine 2 */}
                <div className="mazine-1">
                    <h1>Electricals Udaan</h1>
                    <p>India's Leading Monthly Magazine on electrical  & Lighting Industry</p>
                    <img loading='lazy' src={m2} alt="" />
                    <div>
                        <NavLink to="/flipbook-view/m2" smooth >Click here to View Mazine</NavLink>
                    </div>
                </div>

            </div>


            {/* Adds Scrollbar section */}

            <div className='alice-carasoul'>
                <AliceCarousel loop={true} mouseTracking infinite autoPlayInterval={1000} animationDuration={1500} disableDotsControls responsive={responsive} items={addsContent} autoPlay disableButtonsControls />
            </div>


            {/* Upcoming exhabition tag come here  */}
            <div className="upcoming-exhibition">
                <p className='upcoming-text'>upcoming exhibition</p>
                <div className='exhibition-card'>
                    <a href="https://fxg8.short.gy/electricals-udaan-webbnr">
                        <img src={exhibition} alt={exhibition} />
                    </a>
                </div>
            </div>

            {/* Subscription tag come here  */}


            <div className='membership-section'>
                {membership.map((curElm, index) => (
                    <div className='membership-card' key={index}>
                        {/* Icon */}
                        <div className="membership-icon">
                            {curElm.icon}
                        </div>

                        {/* Badge */}
                        <div className="membership-badge">
                            {curElm.badge}
                        </div>

                        {/* Title */}
                        <h2 className="membership-title">{curElm.title}</h2>

                        {/* Prices */}
                        <div className="membership-pricing">
                            <span className="previous-price">₹{curElm.prevPrice}</span>
                            <span className="new-price">₹{curElm.newPrice}</span>
                        </div>

                        {/* Description */}
                        <p className="membership-description">{curElm.description}</p>

                        {/* Benefits List */}
                        <ul className="membership-benefits">
                            {curElm.benefits.map((benefit, idx) => (
                                <li key={idx}>{benefit}</li>
                            ))}
                        </ul>

                        {/* Details Link */}
                        <a href={curElm.detailsUrl} className="membership-details-link">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Home;
