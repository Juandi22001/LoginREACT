const jwt= require('jsonwebtoken')

const generarToken = ( uid)=>{

  return new Promise( (resolve,reject) =>{



    const payload ={ uid }
    jwt.sign(payload,'secreta',{

        expiresIn:'24h'
    }   ,(err,token)=>{


        if(err){

            console.log(err)
            reject("no se puedo generar")
        }
        else {
     
            resolve(token)
        }
    } ) ;



});

}


 module.exports={
    generarToken
}