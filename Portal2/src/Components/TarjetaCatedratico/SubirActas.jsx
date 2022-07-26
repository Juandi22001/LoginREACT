import { Card, Grid, Text, Collapse, Button, Modal, useModal, Spacer, Image, Row, Input } from "@nextui-org/react";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useBienvenida } from "../../hooks/UseBienvenenida";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { green } from '@mui/material/colors';
export default function SubirActas() {
    const { auth } = useContext(AuthContext)
    const { setVisible, bindings } = useModal();
    const { Desloggear, Mover,MoverActas } = useBienvenida()
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


        <Card css={{ p: "$8", mw: "400px" }}>
            <Card.Header >

                <Collapse.Group >
                    <Collapse title={

                        <>
                            <div class="">
                                <Grid xs={4} sm={11} justify='center' align="center">
                                    <AssignmentIcon fontSize="large"  sx={{ fontSize: 70 ,color: green[800]}} />
                                </Grid>
                                <Grid xs={4} sm={3} justify='center' align="center">
                                    <Text
                                        h1
                                        size={40}
                                        css={{
                                            width: '300px', textGradient: "85deg, $green800 -20%, $gray800 100%", padding: '$2 $2'
                                        }}
                                        weight="bold"
                                    >
                                        Actas

                                    </Text>
                                </Grid>

                            </div>       <Card.Divider />

                        </>


                    }
                    >
                        <Card.Body css={{ p: 0, justifyItems: "flex-start", padding: '$2 $3' }}>

                            <div class="textoCard">
                                <Text  color="success" css={{ lineHeight: "$xs", padding: '$2 $3' }}>
                                    Portal designado para poder realizar
                                    todos los pagos pendientes ,  que posee como usuario
                                </Text>


                                <Spacer y={1} />


                            </div>


                        </Card.Body>
                    </Collapse>
                </Collapse.Group>





            </Card.Header>


            <Card.Footer css={{ justifyItems: "flex-start" }}>
                <div class="centerCardFooter">
                <Button color="success" onClick={() => MoverActas()} >Ir a Portal Actas</Button>
                </div>
            </Card.Footer>

        </Card>


    </div>
    );
}
