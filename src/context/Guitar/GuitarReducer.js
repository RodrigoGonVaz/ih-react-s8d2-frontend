

const reducer = (globalState, action) => {
    switch (action.type) {

        case "GET_GUITARS":
            return {
                ...globalState,
                guitars: action.payload //action = dispatch
            }

        case "CHANGE_TEXT":
            return {
                ...globalState,
                hola: action.payload //action = dispatch
            }



        default:
            return globalState
    }
}

export default reducer