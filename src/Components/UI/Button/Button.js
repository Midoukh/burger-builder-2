import React from 'react'
import classes from './Button.css'
function Button(props) {
    return (
        <button 
        className={[classes.Button ,classes[props.btnType]].join(' ')}
        onClick={props.procude}
        >
            {props.children}
        </button>
    )
}
export default Button