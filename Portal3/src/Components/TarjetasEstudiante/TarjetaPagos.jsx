import { Card, Grid, Text, Collapse, Button, Modal, useModal, Spacer, Image, Row, Input } from "@nextui-org/react";
import { AuthContext } from '../../Context/AuthContext';
import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import './TarjetaEstudiante.css'
import { yellow } from '@mui/material/colors';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useBienvenida } from '../../hooks/UseBienvenenida';
export default function TarjetaPagos() {
    const { auth } = useContext(AuthContext)
    const { setVisible, bindings } = useModal();
    const { Desloggear, MoverPagos } = useBienvenida()



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


            <Card css={{ p: "$8", mw: "400px" }} >
                <Card.Header >

                    <Collapse.Group >
                        <Collapse title={

                            <>
                                <div class="">
                                    <Grid xs={4} sm={11} justify='center' align="center">
                                        <AttachMoneyIcon fontSize="large" color="success"  sx={{ fontSize: 70 ,color: yellow[800]}} />
                                    </Grid>
                                    <Grid xs={4} sm={3} justify='center' align="center">
                                        <Text
                                            h1
                                            size={40}
                                            css={{
                                                width: '300px', textGradient: "45deg, black -20%, black 100%", padding: '$2 $2'
                                            }}
                                            weight="bold"
                                        >
                                            Pagos

                                        </Text>
                                    </Grid>
                                  
                                </div>

                            </>


                        }
                        >
                            <Card.Body css={{ p: 0, justifyItems: "flex-start", padding: '$2 $3' }}>

                                <div class="textoCard">
                                <Text  color="warning" css={{ lineHeight: "$xs", padding: '$2 $3' }}>
                                        Portal designado para poder realizar
                                        todos los pagos pendientes ,  que posee como usuario
                                    </Text>


                                    <Spacer y={1} />


                                </div>


                            </Card.Body>
                        </Collapse>
                    </Collapse.Group>





                </Card.Header>


                <Card.Footer css={{ justifyItems: "flex-center" }}>
                            <div class="centerCardFooter">
                    <Button color="inherit" onClick={() => MoverPagos()} > Ir a Portal Pagos</Button>
                    </div>
                </Card.Footer>
            </Card>


        </div>
    );
}
