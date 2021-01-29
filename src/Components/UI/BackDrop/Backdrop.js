import React from 'react'
import classes from './BackDrop.css'

function Backdrop({ show, hideBackDrop }) {
    return (
        show?<div className={classes.BackDrop} onClick={hideBackDrop}></div>: null
    )
}

export default Backdrop
