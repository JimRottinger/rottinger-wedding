const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/*', (req, res) => {
  res.redirect('/')
})

app.listen(PORT, () => console.log('Listening on port ' + PORT))

module.exports = app
