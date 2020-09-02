
const axios = require('axios');



module.exports = async(req, res) => {


    let destination = req.query.destination
    destination = destination.split(' ').join('+')
    
    const origin = ("Rua Antonio Cesar 230, Campinas").split(' ').join('+')

    const adr = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyA8TbzFWCQQFja5_MciP5OLWwvt_zohPos`;
       
    try{
        let result = await axios.get(adr, { params:{
                    origin,
                    destination
                },
                headers: {
                    "Accept": "application/json",
                    "User-Agent": "axios/0.19.2"
                }
            }).catch((error) => console.log( error.response.request._response ) );

            
        res.json({sfdsa: result})
    } catch(e) {
        res.json(e)
    }
   

   
    
}