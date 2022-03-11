import './App.css'
import React, { Component } from 'react';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

export default class BurgerStacker extends Component {
state = {
burgerIngredients: []

}

clearBurger = () => {
  this.setState({burgerIngredients: []})
}
// to change the state off the grandparent --pass argments
addToBurger = (ingredient) => {
    // add the selected ingredient to the burgerIngredients state
    // this.setState((prevState, props)=>{
    //   return {burgerIngredients: [...prevState.burgerIngredients, {name, color}]}
    // })
let newBurgerList = this.state.burgerIngredients
newBurgerList.unshift(ingredient)
this.setState({burgerIngredients: newBurgerList})
}

render() {
  return (
  <>
   <h1>BurgerStacker</h1>
  <main>
    <IngredientList 
    ingredients={this.props.ingredientsList} 
    // cause it lives up here 
    addToBurger={this.addToBurger}
    />
    <BurgerPane
    burgerIngredients={this.state.burgerIngredients}
    clearBurger={this.clearBurger}
    />
  </main>
  </>
)
}
}
