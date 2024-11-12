const express = require('express')
const app = express()
const port = 80 

app.use(express.static('static'))

app.post('/curse', (req, res) =>{
    console.log(res)
    res.redirect('/sacrifice.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))