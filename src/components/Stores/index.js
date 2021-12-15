
import React, { useEffect, useContext } from 'react'
import StoreContext from '../../context/Store/StoreContext'


const Stores = () => {

    //Estado Global
    const ctx = useContext(StoreContext)
    //console.log(ctx) //{guitars: Array(0), hola: 'mundo'}
    

    const { stores, mundo, changeText, getStores } = ctx //<-- destruccturacion

    //Estado Local


    return (
        <>
           <p>Listado de Stores</p>
           {/* <p>{mundo} </p>

           <button onClick={() => {changeText()}} >Cambiar Texto</button> */}
           <button onClick={() => { getStores() }} >
               Listar de Tiendas
           </button>
           <div>
				<h2>Listado de Tiendas</h2>

				<ul>
					{
						stores.map((element) => {
							return (
								<li key={element._id}>
									<p>{element.domicilio}</p>
									<p>{element.telefono}</p>
								</li>
							)
						})
					}
				</ul>

			</div>

        </>
    )
}

export default Stores
