import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },

]

const BuildControls = props => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price:  $<strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(control => (
                <BuildControl 
                key={control.label} 
                label={control.label} 
                type={control.type} 
                handleIngredient={props.handleIngredient}
                disabledInfo={props.disabledInfo[control.type]}
                />
            ))}
            <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    )
}
export default BuildControls