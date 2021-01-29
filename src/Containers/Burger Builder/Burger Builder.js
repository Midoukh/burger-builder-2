import React, {Component} from 'react'
import { render } from 'react-dom'
import Aux from '../../hoc/Auxi'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
const BURGER_PRICE = {
    salad: 0.3,
    bacon: 0.7,
    cheese: 0.5,
    meat: 1.1
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 3,
        purchasable: false,
        purshasing: false
    }
    handlePurshasingModal = () => {
        this.setState({purshasing: true})
    } 
    handlePurshasingState(ingredients){
        const sum = Object.values(ingredients)
            .reduce((cur, acc) => cur + acc)

        this.setState({purchasable: sum > 0})

    }
    handleIngredient = (type, operation) =>{
        const oldCount = this.state.ingredients[type]
        
        const oldPrice = this.state.totalPrice
        const priceAddition = BURGER_PRICE[type] 
        let newCount, newPrice
        if (operation === '+'){
            newCount = oldCount + 1
            newPrice = oldPrice + priceAddition
        }
        else if (operation === '-'){
            newCount = oldCount - 1 >= 0? oldCount -1: oldCount
            newPrice = oldPrice - priceAddition
            
        }
        //a new object to store the ingrediant to avoid mutability
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount
        
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.handlePurshasingState(updatedIngredients)
        
        
    }
    handleCancelPurshase = () => {
        this.setState({purshasing : false})
    }
    handleContinuePurshase = () => {
        alert('Success!')
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Modal purshasing={this.state.purshasing} 
                cancelPurshase={this.handleCancelPurshase}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    hideBackDrop={this.handleCancelPurshase}
                    continuePurshas={this.handleContinuePurshase}
                    price={this.state.totalPrice}
                    />
                </Modal>
                <BuildControls 
                handleIngredient={this.handleIngredient}
                disabledInfo={disabledInfo}
                totalPrice={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.handlePurshasingModal}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder