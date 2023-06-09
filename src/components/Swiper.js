/**
 * Swiper Component
 */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import "./Swiper.css"

import SHOP_ITEMS from "../model/shopItems";

const SwiperContent = (props) => {
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
            autoplay={{
                delay: props.delay,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper">
            
            {SHOP_ITEMS[props.items].map((item, i) => (
                <SwiperSlide key={item.id}>
                    <img src={process.env.PUBLIC_URL + `/imgs/shop/${item.imgSrc}`} alt=""
                        onClick={() => { props.onClickHandler(props.items, i) }} />
                </SwiperSlide>
            ))}

        </Swiper>
    );
}

export default SwiperContent;