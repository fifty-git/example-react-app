const ReactDomServer = require('react-dom/server')
const path = require('path')

require('babel-core/register')({
  presets: ['env', 'react'],
})

let componentLoader = name => {
  return name ? require(path.resolve(`./src/js/components/${name}.jsx`)) : false
}

function renderComponent(name) {
  return ReactDomServer.renderToString(componentLoader(name).default())
}

module.exports = { render: renderComponent }
