const express = require('express')

const app = express()

const path = require('path')

const PORT = 8000

const publicDirectory = path.join(__dirname, './public')

app.use(express.static(publicDirectory))



app.set("view engine", "ejs")

app.get('/', function(req, res){
    res.render('index')
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})