import React, { Component } from "react"
import ReactDOM from "react-dom"
const { uuidv4 } = require("../services/Helper")
import InputMask from 'react-input-mask'
import CEP from "../services/Cep"
import GoogleDirections from "../services/GoogleDirections"

class Delivery extends Component {
    constructor () {
    super();

    this.state = {
        cep: "",
        value: "",
        inputStreet: "",
        inputNeiboorwod: "",
        inputNumber: "",
        inputComplement: ""
    };

    this.cepService = new CEP()
    this.GoogleDirections = new GoogleDirections()
  }

  handleSubmitForm = event => {
    event.preventDefault();
  };
  
  handleCEP = (input) => {

    let sizeCEPText = (input.target.value.length)

    if (sizeCEPText < 9) {

        this.setState({
            inputStreet: "",
            inputNeiboorwod: "",
            inputNumber: "",
            inputComplement: ""
        })
    }

    this.setState({
        cep: input.target.value
    })
  }

  async addressFind() {
    const cep = this.state.cep

    const result = await this.cepService.findAdress(cep)
    if (!result) {
        return
    }
    const street = result.street
    const neighborhood = result.neighborhood

    this.setState({
        inputStreet: street,
        inputNeiboorwod: neighborhood
    })
  }

  handleInputStreet = (input) => {
    this.setState({
        inputStreet: input.target.value
    })
  }

  handleInputNeigborword = (input) => {

    this.setState({
        inputNeiboorwod: input.target.value
    })
  }

  calculateDelivery = () => {
    
    const { handleDeliveryPrice } = this.props
    const street = this.state.inputStreet
    const neighborhood = this.state.inputNeiboorwod
    const number = this.state.inputNumber

    handleDeliveryPrice(
        street, 
        neighborhood, 
        number, 
        this.state.inputComplement, 
        this.state.cep)
  }

  handleInputNumber = (input) => {
    
    this.setState({
        inputNumber: input.target.value
    })
  }

  handleInputComplement = (input) => {
    this.setState({
        inputComplement: input.target.value
    })
  }

  render() {

    const {deliveryPrice} = this.props

    return (
        <React.Fragment>
            <form onSubmit={this.handleSubmitForm}>

                <div className="form-inline">
                    <InputMask 
                        mask="99999-999" maskChar={null} 
                        onChange={this.handleCEP.bind(this)}
                        placeholder="Digite seu cep"
                        className="mr-1"
                        id="churrosaApp_cep"
                        name="churrosaApp_cep"
                        />
                    <button onClick={() => this.addressFind()} className="btn btn-primary">
                        Encontrar Seu Endereço 
                        <i className="ml-1 fas fa-search"></i></button>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="formGroupExampleInput">Rua</label>
                        <input 
                            onChange={this.handleInputStreet.bind(this)}
                            value={this.state.inputStreet} 
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" ></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="formGroupExampleInput2">Número</label>
                        <input 
                            value={this.state.inputNumber} 
                            onChange={this.handleInputNumber.bind(this)}
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" ></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="formGroupExampleInput5">Complemento</label>
                        <input
                            onChange={this.handleInputComplement.bind(this)}
                            value={this.state.inputComplement}
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput5"></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="formGroupExampleInput3">Bairro</label>
                        <input 
                            onChange={this.handleInputNeigborword.bind(this)}
                            value={this.state.inputNeiboorwod}
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput3" ></input>
                </div>
                <p>Cidade: Campinas - SP</p>
            </form>
            {(() => {
                    if (!deliveryPrice || deliveryPrice.length < 1) {
                        return "Preencha seu endereço para calcularmos o frete"
                    } else {
                        return `Valor do frete ${(deliveryPrice / 1000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
                    }
                })()}
            <button 
              onClick={() => this.calculateDelivery()}
              className="btn btn-primary btn-sm ml-1">Calcular Frete</button>
        </React.Fragment>
    );
  }
}

export default Delivery;