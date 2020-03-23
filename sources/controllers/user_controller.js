const User  = require("../models/user_model"); // import model

module.exports = {
    createUser: (req, res)=>{
        const user = new User({
            nama        : req.body.nama,
            nip         : req.body.nip,
            kepegawaian : req.body.kepegawaian,
            pendidikan  : req.body.pendidikan,
            pk          : req.body.pk,
            jabatan     : req.body.jabatan,
            ruangan     : req.body.ruangan,
            username    : req.body.username,
            password    : req.body.password,
            activated   : req.body.activated
        });
        user
            .save()
            .then(result => {
                res.status(201).json({
                    code    : 201,
                    message : "User berhasil dibuat",
                    data    : result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error   : err
                });
            });
    },
    getAllUser: (req, res)=>{
        User.find((err, users)=>{
            res.json(users);
        });
    }
};