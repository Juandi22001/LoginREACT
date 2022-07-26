import { useForm } from "../../hooks/useForm";
import Tarjeta from "./Tarjeta";
import { Pagination, Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import TarjetaPagos from "./TarjetaPagos";
import { useBienvenida } from '../../hooks/UseBienvenenida';

import TarjetaAdmisiones from "./TarjetaAdmisiones";

import TarjetaDesAsignaciones from "./TarjetaDesAsignaciones";
import BarDown from "../BarDown";
export const TarjetasEstudiantes = () => {

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
                    <>       <div class="cards">




                        <Grid xs={8} sm={6}>


                            <TarjetaPagos></TarjetaPagos>







                        </Grid>




                        <Grid xs={8} sm={6}>





                            <Tarjeta></Tarjeta>

                        </Grid>



                        <Grid xs={8} sm={6}>


                            <TarjetaAdmisiones></TarjetaAdmisiones>





                        </Grid>








                        <Grid xs={8} sm={6}>


                            <TarjetaDesAsignaciones></TarjetaDesAsignaciones>






                        </Grid>









                    </div>
                    </>

                    :
                    (<h3> </h3>)

            }   {

                vista === 2 ?
                    <>
                        <Grid.Container value={vista} gap={2} justify="flex-start">







                            <Grid xs={8} sm={5}>


                                <Tarjeta></Tarjeta>






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
