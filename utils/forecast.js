const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=435a0d518d723ed5ce70eded09229c42&query=` + latitude + ',' + longitude

    //destructuring
    request({url, json: true}, (error, { body }) => {
        //Low level errors
        if (error) { 
            callback('Unable to connect to weather service!', undefined)
        //The coordinates provided aren't a proper location
        } else if (body.error) {
            callback ('Unable to find location.')
        } else {
            callback (undefined, {
                data: 'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.'
            })
        }
    })
}

module.exports = forecast