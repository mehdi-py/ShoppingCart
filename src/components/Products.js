import React, { Component } from "react"

class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <div className="product__main">
                  <a href={"#" + product.id}>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                  </a>
                </div>
                <div className="product__extra">
                  <p>{`$${product.price}`}</p>
                  <button className="button-primary">Add to Cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Products
