const jwt = require("jsonwebtoken")
const Encript = require("../../models/encript.model")
const encriptSecret = require("../config/auth.config")
const createEncript = async (req, res) => {
    try {
        if(req.body.name) {
            const name = jwt.sign(
                {
                    name: req.body.name
                },
                encriptSecret.secret
            )
            const encript = await Encript.create({name})
            if(encript) {
                res.status(200).json({status: true, message: "Message created succesfully", id: encript.id, name: encript.name})
            } else {
                res.status(500).json({status: false, message: "O campo \"name\" é obrigatório", code: "E_VALIDATION_FAILURE"})
            }
        } else {
            res.status(500).json({status: false, message: "O campo \"name\" é obrigatório", code: "E_VALIDATION_FAILURE"})
        }
    } catch (error) {
            res.status(500).json({status: false, message: error.message})
    }
}

const getEncript = async (req, res) => {
    try {
        const { id } = req.params
        const encript = await Encript.findOne({ where: {id}})
        if(encript) {
            jwt.verify(encript.name, encriptSecret.secret, (err, decode) => {
                if(err) {
                    res.status(401).json({status: false, message: err.message });
                } else {
                    res.status(200).json({
                        status: true, 
                        id,
                        ecripted_name: encript.name,
                        name: decode.name
                    })
                }
            })
        } else {
            res.status(500).json({status: false, message: "Could not find encripted"})
        }
    } catch (error) {
            res.status(500).json({status: false, message: error.message})
    }
}

module.exports = {
    createEncript,
    getEncript
}