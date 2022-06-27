const controlleKategori = require('../controller/kategoriController')
const router = require('express').Router()

router.post('/input', (req, res) => {
    controlleKategori.InputKategori(req.body)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
    })
})

router.get('/get-data', (req, res) => {
    controlleKategori.getAllKategori()
        .then((result) => {
            res.json(result)
        }).catch(err => {   
            res.json(err)
    })
})
        module.exports = router

        router.get('/get-data/:namakategori', (req, res) => {
            controlleKategori.getKategoriByName(req.params.namakategori)
                .then((result) => {
                    res.json(result)
                }).catch(err => {
                    res.json(err)
            })
        })
        
        router.put('/update-data/:id', (req, res) => {
            controlleKategori.updateKategori(req.params.id, req.body)
                .then((result) => {
                    res.json(result)
                }).catch(err => {   
                    res.json(err)
            })
        })
                module.exports = router
        
