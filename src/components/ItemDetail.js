/**
 * item detail component (shop page)
 */
import Modal from "./UI/Modal";
import { cartActions } from "../store/cart-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./ItemDetail.css"

const ItemDetail = ({ selectedItem, closeModal, showAlert }) => {
    const [itemQuantity, setItemQuantity] = useState(1);
    const dispatch = useDispatch();

    // add item quantity by 1
    const addQuantity = () => {
        setItemQuantity(prev => { prev += 1; return prev; })
    }

    // sub item quantity by 1
    const subQuantity = () => {
        setItemQuantity(prev => {
            if (prev <= 1)
                return 1;
            else prev -= 1;
                return prev;
        })
    }

    // add item to cart
    const addCartHandler = () => {
        closeModal();
        showAlert();
        dispatch(cartActions.addItem({
            item: {
                quantity: itemQuantity,
                id: selectedItem.id,
                title: selectedItem.title,
                price: selectedItem.price,
                imgSrc: selectedItem.imgSrc,
                item: selectedItem.item
            }
        }));
    }

    return (
        <>
            <Modal closeModal={closeModal}>
                <div className="modal__addCart">
                    <div className="modal__closeBtn" onClick={closeModal}><p>X</p></div>

                    <div className="modal__addCartMain">
                        <img width={"200px"} src={process.env.PUBLIC_URL + `/imgs/shop/${selectedItem.imgSrc}`} alt="" />
                        <div className="modal__addCartContent">
                            <p>{selectedItem.title}</p>
                            <hr className="modal__addCartHr" />

                            <div className="modal__addQuantity">
                                <span>{itemQuantity}</span>
                                <button onClick={subQuantity}>-</button>
                                <button onClick={addQuantity}>+</button>
                            </div>

                            <div className="modal__totalPrice">
                                <p><span>Total price : </span>{(itemQuantity * selectedItem.price).toLocaleString()}원</p>
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