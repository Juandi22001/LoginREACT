import { Card, Grid, Text, Link, Button, Modal, useModal, Spacer, Image, Row, Input } from "@nextui-org/react";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { useBienvenida } from '../../hooks/UseBienvenenida';
export default function TarjetaDesAsignaciones() {
    const { auth } = useContext(AuthContext)
    const { setVisible, bindings } = useModal();
    const { Desloggear, MoverAdmisiones,MoverDesAsignacion } = useBienvenida()



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
   <Card isPressable  css={{ p: "$8", mw: "405px" }}>
             <Card.Header >
                    <Text
                        h1
                        size={35}
                        css={{
                            width: '900px',   textGradient: "45deg, $blue600 -20%, $blue600 100%",
                        }}
                        weight="bold"
                    >
                        Desasignaciones
                    </Text>

            
                    <Grid xs={15} justify='center' align="center">
                        <BookmarkRemoveIcon fontSize="large" color="primary" sx={{ fontSize: 65 }} />
                    </Grid>
                </Card.Header>
                <Card.Body css={{ p: 5 ,justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                         

                            <Text css={{ lineHeight: "$xs", color: "$blue400" }}>
                                Realiza aquí tu proceso 
                                de desasignación en línea
                            </Text>
                      
                        <Spacer y={1} />


                        </Row>


                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Button onClick={() => MoverDesAsignacion()} >IR</Button>
                </Card.Footer>
            </Card>

         

    </div >
  );
}
/*Fui al baño  */