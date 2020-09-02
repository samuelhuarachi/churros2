//const axios = require('axios')

class Products {
    
    getAll = async () => {


        const result = await $.get("https://churros2.samuelgomes.now.sh/api/products.js", function(data, status){
            return data
        });

        return result

    }
}


export default Products