import { Card, Grid, Text, Link, Button, Modal, useModal, Spacer, Image, Row, Input } from "@nextui-org/react";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";

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
    
                <Card isPressable  css={{ p: "$6", mw: "400px" }} onClick={() => Mover()} >
                    <Card.Header >

                        <Text
                            h1
                            size={40}
                            css={{
                                width: '900px',     textGradient: "45deg, black -20%, black 100%",
                            }}
                            weight="bold"
                        >
                            Maestrias
                        </Text>
                        <Grid xs={15} justify='center' align="center">
                            <SchoolIcon fontSize="large" color="primary" sx={{ fontSize: 65 }} />
                        </Grid>



                    </Card.Header>
                    <Card.Body css={{ p: 5 ,justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                         

                                <Text css={{ lineHeight: "$xs", color: "$blue800" }}>
                                    Accede al portal  de maestrias para  poder verlas todas
                                </Text>
                          

                            <Spacer y={1} />


                            </Row>


                    </Card.Body>

                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Button onClick={() => Mover()} >Ir a Portal Maestrias</Button>
                    </Card.Footer>
                </Card>

         
         

        </div>
    );
}
