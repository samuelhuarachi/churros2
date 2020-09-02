
class CEP {
    
    findAdress = async (cep) => {

        try {
            const result = await $.get(`https://brasilapi.com.br/api/cep/v1/${cep}`, 
            function(data, status) {
                console.log(status)
                return data
            })

            return result
        } catch(e) {
            return null
        }
    }
}


export default CEP