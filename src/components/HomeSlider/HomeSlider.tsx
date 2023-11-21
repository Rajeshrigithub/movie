import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const HomeSlider = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        // Update width and height when component mounts on the client side
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        // Event listener to update width and height on window resize
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const banners = [
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1699437370622_tiger3webenglish.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693472198837_iccdesktop.jpg'
        }
    ];

    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <Image src={banner.imgUrl} alt="" width={width} height={height / 2} style={{ objectFit: "cover" }} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HomeSlider;
