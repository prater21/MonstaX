/**
 *  cart component
 */
import "./Cart.css"
import Modal from "./Modal"
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";


const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.items)
    const cartTotalPrice = useSelector(state => state.cart.totalPrice)
    const dispatch = useDispatch();

    //add item quantity
    const addQuantity = (title) => {
        dispatch(cartActions.addQuantity({ title }));
    }

    //sub item quantity
    const subQuantity = (title) => {
        dispatch(cartActions.subQuantity({ title }));
    }

    //delete item from cart
    const deleteCartItems = (title) => {
        dispatch(cartActions.deleteItem({ title }));
    }
    return (
        <>
            <Modal closeModal={props.closeCart}>
                <div className="cart">
                    <div className="cart__closeBtn" onClick={props.closeCart}><p >X</p></div>
                    <div className="cart__body">
                        <p>Cart</p>
                        <ul className="cart__items">
                            {
                                cartItems.map((item, i) => (
                                    <li className="cart__item" key={item.id}>
                                        <img src={process.env.PUBLIC_URL + `/imgs/shop/${item.imgSrc}`} alt="" />
                                        <div className="cart__itemDes">
                                            <p className="cart__itemTitle">{item.title}</p>
                                            <div className="cart__itemQuantity">
                                                <p >수량 : {item.quantity}</p>
                                                <button onClick={() => { subQuantity(item.title); }}>-</button>
                                                <button onClick={() => { addQuantity(item.title); }}>+</button>
                                            </div>
                                            <p className="cart__itemTotalPrice">가격 : {(item.quantity * item.price).toLocaleString()}원</p>
                                        </div>
                                        <p className="cart__delete"
                                            onClick={() => { deleteCartItems(item.title)}}>삭제</p>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                    <p className="cart__totalPrice">총 가격 : {cartTotalPrice.toLocaleString()}원</p>
                    <button className="cart__btn">주문하기</button>

                </div>
            </Modal>
        </>
    )
}
export default Cart