const res = require('express/lib/response')
const controllerBarang = require('../controller/barangController')
const utils_apps = require('../utils/utils_apps')
const router = require('express').Router()
const multer = require('multer')
const uploadFile = multer ({
    storage: utils_apps.uploadFile
}).single("gambar")


router.post('/inputBarang' , uploadFile, (req, res) => {
    if(req.file === undefined){
        req.json({
            status: false,
            msg: 'File Tidak Boleh Kosong'
        })
    } else {
        Object.assign(req.body,{
            gambar: req.file.filename
        })
    }
    controllerBarang.inputBarang(req.body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})
router.get('/get-data' , (req, res) => {
    controllerBarang.getAllBarang()
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/get-data-ById/:id' , (req, res) => {
    controllerBarang.getBarangById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.put('/update-barang/:id' , (req, res) => {
    controllerBarang.updateBarang(req.params.id, req.body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.delete('/delete-barang/:id' , (req, res) => {
    controllerBarang.DeleteBarang(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch( err => {
        res.json(err)
    })
})


module.exports = router

