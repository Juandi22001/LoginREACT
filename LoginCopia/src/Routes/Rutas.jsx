import React from 'react';

import { Routes, Route } from "react-router-dom"
import { Bienvenida } from '../pages/Bienvenida';
import { UserRouter } from './UserRouter';
export const Rutas = () => {
    return (

        <div >
            <div >
                <div>
                    <Routes>
               
                        
                        <Route path="/" element={<Bienvenida />} />
                        <Route path="/prueba" element={<UserRouter/>} />

                        <Route path="*" element={<h>La página no existe</h>} />
                    </Routes>
                </div>
            </div>
        </div>

    );
};