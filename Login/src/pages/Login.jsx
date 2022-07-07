import { useForm } from "../hooks/useForm";
import Swal from 'sweetalert2'
import { Image } from "@nextui-org/react";

import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
import { useContext } from 'react'
import { useLogin } from "../hooks/useLogin";
import { AuthContext } from "../Context/AuthContext";
export const Login = () => {


    const { submitLogin } = useContext(AuthContext)
    const { CrearUsuario } = useLogin();

    const { setVisible, bindings } = useModal();


    const { values, handleInputChange } = useForm({


        Password: '',
        USER: '',
        showPassword: false,
        Nombre: '',
        USER: '',

        ConfirmarPassword: '',
        EDAD: '',
        Telefono: ''








    });


    const handleLogin = (e) => {




        if (values.USER == '') {

            Swal.fire("Campo User Obligatorio", "Mensaje:", "warning")
        }
        else if (values.Password == '') {

            Swal.fire("Campo Password Obligatorio", "Mensaje:", "warning")
        } else {

            submitLogin(values.USER, values.Password)
        }





    }
    const handleSubmitUsuario = (e) => {




        if (values.Password != values.ConfirmarPassword) {

            Swal.fire("Las contraseñas no coincidem", "Mensaje:", "warning")
        }
        else if (values.USER == '') {

            Swal.fire("Campo USER Obligatorio", "Mensaje:", "warning")
        } else {

            CrearUsuario(values.Nombre, values.USER, values.Password, values.ConfirmarPassword, values.EDAD, values.Telefono)
        }

    }
    const Limpiar = (e) => {

        console.log("aqui?")




        values.Nombre = ''
        values.USER = ''
        values.Password = ''
        values.EDAD = ''
        values.ConfirmarPassword = ''
        values.Telefono = ''

    }

    return (


        <div class="body">


            <Grid.Container gap={1} justify="center" align="center" bordered={2}>

                <Image src="https://github.com/Juandi22001/LoginREACT/blob/main/Imagenes/asignaciones.png?raw=true" width={500}
                    height={200} alt="efe?" />
                <Row justify="center" align="center">







                    <form id="form" >

                        <Grid >

                            <Input
                                bordered
                                labelPlaceholder="Usuario" color="success"
                                id="USER" name="USER" value={values.USER}
                                onChange={handleInputChange}


                            />

                        </Grid>


                        <Grid >

                            <Input
                                id="filled-adornment-password"
                                type='password'
                                bordered
                                color="success" placeholder=" Contraseña"
                                value={values.Password} name="Password" onChange={handleInputChange}


                            />

                        </Grid>

                        <Row justify="space-around" align="center">

                            <Grid css={{ m: 10 }}>
                                <Button auto ghost color="success" onClick={() => handleLogin()} >
                                    Login
                                </Button>
                            </Grid>
                            <Grid>

                                <Text color="success" size={12}>
                                    Eres nuevo?
                                </Text>
                                <Button auto ghost color="success" css={{ m: 1 }} onClick={() => setVisible(true)}  >
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

                </Row>
            </Grid.Container>


        </div >




    )
}
/*

hola como esas 
*/