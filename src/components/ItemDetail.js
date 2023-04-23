/**
 * item detail component (shop page)
 */

import Modal from "./UI/Modal";
import { cartActions } from "../store/cart-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./ItemDetail.css"

const ItemDetail = ({ addCartItem, closeModal, showAlert }) => {
    const [itemQuantity, setItemQuantity] = useState(1);
    const dispatch = useDispatch();

    // add item quantity by 1
    const addQuantity = () => {
        setItemQuantity(prev => { prev += 1; return prev; })
    }
    // sub item quantity by 1
    const subQuantity = () => {
        setItemQuantity(prev => { if (prev === 0) return 0; else prev -= 1; return prev; })
    }
    // add item to cart
    const addCartHandler = () => {
        closeModal();
        showAlert();
        dispatch(cartActions.addItem({ item: { quantity: itemQuantity, id: addCartItem.id, title: addCartItem.title, price: addCartItem.price, imgSrc: addCartItem.imgSrc, item: addCartItem.item } }));
    }

    return (
        <>
            <Modal closeModal={closeModal}>
                <div className="modal__addCart">
                    <div className="modal__closeBtn" onClick={closeModal}><p>X</p></div>
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
            </Modal>
        </>
    )
}

export default ItemDetail;