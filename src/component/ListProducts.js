import React, { Component } from "react";
import ReactDOM from "react-dom"
import Products from "../services/Products";

class ListProducts extends Component {
    constructor () {
    super();

    this.state = {
      value: "",
      serviceProducts: new Products(),
      listProducts: null
    };

  }

  async componentDidMount() {
    const listProducts =  await this.state.serviceProducts.getAll()

    this.setState({listProducts: listProducts})
  }


  render() {

    const {listProducts} = this.state

    const {handleAddCartItems} = this.props

    

    return (
        <React.Fragment>
            <div id="list_products">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Valor</th>
                            <th scope="col">Produto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listProducts && listProducts.map(product => {
                            
                            return (<tr key={"listviewID_"+product.id}>
                                <th scope="row">{(product.price)
                                    .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</th>
                                <td>
                                    {product.name}
                                    <button onClick={() => handleAddCartItems(product)} className="btn btn-primary btn-sm float-right">
                                        Adicionar ao carrinho 
                                        <i className="fas fa-shopping-cart"></i>
                                    </button>
                                </td>
                            </tr>)
                        })}

                    </tbody>
                </table>
        </div>
        </React.Fragment>
    );
  }
}

export default ListProducts;