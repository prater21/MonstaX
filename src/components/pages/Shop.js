import "./Shop.css"
import SwiperContent from "../Swiper";
import SHOP_ITEMS from "../../model/shopItems";
import { useState } from "react";
import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";


const Shop = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [itemQuantity, setItemQuantity] = useState(1);
    const [addCartItem, setAddCartItem] = useState({ title: "", price: 0, quantity: 0 });
    const dispatch = useDispatch();
    const onClickHandler = (type, i) => {
        setAddCartItem(SHOP_ITEMS[type][i]);
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
        setItemQuantity(1);
    }
    const closeAlert = () => {
        setShowAlert(false);
    }
    const addQuantity = () => {
        setItemQuantity(prev => { prev += 1; return prev; })
    }
    const subQuantity = () => {
        setItemQuantity(prev => { if (prev === 0) return 0; else prev -= 1; return prev; })
    }

    const addCartHandler = () => {
        setShowModal(false);
        setShowAlert(true);
        dispatch(cartActions.addItem({ item: { quantity: itemQuantity, id: addCartItem.id, title: addCartItem.title, price: addCartItem.price, imgSrc: addCartItem.imgSrc, item: addCartItem.item } }));
    }
    return (<div className="shop">
        <div className="shop__top">
            <img src={process.env.PUBLIC_URL + `/imgs/shop/shop-top-img.jpg`} alt="" />
        </div >
        <div className="shop__main">
            <div className="shop__contents">
                <h2>New Arrival</h2>
                <SwiperContent items="new" onClickHandler={onClickHandler} />
            </div>
            <div className="shop__contents">
                <h2>Best</h2>
                <SwiperContent items="best" onClickHandler={onClickHandler} />
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

            {showModal &&
                <Modal closeModal={closeModal}>
                    <div className="modal__addCart">
                        <div className="modal__closeBtn" onClick={closeModal}><p >X</p></div>
                        <div className="modal__addCartMain">
                            <img width={"200px"} src={process.env.PUBLIC_URL + `/imgs/shop/${addCartItem.imgSrc}`} alt="" />
                            <div className="modal__addCartContent">
                                <p>{addCartItem.title}</p>
                                <hr className="modal__addCartHr" />
                                <div className="modal__addQuantity">
                                    <span>{itemQuantity}</span>
                                    <button onClick={subQuantity}>-</button>
                                    <button onClick={addQuantity}>+</button>
                                </div>
                                <div className="modal__totalPrice">
                                    <p><span>Total price :    </span>{(itemQuantity * addCartItem.price).toLocaleString()}원</p>
                                </div>
                                <button className="modal__addCartBtn" onClick={addCartHandler}>Add Cart</button>
                            </div>
                        </div>
                    </div>
                </Modal>}
            {showAlert &&
                <Modal closeModal={closeAlert}>
                    <div className="modal__alert">
                        <div className="modal__closeBtn" onClick={closeModal}><p >X</p></div>
                        <p>장바구니에 추가되었습니다.</p>
                    </div>
                </Modal>}
        </div>

    </div >)
}

export default Shop;