const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.get('/test', (req, res) => {
  res.send('Got it!')
})

app.post('/test', (req, res) => {
    let string = req.body.string_to_cut
    let splitString = string.split('')
    let new_string=[]
    for(let i=2;i<splitString.length;i+=3){
        new_string.push(splitString[i])
    }
    let return_string= new_string.join('')
    console.log(return_string)
    res.send(return_string)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})