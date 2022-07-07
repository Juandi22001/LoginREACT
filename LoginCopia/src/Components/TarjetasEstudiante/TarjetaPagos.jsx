import { Card, Grid, Text, Link, Button, Modal, useModal, Spacer, Image, Row, Input } from "@nextui-org/react";
import { AuthContext } from '../../Context/AuthContext';
import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import './TarjetaEstudiante.css'
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
            
        <Card isPressable  css={{ p: "$6", mw: "400px" }}>
                <Card.Header >
                    <Text
                        h1
                        
                        size={50}
                        css={{
                            width: '900px',textGradient: "45deg, $blue600 -20%, $blue600 100%",
                        }}
                        weight="bold"
                    >
                       Pagos


                    </Text>


                    <Grid xs={15} justify='center' align="center">
                        <AttachMoneyIcon fontSize="large" color="primary" sx={{ fontSize: 65 }} />
                    </Grid>

                </Card.Header>
                <Card.Body css={{ p: 5, justifyItems: "flex-start" }}>

                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text css={{ lineHeight: "$xs", color: "$blue400" }}>
                            Portal designado para poder realizar todos los pagos pendientes ,  que posee como usuario
                        </Text>


                        <Spacer y={1} />


                    </Row>


                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Button onClick={() => MoverPagos()} >Ir al portal de pagos</Button>
                </Card.Footer>
            </Card>

        </div>
    );
}
