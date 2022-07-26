import { useForm } from "../hooks/useForm";
import Tooltip from '@mui/material/Tooltip';
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
import BarDown from "../Components/BarDown";

import { blue } from '@mui/material/colors';
export const Bienvenida = () => {


  const [pestañasTotales, setPestañasTotales] = useState([])
  const { auth } = useContext(AuthContext)

  const [cargarPestaña,] = useState(false)

  const [bienvenida, setBienvenida] = useState(false)

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

    ruta: ''









  });
  useEffect(() => {


    console.log(auth.element)
    setInterval(set, 500);


    //  console.log(auth.roles)


    console.log("PESTAÑAS", pestañasTotales)
  }, [cargarPestaña]);

  function set() {
    setBienvenida(true)


  }



  return (

    <div class="MenuPortal" >
      <Barra></Barra>
      <Grid.Container gap={1} justify="flex-start">
     
      
        <Grid xs={12} sm={12} align="center">

          <Box sx={{
            width: '2000px', padding: '20px',
            height: 800, typography: 'body1'
          }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList

                  sx={{
                    width: '360px', padding: '10px',
                    height: 0, typography: 'body1', margin: 'auto'
                  }}


                  onChange={handleChange} aria-label="lab API tabs example">

                  {



                    auth.roles.map((item, i) => (



                      <Tab label={item.nombre} value={item.valor}



                      />





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


              <TabPanel value="2">  
              
              
               <TarjetasEstudiantes></TarjetasEstudiantes>   
              <div class="ContFooter">  
        <Grid  xs={12}  sm={24} align="center">
          



          
        <footer>

        <BarDown></BarDown>


        </footer>
        

</Grid>
</div>  
              </TabPanel>
              <TabPanel value="3">          
               <TarjetaCatedratico></TarjetaCatedratico>   
              <div class="ContFooter">  
        <Grid  xs={12}  sm={24} align="center">
          



          
        <footer>

        <BarDown></BarDown>


        </footer>
        

</Grid>
</div>  
              
               </TabPanel> 
              <TabPanel value="4"> 
                
              <TarjetaEgresado></TarjetaEgresado>   
              <div class="ContFooter">  
        <Grid  xs={12}  sm={24} align="center">
          



          
        <footer>

        <BarDown></BarDown>


        </footer>
        

</Grid>
</div>   
        
              
              
               </TabPanel>
            </TabContext>
          
          </Box>
      
        </Grid>
    
    
      </Grid.Container>
  


    </div>)
}




/* 
<div class="body" >



{bienvenida === false ?

<>
<div class="body" >




</div>

</>

: (  <div > <Barra></Barra>

</div>*/