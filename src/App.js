//feature-1
import "./App.css"
import data from "./data.json"
import React from "react"
import Products from "./components/Products"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: "",
      selected: "",
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>
          <p>All rights reserved</p>
        </footer>
      </div>
    )
  }
}

export default App
