const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// node libraries
const path = require('path')

const Routes = require('./server/routes.js')
const ReactSsr = require('./server/reactRender.js')
const app = express()

require('babel-core/register')({
  presets: ['env', 'react'],
})

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

/*

  SSR initial page load render algorithm
  1) Load in index.html template
  2) Render React components
  3) Fill template
  4) Send to the client

 */
app.set('view engine', 'pug')
app.set('views', `${__dirname}/src/views`)

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'doggo template',
    app: ReactSsr.render('app'),
  })
})
app.use(express.static(path.join(__dirname, '/dist')))

app.post('/data', () => Routes.StarWarsData(app))

app.listen(8080, () => {
  // eslint-disable-next-line
  console.log('Listening on port 8080')
})
