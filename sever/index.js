// Import or riquire EXPRESSJS
const express = require('express')

const usersRoutes = require('./Routes/users.routes')

// ASSIGN APP VARIABLE AND CREATE SEVER
const app = express()
const port = 3000

app.set("view engine", "pug");
app.set("views", "./views")

app.use('/users', (req, res, next) => {
    console.log(`The request recieved at:`, new Date())
    next()
})
// REQUEST AND RESPONE
app.get('/', (req, res) => {
    res.send('<h3 style= "color:red">Home</h3>');

})
app.use('/users', usersRoutes)
// app.get('*', (req, res) => {
//     res.send('<h3 style= "color:red">Lỗi rồi tía !!</h3>');
// })
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})