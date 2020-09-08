const request = require('postman-request')
const geocode = require('./utilis/geocode')
const forecast = require('./utilis/forecast')
// const url= 'http://api.weatherstack.com/current?access_key=723a508ccb0473b3c20668a156e08b28&query=37.8276,-122.4233&units=f'

// request({ url : url,json : true },(error,response)=>{
//     //const data = JSON.parse(response.body)
//     console.log('It is currently '+ response.body.current.temperature + ' degrees out. There is a chance of rain')

// })

// const geocodeurl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWFzaGdhdXRhbTExMyIsImEiOiJja2VwcGdzcGUwNGRhMnpxc3Fodjhud2o3In0.X60FB21ioExyDwsxmu5-_g&limit=1'

// request({ url : geocodeurl,json : true },(error,response)=>{
//     //const data = JSON.parse(response.body)
//     console.log('Latitude = '+ response.body.features[0].center[1] + ' Longitude =  '+ response.body.features[0].center[0] )

// })

// const geocodeurl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/12abc.json?access_token=pk.eyJ1IjoieWFzaGdhdXRhbTExMyIsImEiOiJja2VwcGdzcGUwNGRhMnpxc3Fodjhud2o3In0.X60FB21ioExyDwsxmu5-_g&limit=1'

// request({ url : geocodeurl,json : true },(error,response)=>{
//     //const data = JSON.parse(response.body)
//     if(error){
//         console.log("No Internet Connection")
//     }
//     else if(response.body.features.length ===0){
//         console.log('No such location')
//     }
//     else
//     console.log('Latitude = '+ response.body.features[0].center[1] + ' Longitude =  '+ response.body.features[0].center[0] )

// })


// const geocode = (address,callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoieWFzaGdhdXRhbTExMyIsImEiOiJja2VwcGdzcGUwNGRhMnpxc3Fodjhud2o3In0.X60FB21ioExyDwsxmu5-_g&limit=1'
//     request({url : url , json : true},(error,response) => {
//         if(error){
//             callback('NO internet',undefined)
//         }
//         else if(response.body.features.length ===0){
//                    console.log('No such location',undefined)
//          }
//          else {
//              callback(undefined, {
//                 latitude : response.body.features[0].center[0],
//                 longitude : response.body.features[0].center[1],
//                 location : response.body.features[0].place_name 
//              })
//          }
//     })
// }

const address = process.argv[2]
geocode(address ,(error,{latitude,longitude,location}) => {
    if(error){
        return console.log(error) 
    }
    forecast(latitude,longitude, (error, Forecastdata) => {
        if(error){
            return console.log(error)
        }
        console.log(location)
        console.log(Forecastdata)
      })
    
})

