const express = require('express')
const path = require("path")
const hbs = require('hbs')
const app = express()
const port = process.env.port || 3000

const information = require("../src/utilities/websitechecker")

const views_path = path.join(__dirname, "../templates/views")
app.set('view engine', 'hbs')
app.set('views', views_path)

const publicdir = path.join(__dirname, "../public")
app.use(express.static(publicdir))

app.get('/', (req, res) => {
  res.render('index')
})

app.get("/websitehealth", async (req, res) => {
  const url = req.query.url
  const info = await information(url)
  res.send(info)
})
app.listen(port, () => console.log(`Server listening on port ${port}!`))