import { Card, Grid, Text, Collapse, Button, Modal, useModal, Spacer, Image, Row, Input } from "@nextui-org/react";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { yellow } from '@mui/material/colors';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { useBienvenida } from '../../hooks/UseBienvenenida';
export default function TarjetaDesAsignaciones() {
    const { auth } = useContext(AuthContext)
    const { setVisible, bindings } = useModal();
    const { Desloggear, MoverAdmisiones, MoverDesAsignacion } = useBienvenida()



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
    useEffect(() => {

        console.log("auth", auth)


    });


    return (
        <div >


            <Card css={{ p: "$8", mw: "400px" }}  >
                <Card.Header >

                    <Collapse.Group >
                        <Collapse title={

                            <>
                                <div class="">
                                    <Grid xs={4} sm={11} justify='center' align="center">
                                        <BookmarkRemoveIcon fontSize="large" color="success" sx={{ fontSize: 70, color: yellow[800] }} />
                                    </Grid>
                                    <Grid xs={4} sm={3} justify='center' align="center">
                                        <Text
                                            h1
                                            size={35}
                                            css={{
                                                width: '300px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                                            }}
                                            weight="bold"
                                        >
                                            Desasignaciones

                                        </Text>
                                    </Grid>
                                  
                                </div>

                            </>


                        }
                        >
                            <Card.Body css={{ p: 0, justifyItems: "flex-start", padding: '$2 $3' }}>

                                <div class="textoCard">
                                    <Text color="warning" css={{ lineHeight: "$xs", padding: '$2 $3' }}>

                                        Realiza tu proceso de desasignación en línea
                                    </Text>


                                    <Spacer y={1} />


                                </div>


                            </Card.Body>
                        </Collapse>
                    </Collapse.Group>





                </Card.Header>


                <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <div class="centerCardFooter">
                        <Button color="black" onClick={() => MoverDesAsignacion()} >Ir a Portal Desasignación</Button>
                    </div>
                </Card.Footer>
            </Card>


        </div>
    );
}
/*Fui al baño  */