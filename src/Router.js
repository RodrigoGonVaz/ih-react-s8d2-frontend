// ./client/src/Router.js

// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Guitars from './components/Guitars'
import Home from './components/Home'
import Layout from './components/Layout'
import Stores from './components/Stores'
import GuitarState from './context/Guitar/GuitarState'
import StoreState from './context/Store/StoreState'


// 2. FUNCIÓN
const Router = () => {
	
	return (
		<>
            <StoreState>
                <GuitarState>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                {/* localhost:3000/ */}
                                <Route index element={<Home />} />
                                {/* localhost:3000/registro */}
                                <Route path="registro" element={<Register />} />
                                {/* localhost:3000/iniciar-sesion */}
                                <Route path="iniciar-sesion" element={<Login />} />
                                <Route path="guitarras" element={<Guitars />} />
                                <Route path="tiendas" element={<Stores />} />

                            </Route>
                        </Routes>
                    </BrowserRouter>
                </GuitarState>
            </StoreState>
		</>
	)
}


// 3. EXPORTACIÓN
export default Router