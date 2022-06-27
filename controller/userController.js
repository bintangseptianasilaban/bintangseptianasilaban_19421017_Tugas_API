const userModel = require('../model/userModel')

exports.registrasiUser = (data) =>
    new Promise(async(resolve, reject) => {
        userModel.create(data)
        .then(() => {
            console.log("berhasil")
            resolve({
                status : true,
                msg : "Berhasil registrasi"
            })
            }).catch(err =>{
            reject({
                status :false,
                msg: "Gagal registrasi"
            })
        })

    })