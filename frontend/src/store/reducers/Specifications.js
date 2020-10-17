const initialState = {
    Specifications: null,
    components: null,
    listOfModels: null,
    sum: 0,
    token: ""
}

const Specifications = (state = initialState, action) => {

    // console.log("from reducer ", state)

    if (action.type === "ADD_SPECS"){
        // console.log("from reducer", state.Specifications)
        return({
            ...state,
            Specifications: action.specs
        })
    }

    if (action.type === "ADD_COMP"){
        // console.log(action.components)
        return({
            ...state,
            components: action.components
        })
    }

    if (action.type === "ADD_LOMO"){
        // console.log(action.specs)
        return({
            ...state,
            listOfModels: action.listOfModels
        })
    }

    if (action.type === "ADD_TKN"){
        // console.log(action.token, "done")
        return({
            ...state,
            token: action.token
        })
    }

    return state;
}

export default Specifications;