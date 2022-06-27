const modelKeranjang = require('../model/keranjangModel')
const monggoose = require('mongoose')
const ObjectId = monggoose.Types.ObjectId

exports.inputKategori = (data) =>
new Promise(async (resolve, reject) => {
    modelKeranjang.create(data)
        .then(() => {
            resolve({
                status: true,
                msg: 'Berhasil Menambah Keranjang'
            })
        }).catch(err => {
            reject({
                status: false,
                msg: ' Terjadi kesalahan pada server'
            })
        })
})

exports.getAllKeranjang = () =>
    new Promise(async (resolve, reject) => {
        modelKeranjang.aggregate([
            {
                $lookup:
                {
                    from: "users",
                    localField: "idUser",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $lookup:{
                    from: "barangs",
                    localField: "idBarang",
                    foreignField: "_id",
                    as: "barang"
                }
            },
            { $unwind: "$user" },
            { $unwind: "$barang" }
        ]).then(dataBarang => {
                if (dataBarang.length > 0) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: dataBarang
                    })
                }else {
                    reject({
                        status: false,
                        msg: 'Tidak ada data barang'
                    })
                }
    }).catch(err => {
        reject({
            status: false,
            msg: 'Terjadi kesalahan pada server'
        })
    })
})
exports.getBarangById = (id) =>
    new Promise(async (resolve, reject) => {
        modelBarang.findOne({ _id: ObjectId(id) })
            .then(dataBarang => {
                if (dataBarang) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: dataBarang
                    })
                }else {
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

exports.updateBarang = (id, data) =>
new Promise(async (resolve, reject) => {
    modelBarang.updateOne({_id: ObjectId(id) }, data)
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
exports.DeleteBarang = (id) =>
new Promise(async (resolve, reject) => {
    modelBarang.deleteOne({ _id: ObjectId(id) })
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