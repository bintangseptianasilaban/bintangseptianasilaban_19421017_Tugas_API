const controllerKeranjang = require('../controller/keranjangController')
const router = require('express').Router()

router.post('/input-keranjang', (req, res) => {
    controllerKeranjang.inputKeranjang(req, body)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/get-data', (req, res) => {
    controllerKeranjang.getAllKeranjang()
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})



module.exports = router