import { Card, Grid, Text, Collapse
    , Button, Modal, useModal, Spacer, Image, Row, Input } from "@nextui-org/react";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { green } from '@mui/material/colors';
import SchoolIcon from '@mui/icons-material/School';
import { useBienvenida } from "../../hooks/UseBienvenenida";
export default function VerMaestria() {
    const { auth } = useContext(AuthContext)
    const { setVisible, bindings } = useModal();
    const { Desloggear, Mover } = useBienvenida()
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
                                    <SchoolIcon fontSize="large"  sx={{ fontSize: 70 ,color: green[600]}} />
                                </Grid>
                                <Grid xs={4} sm={3} justify='center' align="center">
                                    <Text
                                        h1
                                        size={40}
                                        css={{
                                            width: '300px', textGradient: "45deg, $green600 -20%, $green600 100%", padding: '$2 $2'
                                        }}
                                        weight="bold"
                                    >
                                        Maestrias

                                    </Text>
                                </Grid>
 <Card.Divider />
                            </div>

                        </>


                    }
                    >
                        <Card.Body css={{ p: 0, justifyItems: "flex-start", padding: '$2 $3' }}>

                            <div class="textoCard">
                                <Text  css={{ lineHeight: "$xs", color: "$green800", padding: '$2 $3' }}>
                                    Ve todas las maestrias disponibles y escoge tu favorita
                                </Text>


                                <Spacer y={1} />


                            </div>


                        </Card.Body>
                    </Collapse>
                </Collapse.Group>





            </Card.Header>


            <Card.Footer css={{ justifyItems: "flex-start" }}>
            <div class="centerCardFooter">

                <Button color="success" onClick={() => VerMaestria()} >Ir a Portal Tramites</Button>
                </div>
            </Card.Footer>
        </Card>


    </div>
    );
}
