
const microCors = require('micro-cors')
let axios = require('axios');
let jsonpAdapter = require('axios-jsonp');


class GoogleDirections {
    
    distance = async (destination) => {

  
        try {

        
            // fetch(`${proxyurl}https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyA8TbzFWCQQFja5_MciP5OLWwvt_zohPos`).then(function (response) {
            //     console.log(response.json())
            // }).then(function (json) {
            //     console.log(json);
            // });

            destination = destination.split(' ').join('+');
            console.log(destination)

            const origin = ("Rua Antonio Cesar 230 Campinas").split(' ').join('+');
            console.log(origin)

            let url2 = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyA8TbzFWCQQFja5_MciP5OLWwvt_zohPos`
            console.log(url2)
            
            // const result = await axios.get(`https://churros2.samuelgomes.now.sh/api/google.js`,
            // { destination })
            // .then(function (response) {
            //     console.log(response)
            //     return response.data
            // })


            // await $.ajax({
            //     type: "GET",
            //     url: `https://churros2.samuelgomes.now.sh/api/google.js?destination=${destination}`,
            //     data: {'destination': destination},
            //     success: function(msg){
            //         alert( "Data Saved: " + msg );
            //     }
            // });


            // const result = await $.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyA8TbzFWCQQFja5_MciP5OLWwvt_zohPos`, 
            // function(data, status) {
            //     return data
            // })

            const config = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Access-Control-Allow-Origin': '*'
                }
              }

            const result = await axios(url2).then((res) => {
                return res
            });



            return result

        } catch(e) {
            return null
        }
    }
}


export default GoogleDirections