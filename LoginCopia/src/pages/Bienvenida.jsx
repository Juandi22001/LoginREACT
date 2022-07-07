import { useForm } from "../hooks/useForm";
import { Pestaña } from "../hooks/UsePestaña";
import { TarjetaCatedratico } from "../Components/TarjetaCatedratico/TarjetaCatedratico";
import { TarjetasEstudiantes } from "../Components/TarjetasEstudiante/TarjetasEstudiantes";
import { Input, Grid, Row, Button, Text, Link, Modal, useModal, Spacer } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useBienvenida } from '../hooks/UseBienvenenida';
import { TarjetaEgresado } from "../Components/TarjetaEgresado/TarjetaEgresado";
import Barra from "../Components/AppBar";

import { blue } from '@mui/material/colors';
export const Bienvenida = () => {


  const [pestañasTotales, setPestañasTotales] = useState([])
  const { auth } = useContext(AuthContext) 

  const [cargarPestaña,] = useState(false)

  //  const {LLenarPestaña, pestañasTotales } = Pestaña()
  const [value, setValue] = useState('1');
  const [page, setPage] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let pestañas = []
  const borrar = () => {


  }
  const [selectedSize, setSelectedSize] = useState("md");

  const { values, handleInputChange } = useForm({

    pagina: 0,

    ruta: '',









  });
  useEffect(() => {

    

    LLenarPestaña()
  //  console.log(auth.roles)

    
    console.log("PESTAÑAS", pestañasTotales)
  }, [cargarPestaña]);

  const LlenarEstudiante = () => {

    if (auth.Estudiante == true) {

      const pestañaUnica = {

        "nombre": "Estudiante", "valor": "2"
      }

      pestañas.push(pestañaUnica)







    }



  }
  const LLenarCatedratico = () => {
    if (auth.Catedratico == true) {
      const pestañaUnica = {

        "nombre": "Catedratico", "valor": "3"
      }

      pestañas.push(pestañaUnica)







    }


  }


  const LLenarEgresado = () => {
    if (auth.Egresado == true) {
      const pestañaUnica = {

        "nombre": "Egresado", "valor": "4"
      }

      pestañas.push(pestañaUnica)







    }


  }
  const LLenarPestaña = () => {

    setPestañasTotales([])
    LlenarEstudiante()

    LLenarCatedratico()
    LLenarEgresado()
    setPestañasTotales(pestañas)
    pestañas = []


  }

  return (
    <div >

      <Barra></Barra>

 
      <Grid.Container gap={1} justify="flex-start">
      <Grid xs={2} sm={4}>
        </Grid>

        <Grid xs={12} sm={11.5} align="center">

          <Box sx={{
            width: '2050px',padding: '10px',
            height: 2000, typography: 'body1'
          }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList 
                
                sx={{
                  width: '360px',padding: '10px',
                  height: 0, typography: 'body1',margin: 'auto'
                }}
                
                
                onChange={handleChange} aria-label="lab API tabs example">

                  {



                    auth.roles.map((item, i) => (



                      <Tab label={item.nombre} value={item.valor} />





                    ))


                  }

      

                </TabList>
              </Box>
              <TabPanel value="1">   <Text
                h1
                size={20}
                css={{
                  textGradient: "45deg, $blue600 -20%, $blue900 100%",
                }}
                weight="bold"
              >
                Escoja la opcion que desee
              </Text></TabPanel>
              <TabPanel value="2">   <TarjetasEstudiantes></TarjetasEstudiantes>
              </TabPanel>
              <TabPanel value="3">       <TarjetaCatedratico></TarjetaCatedratico></TabPanel>
              <TabPanel value="4"> <TarjetaEgresado></TarjetaEgresado></TabPanel>
            </TabContext>
          </Box>

        </Grid>


      </Grid.Container>
    </div>



  )
}
/*

        <Modal
          scroll
          width="600px"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          {...bindings}
        >
          <Modal.Header>


            <Text
              h1
              size={140}
              css={{
                textGradient: "45deg, $green600 -20%, $green600 100%",
              }}
              weight="bold"
            >
              {auth.Nombre}
            </Text>

          </Modal.Header>
          <Modal.Body align="center">


            <Row justify='center' align="center">
              <Text color="success" id="modal-title" size={18}>
                Edad                 :
              </Text>

              <Text color="success" id="modal-title" size={18}>

                {auth.Edad}
              </Text>
            </Row>
            <Row justify='center' align="center">
              <Text color="success" id="modal-title" size={18}>
                Telefono                      :
              </Text>
              <Text color="success" id="modal-title" size={18}>
                {auth.Telefono}
              </Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>

            <Button auto ghost color="success" onClick={() => setVisible(false)}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>



        <Grid xs={6}>











        </Grid>



*/