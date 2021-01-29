import React from 'react'
import classes from './BuildControl1.css'
const BuildControl = (props) =>{
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} 
            onClick={() => props.handleIngredient(props.type, '-')}
            disabled={props.disabledInfo} >Less</button>

            <button className={classes.More} 
            onClick={() => props.handleIngredient(props.type, '+')}
            >More</button>
        </div>
    )
}

export default BuildControl
