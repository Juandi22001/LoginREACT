import { useForm } from "../hooks/useForm";
import Swal from 'sweetalert2'
import { Image } from "@nextui-org/react";

import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer,Card,Avatar} from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { useLogin } from "../hooks/useLogin";
import { AuthContext } from "../Context/AuthContext";
export const Login = () => {


const { submitLogin } = useContext(AuthContext)
    const { CrearUsuario } = useLogin();
    const { auth } = useContext(AuthContext)
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










<Grid.Container gap={0} justify="center" align="center" bordered={2}>

<div class="centerCard">

<Card  css={{ p: "$7", mw: "350px" }} >

<Card.Header >

<Card.Image


   src="https://github.com/Juandi22001/LoginREACT/blob/main/Imagenes/LogoPortal3.png?raw=true" 

   alt="efe?"   
   css={{ br: "50%" }}
        
        objectFit="cover"
        
        />
        


</Card.Header>





        <form id="form" >
        <Card.Body css={{ p: 0, justifyItems: "center" ,zIndex: 1, top: 5 }}>
            <div class="center">
            <Grid.Container gap={4}>
            <Grid  xs={12} sm={24} align="center">

                <Input
                    clearable
                    labelPlaceholder="Usuario" 
                    id="USER" name="USER" value={values.USER}
                    onChange={handleInputChange}
                    helperText="Porfavor Ingrese su nombre de Usuario"
                  
                />

            </Grid>


            <Grid  xs={12} sm={12} align="center">
             
             
                <Input.Password
                    id="filled-adornment-password"
                    type='password'
                   
                    color="inherit" placeholder=" Contraseña"
                    helperText="Porfavor Ingrese su contraseña"
                    
                    value={values.Password} name="Password" onChange={handleInputChange}


                />

            </Grid>
            </Grid.Container>
            </div>
            </Card.Body>
            <Row justify="space-around" align="center">

                <Grid css={{ m: 10 }}>
                <Button auto ghost  color="inherit"  css={{ m: 1 , color: "$gray800",}} onClick={() => handleLogin()} >
                        Login
                    </Button>
                </Grid>
                <Grid>

                    <Text color="inherit" size={12}>
                        Eres nuevo?
                    </Text>
                    <Button auto ghost  color="inherit"  css={{ m: 1 , color: "$gray800",}} onClick={() => setVisible(true)}  >
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

        <Modal



aria-labelledby="modal-title"
aria-describedby="modal-description"
{...bindings}
>
<div  class="modal">
<Modal.Header  css={{ xs: 2 }}   >

<Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          css={{ size: "$25" }}
          color="success"
          bordered
        />

        

</Modal.Header>
<Modal.Body align="center">



<Row justify='center' align="center" css={{ m: 0 }} >



    <Text
                h1
                size={35}
                css={{
                  textGradient: "45deg, $green600 -20%, $green700 100%",
                }}
                weight="bold"
              > @{auth.USER}
                
              </Text>
              </Row>


    <Grid.Container gap={2} justify="flex-start">
    <Grid xs={4} sm={12} align="center">

  

<Card isPressable  css={{ p: "$2", mw: "300px" }} >
               
                <Card.Body css={{ p: 5, justifyItems: "center" }}>
                    <Row wrap="wrap" justify="space-between" align="center">


                    <Text
                        h1
                        size={18}
                        css={{
                            width: '1000px', textGradient: "45deg, $green600 -20%, $green600 100%",padding: '$2 $2'
                        }}
                        weight="bold"
                    >
                       Nombre
                    </Text>
                        <Text css={{ lineHeight: "$xs", color: "$green800" ,padding: '$2 $2'}}>
                            {auth.Nombre}
                        </Text>


                      


                    </Row>


                </Card.Body>

            </Card>

   </Grid>   <Grid xs={4} sm={12} align="center">

  

<Card isPressable  css={{ p: "$2", mw: "300px" }} >
               
                <Card.Body css={{ p: 5, justifyItems: "center" }}>
                    <Row wrap="wrap" justify="space-between" align="center">


                    <Text
                        h1
                        size={18}
                        css={{
                            width: '1000px', textGradient: "45deg, $green600 -20%, $green600 100%",padding: '$2 $2'
                        }}
                        weight="bold"
                    >
                       Edad
                    </Text>
                        <Text css={{ lineHeight: "$xs", color: "$green800" ,padding: '$2 $2'}}>
                            {auth.Edad}
                        </Text>


                      


                    </Row>


                </Card.Body>

            </Card>

   </Grid>

   <Grid xs={4} sm={12} align="center">

  

<Card isPressable  css={{ p: "$2", mw: "300px" }} >
               
                <Card.Body css={{ p: 5, justifyItems: "center" }}>
                    <Row wrap="wrap" justify="space-between" align="center">


                    <Text
                        h1
                        size={18}
                        css={{
                            width: '1000px', textGradient: "45deg, $green600 -20%, $green600 100%",padding: '$2 $2'
                        }}
                        weight="bold"
                    >
                       Telefono
                    </Text>
                        <Text css={{ lineHeight: "$xs", color: "$green800" ,padding: '$2 $2'}}>
                           5709666
                        </Text>


                      


                    </Row>


                </Card.Body>

            </Card>

   </Grid>
              </Grid.Container>


  

</Modal.Body>
<Modal.Footer>

    <Button auto ghost color="success" onClick={() => setVisible(false)}>
        salir
    </Button>
</Modal.Footer>
</div>
</Modal>
        
</Grid.Container>


</div >

)}

</div>      


    )
}