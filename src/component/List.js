const handleAddCart = (id) => {
    console.log(id)
};

class List
{

    constructor() {
        this.state = {}
    }

    addState(obj) {
        console.log("State")
        Object.assign(this.state, obj);
        console.log(this.state.products)
    }

    // const handleAddCart = (id) => {
    //     console.log(`HAHHAHAHHA ${id}`)
    // }

    // static get handleAddCart() {
    //     return handleAddCart;
    // }

    render() {

        console.log(this.state.products)
        
        let tableResult = ``
        for(let product of this.state.products) {
            tableResult = tableResult + `
                <tr>
                    <th scope="row">1</th>
                    <td>
                        ${product.name}
                        <button onClick="console.log()" class="btn btn-primary btn-sm float-right">
                            Adicionar ao carrinho <i class="fas fa-shopping-cart"></i>
                        </button>
                    </td>
                </tr>
            `
        }

        $("#list_products").html(`
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Produto</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableResult}
                    </tbody>
                </table>
        `)
    }
}

module.exports = {
    List,
    handleAddCart
}