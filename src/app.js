const axios = require('axios');

const {List} = require("./component/List")


const listProduts = new List()
listProduts.render()




axios.get('https://churros2.samuelgomes.now.sh/api/products.js')
    .then(function (response) {

        console.log(response.data)

        for(product of response.data) {
            console.log(product)
        }

        listProduts.addState({
            products: response.data
        })
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });