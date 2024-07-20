const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=435a0d518d723ed5ce70eded09229c42&query=` + latitude + ',' + longitude

    request({url: url, json: true}, (error, response) => {
        //Low level errors
        if (error) { 
            callback('Unable to connect to weather service!', undefined)
        //The coordinates provided aren't a proper location
        } else if (response.body.error) {
            callback ('Unable to find location.')
        } else {
            callback (undefined, {
                data: 'It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.'
            })
        }
    })
}

module.exports = forecast