import React, { Component } from "react";
import ReactDOM from "react-dom"
const { uuidv4 } = require("../services/Helper")

class Overview extends Component {
    constructor () {
    super();

    this.state = {
        total: 0
    };

  }
  
  

  render() {

    const { 
        deliveryCEP,
        cartItems,
        deliveryPrice,
        deliveryStreet,
        deliveryNeiboorwod,
        deliveryNumber,
        deliveryComplement,
        overAllTotal
    } = this. props


    if (overAllTotal == 0 || cartItems.length == 0 || !deliveryNumber || !deliveryStreet) {
        return <React.Fragment>
            <h2 className="mt-5">Confirmar Pedido</h2>
            <div className="row mb-5">
                <div className="col-md-6">
                    <div className="alert alert-primary" role="alert">
                        Preencha todos os campos corretamente, para finalizar seu pedido
                    </div>
                </div>
            </div>
        </React.Fragment>
    }

    return (
        <React.Fragment>
            <h2 className="mt-5">Confirmar Pedido</h2>
            <div>
                <div className="col-sm-6">
                    <h4>Endereço de Entrega</h4>
                    <p>Rua: {deliveryStreet}, {deliveryNumber}</p>
                    <p>Complemento: {deliveryComplement}</p>
                    <p>Bairro: {deliveryNeiboorwod}</p>
                    <p>CEP: {deliveryCEP}</p>
                </div>
                <div className="col-sm-6">
                    <h4>Items do Meu Pedido</h4>
                    {cartItems.map((item) => {
                        return(<p key={uuidv4()}>{
                                item.quantity}  
                                <i className="fas fa-times mr-2"></i> 
                                {item.product.name}
                            </p>)
                    })}
                </div>
                <div className="col-md-12 text-right">
                    <h4>Total + Frete</h4>
                    <p>{overAllTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </div>
            </div>
        </React.Fragment>
    );
  }
}

export default Overview;