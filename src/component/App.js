import React, { Component } from "react";
import ReactDOM from "react-dom"
import ListProducts from './ListProducts'
import Cart from './Cart'
import Delivery from './Delivery'
import "../app.css"
import GoogleDirections from "../services/GoogleDirections"
import Payment from './Payment'
import Overview from './Overview'


class App extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      deliveryPrice: null,
      deliveryStreet: "",
      deliveryNeiboorwod: "",
      deliveryNumber: "",
      deliveryComplement: "",
      deliveryCEP: "",
      overAllTotal: 0
    };

    this.GoogleDirections = new GoogleDirections()
  }

  handleAddCartItems = (product) => {
    
    let cartItems = this.state.cartItems

    const searchProductInCartIndex = 
        cartItems.findIndex(cartItems => cartItems.id === product.id)

    /**
     * se nao tiver nenhum item no carrinho
     */
    if (searchProductInCartIndex === -1) {

        cartItems.push({
            id: product.id,
            product,
            quantity: 1
        })
        this.setState({cartItems})
        this.getTotal(cartItems)
        return
    }

    cartItems[searchProductInCartIndex].quantity = cartItems[searchProductInCartIndex].quantity + 1

    this.setState({cartItems})

    this.getTotal(cartItems)
  }


  handleRemoveCartItems = (product) => {
    let cartItems = this.state.cartItems

    const searchProductInCartIndex = 
        cartItems.findIndex(cartItems => cartItems.id === product.id)

    const quantity = cartItems[searchProductInCartIndex].quantity;
    
    if (quantity == 1) {
        const productForRemove = cartItems[searchProductInCartIndex]

        cartItems = cartItems.filter(function (product) {
            return product.id !== productForRemove.id
        });

        this.setState({cartItems})
        this.getTotal(cartItems)
        return
    }
    
    cartItems[searchProductInCartIndex].quantity = quantity - 1

    this.setState({cartItems})
    this.getTotal(cartItems)
  }

  getPriceTotal() {

    const cartItems = this.state.cartItems

    let total = 0;
    for (let productItem of cartItems) {
        total = total + productItem.product.price * productItem.quantity
    }

    return total
  }

  handleDeliveryPrice = async(street, neighborhood, number, complement, cep) => {
  
    if (street.length > 0 && neighborhood.length > 0 & number.length > 0) {

        this.setState({
          deliveryStreet: street,
          deliveryNeiboorwod: neighborhood,
          deliveryNumber: number,
          deliveryCEP: cep,
          deliveryComplement: complement
        })

        const distance = 
            await this.GoogleDirections
                .distance(`${street}, ${number}, ${neighborhood}, Campinas`)
        let price = distance.data.routes[0].legs[0].distance.value;

        if (price < 1000) {
          price = 6000
        } else {
          price = price + 5000
        }

        this.setState({
          deliveryPrice: price
        })

        this.getTotal(this.state.cartItems)
    }
  }

  getTotal = (cartItems) => {
    //const cartItems = this.state.cartItems
    const deliveryPrice = this.state.deliveryPrice

    let total = 0
    for(let item of cartItems) {
        total = total + item.product.price * item.quantity
    }

    if (deliveryPrice) {
      total = total + (deliveryPrice / 1000)
    }

    console.log(total)
    this.setState({
      overAllTotal: total
    })
  }

  render() {

    const {cartItems, deliveryPrice} = this.state

    
    return (

        <React.Fragment>
<h2>Você pode fazer o pedido por aqui</h2>
<div id="accordion">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Escolha os items
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
      <ListProducts handleAddCartItems={this.handleAddCartItems.bind(this)} />

      <h2 className="mt-5">

                {/* {(() => {
                    if (cartItems.length < 1) {
                        return "Carinho"
                    } else {
                        return `Carrinho (${cartItems.length})`
                    }
                })()} */}
                Carinho


            <i className="fas fa-shopping-cart"></i></h2>

            <Cart handleRemoveCartItems={this.handleRemoveCartItems} cartItems={cartItems} />
            Total {
                this.getPriceTotal().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                <span className="ml-1 mr-1">sem o frete</span>
      </div>
    </div>
  </div>


  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Dados para entrega
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body">
            <Delivery 
              
              
              deliveryPrice={this.state.deliveryPrice} 
              handleDeliveryPrice={this.handleDeliveryPrice} />
      </div>
    </div>
  </div>




  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Pagamento
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body">
          <Payment />
            <Overview
              overAllTotal={this.state.overAllTotal}
              cartItems={this.state.cartItems}
              deliveryPrice={this.state.deliveryPrice}
              deliveryStreet={this.state.deliveryStreet}
              deliveryNeiboorwod={this.state.deliveryNeiboorwod}
              deliveryNumber={this.state.deliveryNumber}
              deliveryComplement={this.state.deliveryComplement}
              deliveryCEP={this.state.deliveryCEP}
            />
      </div>
    </div>
  </div>
</div>


            
            

            
                
          
            
        </React.Fragment>
    );
  }
}

export default App;