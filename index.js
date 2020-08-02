const express = require('express')
const mustache = require('mustache-express')
const app = express()

app.engine('html', mustache())
app.set('view engine', 'html')

app.use(express.urlencoded({ extended: false }))

// Routes
//app.get('/', (req, res) => res.send('Home'))
//app.get('/hello', (req, res) => {
//res.send(`
//<form method="post" action="/hello" >Your name : <input name="name"><br><input type="submit"></form>`)
//res.render('formhtml')
//})

//0app.post('/hello', (req, res) => {
   // const name = req.body.name
    //var html = `<h1>Hello ${name}</h1><h2>Hello ${name}</h2>`
    //res.send(html)

//})

app.get('/hello', require('./controllers/form'))
app.post('/hello', require('./controllers/submitted'))

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))