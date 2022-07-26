import { useForm } from "../hooks/useForm";
import Swal from 'sweetalert2'
import { Image } from "@nextui-org/react";

import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer,Card} from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { useLogin } from "../hooks/useLogin";
import { AuthContext } from "../Context/AuthContext";
export const Login = () => {


const { submitLogin } = useContext(AuthContext)
    const { CrearUsuario } = useLogin();

    const { setVisible, bindings } = useModal();
    const [bienvenida,setBienvenida] = useState(false)


    const { values, handleInputChange } = useForm({


        Password: '',
        USER: '',
        showPassword: false,
        Nombre: '',
     
        ConfirmarPassword: '',
        EDAD: '',
        Telefono: ''








    });
    useEffect(() => {
        setInterval(set, 3000);


})
function set() {
    setBienvenida(true)

  
  }
    const handleLogin = (e) => {




        if (values.USER === '') {

            Swal.fire("Campo User Obligatorio", "Mensaje:", "warning")
        }
        else if (values.Password === '') {

            Swal.fire("Campo Password Obligatorio", "Mensaje:", "warning")
        } else {

            submitLogin(values.USER, values.Password)
        }





    }
    const handleSubmitUsuario = (e) => {




        if (values.Password !== values.ConfirmarPassword) {

            Swal.fire("Las contraseñas no coincidem", "Mensaje:", "warning")
        }
        else if (values.USER === '') {

            Swal.fire("Campo USER Obligatorio", "Mensaje:", "warning")
        } else {

            CrearUsuario(values.Nombre, values.USER, values.Password, values.ConfirmarPassword, values.EDAD, values.Telefono)
        }

    }
   
    return (
        <div  class="Contenedor">
{bienvenida === false ?

<>
<div class="bienvenida" >

   


</div>

</>

: (   












<div class="Fondoportal" >










<Grid.Container gap={2} justify="center" align="center" bordered={2}>

<div class="centerCard">

<Card  css={{ p: "$6", mw: "350px" }} >

<Card.Header >
<Card.Image
  src="https://github.com/Juandi22001/LoginREACT/blob/main/Imagenes/LogoPortal1.png?raw=true" 

   alt="efe?"   
        
        objectFit="cover"
        
        />
        


</Card.Header>





        <form id="form" >
        <Card.Body css={{ p: 0, justifyItems: "center" ,zIndex: 1, top: 5 }}>
            <div class="center">
            <Grid  xs={12} sm={24} align="center">

                <Input
                    bordered
                    labelPlaceholder="Usuario" color="primary"
                    id="USER" name="USER" value={values.USER}
                    onChange={handleInputChange}


                />

            </Grid>


            <Grid  xs={12} sm={24} align="center">
                <Input
                    id="filled-adornment-password"
                    type='password'
                    bordered
                    color="primary" placeholder=" Contraseña"
                    value={values.Password} name="Password" onChange={handleInputChange}


                />

            </Grid>
            </div>
            </Card.Body>
            <Row justify="space-around" align="center">

                <Grid css={{ m: 10 }}>
                    <Button auto ghost color="primary" onClick={() => handleLogin()} >
                        Login
                    </Button>
                </Grid>
                <Grid>

                    <Text color="primary" size={12}>
                        Eres nuevo?
                    </Text>
                    <Button auto ghost color="primary" css={{ m: 1 }} onClick={() => setVisible(true)}  >
                        Registrarse
                  
                     </Button>
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                    <Modal

                        width="400px"



                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                        {...bindings}
                    >
                        <Modal.Header  css={{ xs: 8 }}   >


                            <Image src="https://github.com/Juandi22001/LoginREACT/blob/main/Imagenes/registroLogo.png?raw=true" width={700}
                                height={200} alt="efe?" />

                        </Modal.Header>
                        <Modal.Body align="center" >


                            <Row justify='center' align="center" css={{ m: 10 }} >


                                <Input
                                    clearable
                                    bordered
                                    Placeholder="Nombre" color="success"
                                    id="Nombre" name="Nombre" value={values.Nombre}
                                    onChange={handleInputChange}


                                />
                                <Spacer y={2.5} />
                            </Row>

                            <Row justify='center' align="center" css={{ xs: 4 }} >



                                <Input
                                    clearable
                                    bordered
                                    Placeholder="USER" color="success"
                                    id="USER" name="USER" value={values.USER}
                                    onChange={handleInputChange}


                                />
                            </Row>


                            <Row justify='center' align="center" css={{ xs: 4 }} >



                                <Input
                                    clearable
                                    bordered
                                    type='password'
                                    Placeholder="Contraseña" color="success"
                                    id="Password" name="Password" value={values.Password}
                                    onChange={handleInputChange}


                                />
                            </Row>

                            <Row justify='center' align="center" css={{ xs: 4 }} >



                                <Input
                                    clearable
                                    bordered
                                    type='password'
                                    Placeholder="Confirmar Contraseña" color="success"
                                    id="ConfirmarPassword" name="ConfirmarPassword" value={values.ConfirmarPassword}
                                    onChange={handleInputChange}


                                />
                            </Row>
                            <Row justify='center' align="center" css={{ xs: 4 }} >



                                <Input
                                    clearable
                                    bordered
                                    type='Number'
                                    Placeholder="EDAD" color="success"
                                    id="EDAD" name="EDAD" value={values.EDAD}
                                    onChange={handleInputChange}


                                />
                            </Row>
                            <Row justify='center' align="center" css={{ xs: 4 }} >



                                <Input
                                    clearable
                                    bordered
                                    type='Number'
                                    Placeholder="Telefono" color="success"
                                    id="Telefeono" name="Telefono" value={values.Telefono}
                                    onChange={handleInputChange}


                                />
                            </Row>
                            <Row justify="space-around" align="center" css={{ xs: 8 }} >
                                <Button auto ghost color="success" onClick={() => handleSubmitUsuario()} >
                                    Registrar
                                </Button>

                            </Row>
                            <Row justify='center' align="center">

                                <Text color="success" id="modal-title" size={18}>

                                </Text>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>

                            <Button auto ghost color="success" onClick={() => setVisible(false)}>
                                salir
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Grid>

            </Row>

        </form>
        </Card>
        </div>
</Grid.Container>


</div >

)}

</div>      


    )
}