const jwt = require('jsonwebtoken')
const validarJWT = (req, res, next) => {

    try {
        const token = req.headers.xtoken

         if(!token){

            return res.status(401).json({

                ok:false,
                msg:'No hay token'

            })
         }

         const payload = jwt.verify(token,'secreta')
         req.uid=    payload

         next()


    } catch (err) {
        res.status(401).json({



        })
    }

}

module.exports = {
    validarJWT
}