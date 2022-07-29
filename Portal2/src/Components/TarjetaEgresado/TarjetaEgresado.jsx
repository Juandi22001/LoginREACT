import { useForm } from "../../hooks/useForm";

import { Pagination, Grid, useModal, Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import VerMaestria from "./VerMaestria";
import { useBienvenida } from '../../hooks/UseBienvenenida';

export const TarjetaEgresado = () => {


    const { auth } = useContext(AuthContext)
    const { setVisible, bindings } = useModal();
    const { Desloggear, MoverPagos } = useBienvenida()

    const [vista, setvista] = useState(1);

    const [selectedSize, setSelectedSize] = useState("md");

    const { values, handleInputChange } = useForm({

        pagina: 0,

        ruta: '',









    });



    useEffect(() => {
        console.log("pagina", values.pagina)



    });
    return (
        <div>



            {

                vista === 1 ?
                    <>
                        <Grid.Container value={vista} gap={2} justify="flex-start">







                            <Grid xs={8} sm={5}>


                                <VerMaestria></VerMaestria>






                            </Grid>









                        </Grid.Container>

                    </>

                    :
                    (<h3> </h3>)

            }   {

                vista === 2 ?
                    <>
                        <Grid.Container value={vista} gap={2} justify="flex-start">




|


                            <Grid xs={8} sm={6}>


                                <VerMaestria></VerMaestria>






                            </Grid>











                        </Grid.Container>

                    </>

                    :
                    (<h3> </h3>)

            }

            <Spacer></Spacer>

            <Grid xs={2}>
                <Pagination name="vista" id="vista" onChange={setvista} value={vista} x color={"success"} total={5} />
            </Grid>
            <footer>


           
</footer>
        </div>



    )
}
