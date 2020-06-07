

const products = [
    {
        id: 1,
        name: "Churros Espanhol, 4 palitos de 16cm cada, Nutella Original",
        price: 16
    },
    {
        id: 2,
        name: "Churros Espanhol, 4 Palitos de 16cm cada, Doce de Leite Argentino Havanna",
        price: 16
    },
    {
        id: 3,
        name: "Churros Espanhol Mix, 4 palitos de 16cm cada, Nutella Original e Doce de leite Argentino Havanna",
        price: 16
    },
]


module.exports = async(req, res) => {
    res.json(products)
}