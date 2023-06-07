/**
 * Modal Component
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Barkdrop = props => {
    return <div className='backdrop' onClick={props.closeModal} />
}

const ModalOverlay = props => {
    return (
        <div className='modal__shop'>
            {props.children}
        </div>
    )
}

const Modal = props => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Barkdrop closeModal={props.closeModal} />, document.getElementById('overlays'))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children} </ModalOverlay>, document.getElementById('overlays'))}
    </React.Fragment>
}

export default Modal;