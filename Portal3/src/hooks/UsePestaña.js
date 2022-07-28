import { useState, useEffect,useContext } from "react"
import axios from 'axios';
import Swal from 'sweetalert2'
import { AuthContext } from "../Context/AuthContext";
import { avatarClasses } from "@mui/material";
export const Pestaña = () => {
    
  const { auth } = useContext(AuthContext)
    let pestañas = []

    const [pestañasTotales, setPestañasTotales] = useState([])
    let localcart = JSON.parse(localStorage.getItem('pestaña') || '[]');
    const [pestaña, setPestaña] = useState(localcart)
    const [CargandoPestaña, setCargandoPestaña] = useState(true)

    const GetPestaña = async () => {

        if (pestaña.length > 0) {

            console.log("pestaña", pestaña)
            setCargandoPestaña(false)
        }
      


    }

    const LlenarEstudiante=()=>{
     
        if (auth.Estudiante == true) {
            
            const pestañaUnica = {
      
              "nombre": "Estudiante", "valor": "2"
            }
      
            pestañas.push(pestañaUnica)
      
        
      
            
      
      
      
          }
 


    }
    const LLenarCatedratico=()=>{
        if (auth.Catedratico == true) {
            const pestañaUnica = {
      
              "nombre": "Catedratico", "valor": "3"
            }
      
            pestañas.push(pestañaUnica)
      
        
      
            
      
      
      
          }


    }


    const LLenarEgresado=()=>{
        if (auth.Egresado == true) {
            const pestañaUnica = {
      
              "nombre": "Egresado", "valor": "4"
            }
      
            pestañas.push(pestañaUnica)
      
        
      
            
      
      
      
          }


    }
    const LLenarPestaña = () => {
    
        setPestañasTotales([])
        LlenarEstudiante()

        LLenarCatedratico()
         LLenarEgresado()
         setPestañasTotales(pestañas)
         pestañas=[]
    
     
      }
    const EliminarPestañas = () => {

        setPestaña([])

        localStorage.removeItem('pestaña')
        localStorage.setItem("pestaña", JSON.stringify([]))


    }
    const EliminarPestaña = (id) => {
        console.log(pestaña[1].valor)


        let arregloFiltrado = pestaña.filter(item => item.valor != id);
        setPestaña(arregloFiltrado)

        localStorage.removeItem('pestaña')
        localStorage.setItem("pestaña", JSON.stringify(arregloFiltrado))



    }
    const AgregarPestaña = (item) => {
        console.log(pestaña)
        if (pestaña.length == 0) {

        
            pestaña.push(item)
            localStorage.setItem('pestaña', JSON.stringify(pestaña))
            console.log("pestaña", pestaña[0])

        } else {
            if (pestaña.length < 5) {




                let arregloFiltrado = pestaña.filter(arr => arr.nombre === item.nombre);
                if (arregloFiltrado.length > 0) {

                    Swal.fire(
                        'ALTO',
                        ' No puedes agregar mas pestañas del mismo tipo',
                        'warning'


                    )
                } else {


                    setPestaña([...pestaña, item]);
                    localStorage.setItem('pestaña', JSON.stringify(pestaña))
                }
                console.log("arreglo", arregloFiltrado)




            } else {

                Swal.fire(
                    'ALTO',
                    ' Solo puedes agregar 5 pestañas',
                    'warning'


                )

            }
        }

        /*
        const { Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion,URL } = req.body;
        */



    }



    useEffect(() => {

        LLenarPestaña()

    }, [CargandoPestaña]);
    return { AgregarPestaña, pestaña, EliminarPestañas, EliminarPestaña,LLenarPestaña,pestañasTotales }
}


/*


  ANDO EN EL BAÑO :v
*/