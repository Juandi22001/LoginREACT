import Swal from 'sweetalert2'
import { useState, createContext, useCallback } from "react"
import { useLogin } from "../hooks/useLogin";

import { FetchPostSesion, FetchSesion, FetchToken, Fetch_sin_Token } from '../Helpers/fetch';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    Nombre: null,
    Telefono: null,
    Edad: null,
    roles: []
};

function AuthProvider({ children }) {
    const [pestañasTotales, setPestañasTotales] = useState([])
    const [auth, setauth] = useState(initialState)
  let  alv=[]

 
    const submitLogin = async (USER, Password) => {

        //   let res = Login(USER, Password);
        const resp = await Fetch_sin_Token('Login', { USER, Password }, 'POST');




        if (resp.logged === true) {


            if (resp.Estudiante && resp.Catedratico && resp.Egresado) {
                const pestañaUnica = {

                    "nombre": "Estudiante", "valor": "2"
                }
                const pestañaUnica2 = {

                    "nombre": "Catedratico", "valor": "3"
                }

                const pestañaUnica3 = {

                    "nombre": "Egresado", "valor": "4"
                }
                alv.push(pestañaUnica)

                alv.push(pestañaUnica2)
                alv.push(pestañaUnica3)

            }


           else if (resp.Estudiante && resp.Catedratico) {
                const pestañaUnica = {

                    "nombre": "Estudiante", "valor": "2"
                }
                const pestañaUnica2 = {

                    "nombre": "Catedratico", "valor": "3"
                }

            
                alv.push(pestañaUnica)

                alv.push(pestañaUnica2)
              

        }

        else if ( resp.Estudiante&&resp.Egresado) {
          
            const pestañaUnica = {

                "nombre": "Estudiante", "valor": "2"
            }

            const pestañaUnica3 = {

                "nombre": "Egresado", "valor": "4"
            }
           

            alv.push(pestañaUnica)
            alv.push(pestañaUnica3)

        }
        else if ( resp.Catedratico && resp.Egresado) {
          
            const pestañaUnica2 = {

                "nombre": "Catedratico", "valor": "3"
            }

            const pestañaUnica3 = {

                "nombre": "Egresado", "valor": "4"
            }
           

            alv.push(pestañaUnica2)
            alv.push(pestañaUnica3)

        }

     


        
        else if ( resp.Estudiante) {
          
            const pestañaUnica = {

                "nombre": "Estudiante", "valor": "2"
            }

            

            alv.push(pestañaUnica)
        

        }


        
        else if ( resp.Catedratico) {
          
            const pestañaUnica = {

                "nombre": "Catedratico", "valor": "3"
            }

            

            alv.push(pestañaUnica)
        

        }    
        else if ( resp.Egresado) {
          
            const pestañaUnica = {

                "nombre": "Egresado", "valor": "4"
            }

            

            alv.push(pestañaUnica)
        

        }



   

            setauth({
                checking: false,
                logged: true,

                Nombre: resp.Nombre,
                Telefono: resp.Telefono,
                Edad: resp.EDAD,
                USER: resp.USER,
                Estudiante: resp.Estudiante,
                Catedratico: resp.Profesor,

                Egresado: resp.Egresado,
                roles: alv




            })




        }
        else {
            Swal.fire("Credenciales Incorrectas", "Mensaje:", "error")



        }







    }


    const Usuario = (e) => {

    }




    const verificarToken = useCallback(async () => {


        const token = localStorage.getItem('token');


        const prueba = await FetchSesion('Sesion', 'GET')


        if (!prueba.token) {
            return setauth({
                uid: null,
                checking: true,
                logged: false,
                Nombre: null,
                Telefono: null,
                Edad: null,
                roles: []

            })
        }

        const resp = await FetchToken('renew', 'GET')



        if (resp.ok) {
       
         

            if(alv.length===0){
            if (resp.element.Estudiante && resp.element.Profesor&& resp.element.Egresado) {
               
                const pestañaUnica = {

                    "nombre": "Estudiante", "valor": "2"
                }
                const pestañaUnica2 = {

                    "nombre": "Catedratico", "valor": "3"
                }

                const pestañaUnica3 = {

                    "nombre": "Egresado", "valor": "4"
                }
                alv.push(pestañaUnica)

                alv.push(pestañaUnica2)
                alv.push(pestañaUnica3)

            }


           else if (resp.element.Estudiante && resp.element.Profesor) {
                const pestañaUnica = {

                    "nombre": "Estudiante", "valor": "2"
                }
                const pestañaUnica2 = {

                    "nombre": "Catedratico", "valor": "3"
                }

            
                alv.push(pestañaUnica)

                alv.push(pestañaUnica2)
              

        }

        else if ( resp.element.Estudiante&&resp.element.Egresado) {
          
            const pestañaUnica = {

                "nombre": "Estudiante", "valor": "2"
            }

            const pestañaUnica3 = {

                "nombre": "Egresado", "valor": "4"
            }
           

            alv.push(pestañaUnica)
            alv.push(pestañaUnica3)

        }
        else if ( resp.element.Profesor&& resp.element.Egresado) {
          
            const pestañaUnica2 = {

                "nombre": "Catedratico", "valor": "3"
            }

            const pestañaUnica3 = {

                "nombre": "Egresado", "valor": "4"
            }
           

            alv.push(pestañaUnica2)
            alv.push(pestañaUnica3)

        }

     


        
        else if ( resp.element.Estudiante) {
          
            const pestañaUnica = {

                "nombre": "Estudiante", "valor": "2"
            }

            

            alv.push(pestañaUnica)
        

        }


        
        else if ( resp.element.Profesor) {
          
            const pestañaUnica = {

                "nombre": "Catedratico", "valor": "3"
            }

            

            alv.push(pestañaUnica)
        

        }    
        else if ( resp.element.Egresado) {
          
            const pestañaUnica = {

                "nombre": "Egresado", "valor": "4"
            }

            

            alv.push(pestañaUnica)
        

        }
    }
         
            setauth({
               
                checking: false,
                logged: true,

                Nombre: resp.element.Nombre,
                Telefono: resp.element.Telefono,
                Edad: resp.element.EDAD,
                USER: resp.element.USER,
                Estudiante: resp.element.Estudiante,
                Catedratico: resp.element.Profesor,

                Egresado: resp.element.Egresado,
                roles: alv


            });


            return true;

        } else {
            
          

            if (resp.element.Estudiante && resp.element.Profesor&& resp.element.Egresado) {
                const pestañaUnica = {

                    "nombre": "Estudiante", "valor": "2"
                }
                const pestañaUnica2 = {

                    "nombre": "Catedratico", "valor": "3"
                }

                const pestañaUnica3 = {

                    "nombre": "Egresado", "valor": "4"
                }
                alv.push(pestañaUnica)

                alv.push(pestañaUnica2)
                alv.push(pestañaUnica3)

            }


           else if (resp.element.Estudiante && resp.element.Profesor) {
                const pestañaUnica = {

                    "nombre": "Estudiante", "valor": "2"
                }
                const pestañaUnica2 = {

                    "nombre": "Catedratico", "valor": "3"
                }

            
                alv.push(pestañaUnica)

                alv.push(pestañaUnica2)
              

        }

        else if ( resp.element.Estudiante&&resp.element.Egresado) {
          
            const pestañaUnica = {

                "nombre": "Estudiante", "valor": "2"
            }

            const pestañaUnica3 = {

                "nombre": "Egresado", "valor": "4"
            }
           

            alv.push(pestañaUnica)
            alv.push(pestañaUnica3)

        }
        else if ( resp.element.Profesor&& resp.element.Egresado) {
          
            const pestañaUnica2 = {

                "nombre": "Catedratico", "valor": "3"
            }

            const pestañaUnica3 = {

                "nombre": "Egresado", "valor": "4"
            }
           

            alv.push(pestañaUnica2)
            alv.push(pestañaUnica3)

        }

     


        
        else if ( resp.element.Estudiante) {
          
            const pestañaUnica = {

                "nombre": "Estudiante", "valor": "2"
            }

            

            alv.push(pestañaUnica)
        

        }


        
        else if ( resp.element.Profesor) {
          
            const pestañaUnica = {

                "nombre": "Catedratico", "valor": "3"
            }

            

            alv.push(pestañaUnica)
        

        }    
        else if ( resp.element.Egresado) {
          
            const pestañaUnica = {

                "nombre": "Egresado", "valor": "4"
            }

            

            alv.push(pestañaUnica)
        

        }


            setauth({
                checking: false,
                logged: true,

                Nombre: resp.element.Nombre,
                Telefono: resp.element.Telefono,
                Edad: resp.element.EDAD,
                USER: resp.element.USER,
                Estudiante: resp.element.Estudiante,
                Catedratico: resp.element.Profesor,

                Egresado: resp.element.Egresado,
                roles: alv
               

 

            });

            return false;
        }

    }, []);
    return (
        <AuthContext.Provider value={{

            submitLogin, Usuario, auth, verificarToken
        }}>

            {children}
        </AuthContext.Provider >






    )
}

export default AuthProvider;