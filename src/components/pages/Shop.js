import "./Shop.css"
import SwiperContent from "../Swiper";
import SHOP_ITEMS from "../../model/shopItems";
import { useState } from "react";

const Shop = () => {
    const [showBtn, setShowBtn] = useState(false);
    return (<div className="shop">
        <div className="shop__top">
            <img src={process.env.PUBLIC_URL + `/imgs/shop/shop-top-img.jpg`} alt="" />
        </div >
        <div className="shop__main">
            <div className="shop__contents">
                <h2>New Arrival</h2>
                <SwiperContent items="new" />
            </div>
            <div className="shop__contents">
                <h2>Best</h2>
                <SwiperContent items="best" />
            </div>
            <div className="shop__contents">
                <h3>All Items</h3>
                <div className="shop_all" >
                    <ul className="shop_allItems">
                        {
                            SHOP_ITEMS["all"].map(item => (
                                <li className="shop_allItem" key={item.id}>
                                    <img src={process.env.PUBLIC_URL + `/imgs/shop/all/${item.imgSrc}`} alt="" onMouseOver={() => { setShowBtn(true) }} onMouseOut={() => { setShowBtn(false) }} />
                                    <p className="shop__itemTitle">{item.title}</p>
                                    <p className="shop__itemPrice">{item.price}원</p>

                                </li>

                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>

    </div>)
}

export default Shop;