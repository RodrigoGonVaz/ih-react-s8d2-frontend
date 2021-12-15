

const reducer = (globalState, action) => {
    switch (action.type) {

        case "GET_STORES":
            return {
                ...globalState,
                stores: action.payload //action = dispatch
            }


        case "CHANGE_TEXT":
            return {
                ...globalState,
                mundo: action.payload //action = dispatch
            }

        default:
            return globalState
    }
}

export default reducer