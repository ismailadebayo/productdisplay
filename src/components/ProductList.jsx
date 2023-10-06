import Product from "./Product"
import Loader from "./Loading"

const ProductList = ({ products }) => {
  return (
    <>
      <div className='row mx-5'>
        {products.length === 0 ? (
          <h1> No product found</h1>
        ) : (
          products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
                description={product.description}
                rating={product.rating.rate}
                
              />
            )
          })
        )}
      </div>

      <div></div>
    </>
  )
}

export default ProductList
 