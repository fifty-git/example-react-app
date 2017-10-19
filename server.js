const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const request = require('request')
const ReactDOMServer = require('react-dom/server')
const path = require('path')

const app = express()

require('babel-core/register')({
  presets: ['env', 'react'],
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

function planetApiCall(planetNum) {
  return new Promise((resolve, reject) => {
    request(
      `https://swapi.co/api/planets/${planetNum}/`,
      (err, response, body) => {
        if (err) {
          reject(new Error(err))
        }
        resolve(body)
      },
    )
  })
}

async function getPlanetData(numberOfPlanets) {
  let planetArray = []
  for (let i = 0; i < numberOfPlanets; i++) {
    try {
      planetArray.push(await planetApiCall(i))
    } catch (err) {
      return err
    }
  }
  return planetArray
}

// serves files bundled by webpack
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})
app.use(express.static(path.join(__dirname, '/dist')))

app.post('/data', (req, res) => {
  if (req.query.amount) {
    getPlanetData(req.query.amount).then(data => {
      res.status(200).send(data)
    })
  } else {
    request('https://swapi.co/api/planets/10/', (err, response, body) => {
      if (err) {
        res.status(500).send({ status: 'error', message: err })
      }
      res.status(200).send(body)
    })
  }
})

app.post('/renderCode', (req, res) => {
  let component, renderedHtml
  if (req.query.component) {
    component = require(path.resolve(
      `./src/components/${req.query.component}.jsx`,
    ))
  }
  renderedHtml = {
    htmlResponse: ReactDOMServer.renderToString(component.default()),
  }

  res.status(200).send(renderedHtml)
})

app.listen(8080, () => {
  // eslint-disable-next-line
  console.log('Listening on port 8080')
})
