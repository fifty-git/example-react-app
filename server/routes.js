/*

  Routes File

  This file is only for routes for the example react app

*/

const request = require('request')

require('babel-core/register')({
  presets: ['env', 'react'],
})

let starWarsData

function planetApiCall(planetNum) {
  return new Promise((resolve, reject) => {
    request(
      `https://swapi.co/api/planets/${planetNum}/`,
      { timeout: 1500 },
      (error, response, body) => {
        if (error) {
          reject(new Error(error))
        }
        console.log(body)
        resolve(body)
      }
    )
  })
}

// TODO: Optimized this request. The way this is written is stupid. - Jon
async function getPlanetData(numberOfPlanets) {
  let planetArray = []
  for (let i = 0; i < numberOfPlanets; i++) {
    console.log(planetArray[i - 1])
    try {
      planetArray.push(await planetApiCall(i))
    } catch (err) {
      return err
    }
  }

  return planetArray
}

starWarsData = app => {
  app.post('/data', (req, res) => {
    console.log(app)
    console.log(req)
    console.log(res)
    if (req.query.amount) {
      getPlanetData(req.query.amount)
        .then(data => {
          res.status(200).send(data)
        })
        .catch(error => {
          res.status(500).send({ error: new Error(error) })
        })
    } else {
      request(
        'https://swapi.co/api/planets/10/',
        { timeout: 1500 },
        (err, response, body) => {
          if (err) {
            res.status(500).send({ status: 'error', message: err })
          }
          res.status(200).send(body)
        }
      )
    }
  })
}

// if you add a path to the file, add it as an attribute to this object
module.exports = { StarWarsData: starWarsData }
