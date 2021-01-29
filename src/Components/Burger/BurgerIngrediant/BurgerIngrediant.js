import classes from './BurgerIngredient.css'
import React from 'react'
import PropTypes from 'prop-types';

class BurgerIngredient extends React.Component  {
    render(){
        let ingrediant = null
        switch(this.props.type){
            case('bread-bottom'):
                ingrediant = <div className={classes.BreadBottom}></div>
                break;
            case('bread-top'):
                ingrediant = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                )
                break;
            case('meat'):
                ingrediant= <div className={classes.Meat}></div>
                break;
            case('cheese'):
                ingrediant= <div className={classes.Cheese}></div>
                break;
            case('salad'):
                ingrediant= <div className={classes.Salad}></div>
                break;
            case('bacon'):
                ingrediant= <div className={classes.Bacon}></div>
                break;
        }
        return ingrediant
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient