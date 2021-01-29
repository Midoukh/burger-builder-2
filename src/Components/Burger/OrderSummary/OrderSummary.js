import React from 'react'
import Button from '../../UI/Button/Button'
function OrderSummary(props) {
    const ingSummaries = Object.keys(props.ingredients)
    .map(ingKey => {
        return (
            <li key={ingKey}>
                {ingKey}: {props.ingredients[ingKey]}
            </li>
            )
        })
    return (
        <div>
            <h3><strong>Your Order</strong></h3>
            <p>A delicious burger with the following ingredients: </p>
            {ingSummaries}
            <p>Total Price: $<strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" procude={props.continuePurshas}>CONTINUE</Button>
            <Button btnType="Failure" procude={props.hideBackDrop}>CANCEL</Button>

        </div>
    )
}

export default OrderSummary
