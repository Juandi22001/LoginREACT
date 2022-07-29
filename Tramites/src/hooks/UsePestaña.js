import { useState, useEffect } from "react"
import axios from 'axios';
import Swal from 'sweetalert2'
import { avatarClasses } from "@mui/material";
export const Pestaña = () => {

    let localcart = JSON.parse(localStorage.getItem('pestaña') || '[]');
    const [pestaña, setPestaña] = useState(localcart)
    const [CargandoPestaña, setCargandoPestaña] = useState(true)

    const GetPestaña = async () => {

        if (pestaña.length > 0) {

            console.log("pestaña", pestaña)
            setCargandoPestaña(false)
        }
        /*
        const { Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion,URL } = req.body;
        */



    }

    const EliminarPestañas = () => {

        setPestaña([])

        localStorage.removeItem('pestaña')
        localStorage.setItem("pestaña", JSON.stringify([]))


    }
    const EliminarPestaña = (id) => {

        let arregloFiltrado = pestaña.filter(item => item.valor != id);
        setPestaña(arregloFiltrado)
        console.log("arreglo a borrar", arregloFiltrado)

        if (arregloFiltrado.length < 0) {

            setPestaña([])
            localStorage.removeItem('pestaña')
            localStorage.setItem("pestaña", JSON.stringify([]))
        }
        else {



            localStorage.removeItem('pestaña')
            localStorage.setItem('pestaña', JSON.stringify(arregloFiltrado))

        }



    }
    const AgregarPestaña = (item) => {

        if (pestaña.length === 0) {


            setPestaña([...pestaña, item])
            localStorage.setItem('pestaña', JSON.stringify(pestaña))
            console.log("pestaña unica", pestaña[0])

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



                    setPestaña([...pestaña, item])
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

        GetPestaña()

    }, [CargandoPestaña]);
    return { AgregarPestaña, pestaña, EliminarPestañas, EliminarPestaña }
}


/*


  ANDO EN EL BAÑO :v
*/