import React, { Component } from "react";
import ReactDOM from "react-dom"
const { uuidv4 } = require("../services/Helper")

class Payment extends Component {
    constructor () {
    super();

    this.state = {};

  }

  render() {

    return (
        <React.Fragment>
            <h2 className="mt-5">Forma de Pagamento <i className="fas fa-credit-card"></i></h2>
            
            <input 
            defaultChecked
            className="mr-1" 
            type="radio" 
            id="male" 
            name="gender" 
            value="male"></input>
            <label htmlFor="male">Pagamento online no cartão de crédito</label><br />
            {/* <input type="radio" id="female" name="gender" value="female"></input>
            <label for="female">Pagamento na entrega no dinheiro</label><br />
            <input type="radio" id="other" name="gender" value="other"></input>
            <label for="other">Pagamento na entrega no cartão de crédito ou débito</label>  */}

        </React.Fragment>
    );
  }
}

export default Payment;