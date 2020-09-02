

//const axios = require('axios').default;


module.exports = async(req, res) => {

    const destination = req.body.destination.split(' ').join('+')

    return res.json(destination)

    const origin = ("Rua Antonio Cesar 230, Campinas").split(' ').join('+')


    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyA8TbzFWCQQFja5_MciP5OLWwvt_zohPos`
    const result = await $.get(url, 
        function(data, status) {

            return data
        }
    )

    // await axios.get(url)
    //   .then(function (response) {
    //     //console.log(response);

    //     return res.json({response})
    //   })


    res.json({result})
}