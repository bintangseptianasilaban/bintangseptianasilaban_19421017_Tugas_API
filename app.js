const exspress = require('express')
const app = exspress()
const port = 8080
const mongoose = require('mongoose')
const dbconfig = require('./config/DbConfig')

app.use(exspress.json())
app.use(exspress.urlencoded({extended: true}))

 mongoose.connect(dbconfig.mongoUrl,{
    useUnifiedTopology : true,
    useNewUrlparser: true   
 }).then(() => {
     console.log("Connect mongodb")
 }).catch(err => {
     console.log(err)
 })

app.get("/", (req, res) => {
    res.json({
    msg: "Selamat Datang Di API"
    })
})

app.use("users", require("./routes/userRouters"))
app.use('/kategori', require('./routes/kategoriroutes'))
app.use('/barang', require('./routes/barangRoutes'))


// app.get("/data/:npm/:nama", (req, res) => {...
//        })
app.listen(port, () => {
    console.log("server berjalan di port"+ port)
})

