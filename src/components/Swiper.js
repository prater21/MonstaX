// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import "./Swiper.css"

import SHOP_ITEMS from "../model/shopItems";

const SwiperContent = (props) => {
    console.log(props);
    return (
        <Swiper
            initialSlide="2"
            navigation={true}
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }}
            modules={[Navigation]}
            className="mySwiper"
        >
            {SHOP_ITEMS[props.items].map(item => (
                <SwiperSlide key={item.id}>
                    <img src={process.env.PUBLIC_URL + `/imgs/shop/${props.items}/${item.imgSrc}`} alt="" />
                </SwiperSlide>
            ))}

        </Swiper>
    );
}

export default SwiperContent;