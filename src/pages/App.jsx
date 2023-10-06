import React from 'react'
import '../assets/styles/App.css'
import Nav from '../components/Nav'
import ProductsDetails from '../components/ProductsDetail'
 import Index from './Index'


const App = () => {
  
  return (
    <>
    <div className='root'>
          {/* <Nav/>
          <ProductsDetails/> */}
          
          <Index/> 
    </div>
    </>
  )
}

export default App