const userModel = require('../models/userModel');

const createUser = (req, res) => {
    userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        hasPet: req.body.hasPet
    }, function(err, result){
        if(err) {
            res.status(401).json({
                sucess: false,
                message: 'Cannot create this user Yet, try another one'
            });
        } else {
            res.status(200).json({
                sucess: true,
                message: result
            });
        }
    });
};

const getUsers = (req, res) => {
    userModel.find((err, data) => {
        if (err){
            res.status(404).json({
                success: false,
                message: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: data
            });
        }
    });
};

module.exports = {
    createUser,
    getUsers
}