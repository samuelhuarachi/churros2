class List
{

    constructor() {
        this.state = {}
    }

    addState(obj) {
        this.state.push(obj)

        console.log(this.state)
    }


    render() {


        $("#list_products").html(`
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Produto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                Churros Espanhol, 4 palitos de 16cm cada, Nutella Original
                                <button class="btn btn-primary btn-sm float-right">
                                    Adicionar ao carrinho <i class="fas fa-shopping-cart"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>
                                Churros Espanhol, 4 palitos de 16cm cada, Nutella Original
                                <button class="btn btn-primary btn-sm float-right">
                                    Adicionar ao carrinho <i class="fas fa-shopping-cart"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>
                                Churros Espanhol, 4 palitos de 16cm cada, Nutella Original
                                <button class="btn btn-primary btn-sm float-right">
                                    Adicionar ao carrinho <i class="fas fa-shopping-cart"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
        `)
    }
}

module.exports = {
    List
}