


const Product = ({ image, title,price, category, description, rating }) => {
    
  return (
    <>
      <div class="container">
        <div class="imgBx">
            <img src={image}/>
        </div>
        <div class="details">
            <div class="content">
                <h2>{title} <br/>
                    <span>{category}</span>
                    <span>{rating}</span>
                </h2>
                <p>
                    {description}
                </p>

                <h3>{price}</h3>
                <button>Buy Now</button>
            </div>
        </div>
    </div>


    

    </>
  )

}
export default Product
