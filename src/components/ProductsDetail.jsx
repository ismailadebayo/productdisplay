
import { productsDetail } from "../utils/index"

import { useState, useEffect } from "react"
import ProductList from "./ProductList"
import Search from "./Search"

const ProductsDetails = () => {
  const [products, setProducts] = useState([])
  const [searchField, setSearchField] = useState(false)

  const getInput=(e)=>{
    setSearchField(e.target.value)
    return
}

const inputText = getInput()

  const filteredProduct = () => {
    if (!inputText) {
      setProducts('')
      return
    }
    const data = inputText.toLowerCase()
    const newProduct = products.filter((item) => {
      return item.title.toLowerCase().includes(data)
    })
    setProducts(newProduct)
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products)
      })
  }, [])

  return (
    <div className=''>
      <Search onChange={(e)=>setSearchField(e).target.value}/>
      <Scroll>
        <ProductList productsDetail={products} />
      </Scroll>
      <Button text={'Search'} onclick={filteredProduct}/>
      <Button text={'Show all'} onclick={products}/>
    </div>
  )
}

export default ProductsDetails
