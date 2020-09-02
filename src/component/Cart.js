import React, { Component } from "react";
import ReactDOM from "react-dom"
const { uuidv4 } = require("../services/Helper")

class Cart extends Component {
    constructor () {
    super();

    this.state = {};

  }


  async componentDidMount() {

  }

  render() {

    const { cartItems, handleRemoveCartItems } = this.props

    if (cartItems.length < 1) {
        return <p>Nenhum item no carrinho</p>
    }

    return (
        <React.Fragment>
            {cartItems.map(productCart => {
                return(
                        <p key={uuidv4()}><button 
                        onClick={() => handleRemoveCartItems(productCart)}
                        className="btn btn-sm btn-danger mr-3">
                            Remover</button> 
                            <span className="mr-3">{productCart.product.name}</span> 
                            <i className="fas fa-times mr-2"></i>
                            <span className="mr-3 badge badge-secondary">{productCart.quantity}</span>
                            <i className="fas fa-equals mr-2"></i>
                            {(productCart.product.price * productCart.quantity)
                                    .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </p>
                )
            })}
        </React.Fragment>
    );
  }
}

export default Cart;