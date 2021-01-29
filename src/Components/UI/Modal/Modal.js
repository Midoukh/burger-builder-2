import React from 'react'
import classes from './Modal.css'
import Backdrop from '../BackDrop/Backdrop'

function Modal(props) {
    return (
        <>
        <Backdrop show={props.purshasing} hideBackDrop={props.cancelPurshase}/>
        <div 
        className={classes.Modal}
        style={{
            transform: props.purshasing? 'translateY(0)': 'translateY(-100vh)',
            opacity: props.purshasing? '1':'0'
        }}
        >
          {props.children}  
        </div>
        </>
        
    )
}

export default Modal
