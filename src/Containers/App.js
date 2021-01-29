import React, { Component } from 'react'
import Layout from '../Components/Layout/Layout'
import BurgerBuilder from './Burger Builder/Burger Builder'

class App extends Component{
  
 render(){
   return (
     <div>
       <Layout>
          <BurgerBuilder />
       </Layout>
     </div>
   )
 }
}

export default App;
