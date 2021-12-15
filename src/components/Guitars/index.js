
import React, { useEffect, useContext } from 'react'
import GuitarContext from '../../context/Guitar/GuitarContex'


const Guitars = () => {

    //Estado Global
    const ctx = useContext(GuitarContext)
    //console.log(ctx) //{guitars: Array(0), hola: 'mundo'}
    

    const { guitars, hola, changeText, getGuitars } = ctx //<-- destruccturacion

    //Estado Local


    return (
        <>
           <p>Listado de Guitarras</p>
           {/* <p>{hola}</p>

           <button onClick={() => {changeText()}} >Cambiar Texto</button> */}
           <button onClick={() => { getGuitars() }} >
               Listar guitarras
           </button>
           <div>
				<h2>Listado de Guitarras</h2>

				<ul>
					{
						guitars.map((element) => {
							return (
								<li key={element._id}>
									<p>{element.nombre}</p>
									<p>{element.precio}</p>
								</li>
							)
						})
					}
				</ul>

			</div>

        </>
    )
}

export default Guitars
