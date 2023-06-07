/**
 * shop page
 */
import "./Shop.css"
import SwiperContent from "../Swiper";
import SHOP_ITEMS from "../../model/shopItems";
import { useState } from "react";
import Modal from "../UI/Modal";
import ItemDetail from "../ItemDetail";


const Shop = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [addCartItem, setAddCartItem] = useState({ title: "", price: 0, quantity: 0 });

    // show item detail
    const onClickHandler = (type, i) => {
        setAddCartItem(SHOP_ITEMS[type][i]);
        setShowModal(true);
        document.body.style.overflowY = "hidden";
    }

    //close modal
    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflowY = "scroll";
    }

    // show notice
    const openAlert = () => {
        setShowAlert(true);
    }

    // close notice
    const closeAlert = () => {
        setShowAlert(false);
        document.body.style.overflowY = "scroll";
    }

    return (<div className="shop">
        {/* shop main */}
        <div className="shop__top">
            <img src={process.env.PUBLIC_URL + `/imgs/shop/shop-top-img.jpg`} alt="" />
        </div >
        <div className="shop__main">
            <div className="shop__contents">
                <h2>New Arrival</h2>
                <SwiperContent items="new" delay={2000} onClickHandler={onClickHandler} />
            </div>
            <div className="shop__contents">
                <h2>Best</h2>
                <SwiperContent items="best" delay={1500} onClickHandler={onClickHandler} />
            </div>
            <div className="shop_all">
                <h3>All Items</h3>
                <ul className="shop_allItems">
                    {
                        SHOP_ITEMS["all"].map((item, i) => (
                            <li className="shop_allItem" onClick={() => { onClickHandler("all", i) }} key={item.id}>
                                <img src={process.env.PUBLIC_URL + `/imgs/shop/${item.imgSrc}`} alt="" />
                                <p className="shop__itemTitle">{item.title}</p>
                                <p className="shop__itemPrice">{item.price.toLocaleString()}원</p>
                            </li>

                        ))
                    }
                </ul>
            </div>

            {/* // show item detail */}
            {showModal && <ItemDetail addCartItem={addCartItem} closeModal={closeModal} showAlert={openAlert} />}
            {showAlert &&
                // show notice
                <Modal closeModal={closeAlert}>
                    <div className="modal__alert">
                        <div className="modal__closeBtn" onClick={closeAlert}><p>X</p></div>
                        <p>장바구니에 추가되었습니다.</p>
                    </div>
                </Modal>}
        </div>

    </div >)
}

export default Shop;