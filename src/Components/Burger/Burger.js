import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngrediant/BurgerIngrediant'
const Burger = (props) => {
    const ingredients = Object.keys(props.ingredients)
    .map(ing => {
        return [...Array(props.ingredients[ing])].map((_, i) => {
            
            return <BurgerIngredient key={ing+i} type={ing}/>
        }) 
    })
    .reduce((cur, next) => {
        return cur.concat(next) 
    }, [])
    return (
        <div className={classes.Burger}>
           
            <BurgerIngredient type="bread-top"/>
            {ingredients.length? ingredients: <p>Please start adding ingredients</p>}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    )
}
export default Burger