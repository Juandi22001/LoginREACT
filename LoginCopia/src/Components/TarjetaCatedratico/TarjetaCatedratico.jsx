import { useForm } from "../../hooks/useForm";

import { Pagination, Grid, Row, Button, Text, Link, Modal, useModal, Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import SubirActas from "./SubirActas";
import { useBienvenida } from '../../hooks/UseBienvenenida';
import TarjetaTramites from "./TarjetaTramites";


export const TarjetaCatedratico = () => {


    const [vista, setvista] = useState(1);
    const { auth } = useContext(AuthContext)
    const { setVisible, bindings } = useModal();
    const { Desloggear, MoverPagos } = useBienvenida()
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const [selectedSize, setSelectedSize] = useState("md");

    const { values, handleInputChange } = useForm({

        pagina: 0,

        ruta: '',









    });
    useEffect(() => {

        console.log(page)
        if (page == 1) {



        }


    });
    return (

        <div>


            {vista === 1 ?

                <>

                    <Grid.Container gap={2} justify="flex-start">





                        <Grid xs={8} sm={6}>

                            <TarjetaTramites></TarjetaTramites>





                        </Grid>




                        <Grid xs={8} sm={6}>



                            <SubirActas></SubirActas>





                        </Grid>

                        <Grid xs={8} sm={6}>
                            <TarjetaTramites></TarjetaTramites>

                        </Grid>





                        <Grid xs={8} sm={4}>





                        </Grid>









                    </Grid.Container>
                </>

                : (<h3> </h3>)}



            {vista === 2 ?

                <>

                    <Grid.Container gap={2} justify="flex-start">





                        <Grid xs={8} sm={6}>

                            <TarjetaTramites></TarjetaTramites>





                        </Grid>





                    </Grid.Container>
                </>

                : (<h3> </h3>)}
            <Spacer></Spacer>

            <Grid xs={2}>
                <Pagination name="vista" id="vista" onChange={setvista} value={vista} x color={"primary"} total={5} />
            </Grid>

        </div>


    )
}
