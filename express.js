const express = require('express')
//const body_parser = require('body-parser');
const app = express()
const port = 9000


app.get('/', function (req, res) {
res.send('Hello World!')
})

app.post('/', function (req, res){
    
    res.send('Contestando una petición por: Post')
})

app.put('/', function (req, res){
    res.send('Contestando una petición por: put')
})
app.delete('/', function (req, res){
    res.send('Contestando una petición por: delete')
})

app.listen(port, function () { 
console.log(`Example app listening on port ${port}!`)
})