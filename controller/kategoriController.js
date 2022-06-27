const modelKategori = require('../model/kategori')
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

exports.InputKategori = (data) =>
    new Promise(async (resolve, reject) => {
        await modelKategori.create(data)
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil membuat Kategori'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada Server'
                })
            })
    })

exports.getAllKategori = () =>
    new Promise(async (resolve, reject) => {
        modelKategori.find({})
            .then(datakategori => {
                if (datakategori.length > 0) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: datakategori
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'Tidak ada data kategori'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })


exports.getKategoriByName = (name) =>
    new Promise(async (resolve, reject) => {
        modelKategori.findOne({ namaKategori: name })
            .then(datakategori => {
                if (datakategori) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: datakategori
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'Tidak ada data kategori' + name
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })

exports.updateKategori = (id, data) =>
new Promise(async (resolve, reject) => {
    modelKategori.updateOne({ id: objectId(id) }, data)
        .then(() => {
            resolve({
                status: true,
                msg: 'Berhasil merubah data'
            })
        }).catch(err => {
            reject({
                status: false,
                msg: 'Terjadi kesalahan pada server'
            })
        })
})

exports.hapusKategori = (id) =>
    new Promise(async (resolve, reject) => {
        modelKategori.deleteOne({ _id: objectId(id) })
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil menghapus data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Server tidak meresponse'
            })
        })
    })