
const express = require('express')
const { generarToken } = require('./helpers/jwt')
const app = express()
const cors = require('cors');
var bodyParser = require('body-parser');
const { validarJWT } = require('./middelver/validar-jwt');
const axios =require('axios')

const MongoClient = require('mongodb').MongoClient
let db;
let collection;
MongoClient.connect('mongodb://34.125.59.69:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    db = client.db('login')
    collection = db.collection('user')
})





app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, authorization"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "PUT, GET, POST, DELETE, OPTIONS"
    );
    next();
});

app.use(cors());

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());




app.post('/addUser', (req, res) => {
    console.log('agregando usuario');

    collection.insertOne(req.body)
    res.status(201);
    res.send({ ok: true });
});


let sesiones=[]
let ip


app.post('/Login', async (req, res) => {


    const { body: user } = req;

    const result = await collection.findOne({
        USER: user.USER,
        Password: user.Password


    })


    if (result != null) {

        try {
            const response = await axios.get('https://api.ipify.org?format=json');
   
            ip =response.data.ip
            
        } catch (error) {
            console.error(error);
          }
        

        const token = await generarToken(result._id)
        Sesion={"token":token }

        sesiones.push({"token":token,"ip":ip})


        res.json({
            "id": result._id,
            "logged": true,
            "Nombre": result.Nombre,
            "EDAD": result.EDAD,
            "Telefono": result.Telefono,
            "USER": result.USER,
            "Token": token,
            "Estudiante":result.Estudiante,
            "Catedratico":result.Profesor,
            "Egresado" :result.Egresado,
            "ok": true




        }
        )
    }
    else {
        res.json({
            "logged": false


        }
        )
    }

});



app.get('/GetUsers', (req, res) => {
    db.collection('user').find().toArray()
        .then(results => {
            res.json(results);
        }).catch(error => console.error(error));
});




const renovarToken = async (req, res) => {

    const uid = req.uid


    if (uid.uid.uid == null) {
        

        console.log(uid)
        const Token = await generarToken(uid)


        const result = await db.collection('user').find().toArray()

        for (let index = 0; index < result.length; index++) {
            const element = result[index];
            if (element._id == uid.uid) {
                console.log(element)
                res.json({
                    ok: true, element, Token,

                })

                break;

            }


        }


    }
    else {




    
        
        const Token = await generarToken(uid.uid)


        const result = await db.collection('user').find().toArray()

        for (let index = 0; index < result.length; index++) {
            const element = result[index];
            if (element._id == uid.uid.uid) {
                console.log(element)
                res.json({
                    ok: true, element, Token,

                })

                break;

            }


        }

    }








}

let Sesion 



app.post('/Sesion', async(req, res) => {
  

    Sesion=req.body

    


    let ipTemporal
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
    
        ipTemporal=response.data.ip
      } catch (error) {
        console.error(error);
      }


     

      if(!Sesion.token){

        sesiones = sesiones.filter(item => item.ip !== ipTemporal);
      
      }
      console.log("arreglo sesiones")
      console.log(sesiones)










   
    res.json(sesiones)



})
app.get('/Sesion', async (req, res) => {
  let ipTemporal
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        console.log("sesion?")
        console.log(response.data.ip);
        ipTemporal=response.data.ip
      } catch (error) {
        console.error(error);
      }


      console.log(sesiones)

      let arregloFiltrado = sesiones.filter(item => item.ip === ipTemporal);

        if(arregloFiltrado.length>0){

            console.log("Token",arregloFiltrado[0].token)
            res.json({"token":arregloFiltrado[0].token})
    
        }
        else{
            Sesion={"token":false }
            
            res.json(Sesion)

        }
      
  



})




app.get('/renew', validarJWT, renovarToken)





app.put('/EditarUsuario', (req, res) => {
    console.log('Actualizando Usuario');
    console.log(req.body);
  
    const { body:toDo} = req;
    collection.findOneAndUpdate(
        { USER: toDo.USER },
        {
            $set: {
                Telefono:toDo.Telefono,
                Edad:toDo.Edad,
                Nombre:toDo.Nombre
         


              }
        },
        {
            upsert: true
        }
    ).then(result => { res.json('Updated') })
        .catch(error => console.error(error))
  });
app.listen(5000);
console.log('server oks');