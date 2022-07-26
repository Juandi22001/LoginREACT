import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useBienvenida } from '../hooks/UseBienvenenida';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Input, Grid, Row, Button, Text, Link, Modal, useModal, Spacer } from "@nextui-org/react";
import Divider from '@mui/material/Divider';
import Swal from 'sweetalert2'
const BarDown = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { Mover, Desloggear } = useBienvenida()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const Salir = () => {
        Swal.fire({
            title: '¿Desea Salir del sistema?',
            text: " ya no podra regresar",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si salir'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Salir',
                    'Usted esta saliendo del sistema.',
                    'success'


                )
                Desloggear()
            }

        })

    };
    const IrSistema1 = () => {
        Mover()
    };
    return (
      
           
            <div >

            <Grid xs={4} sm={6} borderWeights={2}> 
                <Toolbar disableGutters>


                    <Box sx={{ flexGrow: 1, display: { xs: '20', md: '8px' } }}>


                        <Text
                            h1
                            size={20}
                            css={{
                                textGradient: "45deg, $blue700 -20%, $blue700 100%",
                            }}
                            weight="bold"
                        >
                            © Universidad del Valle de Guatemala 2022
                        </Text>
                        

                    </Box>






                </Toolbar>
                </Grid>
                
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid xs={4} sm={6} borderWeights={2}> 
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 0.5, display: { xs: '41', md: '100px' } }}>


                        <Text
                            h1
                            size={18}
                            css={{
                                textGradient: "45deg, $blue700 -20%, $blue800 100%",
                            }}
                            weight="bold"
                        >
                            18 AV. 11-95 ZONA 15, VISTA HERMOSA III.
                            GUATEMALA, GUATEMALA. 01015
                            PBX: 2507-1500 / 2364-0336
                        </Text>

                    </Box>






                </Toolbar>
                </Grid>
                </div>
         
   
    );
};
export default BarDown;

