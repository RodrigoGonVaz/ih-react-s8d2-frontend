
import { useReducer } from "react";
import axiosClient from "../../config/axios";
import StoreContext from "./StoreContext";
import StoreReducer from "./StoreReducer"




const StoreState = (props) => {

    //Todo lo que tenga que ver con Storeras se guarda en este estado global
    //1.Initial State
        //Que se ejecute en todos los componentes
    const initialState = {
        stores: [],
        mundo: "hola"
    }


    //2. Config de reducer y creacion del estado global- uso del Hook
    const [globalState, dispatch] = useReducer(StoreReducer, initialState)


    //3.Funciones de cambio en estado Global
    const changeText = () => {

        //Este objeto se le conoce como action en Reducer
        dispatch({
            type: "CHANGE_TEXT",
            //datos reales que cambia el estado global
            payload: "Estoy aprendiendo context sin morir stores!"
        })

    }

    const getStores = async() => {
        //console.log("Obteniendo Guitarras....") <-- al darle click en comp./guit/index
        const res = await axiosClient.get("stores/readall")
        console.log(res)
		
        const list = res.data.data
        console.log(list) //[{…}] {_id: '61b797aabd996d48a49444bd', nombre: 'Guitarra Heroku', precio: 15000, color: 'Negra con blanco', imagen: 'http://...', …}

		/*dispatch({
			type: "GET_STORES",
			payload: list
		})*/
    }


    //4. Retorno
    return (
        <StoreContext.Provider 
        value={{
            stores: globalState.stores,
            mundo: globalState.mundo,
            changeText,
            getStores
        }} >
                {/* Es la representacion de todos los componentes del router - Outlet(de estado global) */}
            {props.children}


        </StoreContext.Provider>
    )

}

export default StoreState