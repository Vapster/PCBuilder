const initialState = {
    Specifications: {
    }
}

const Specifications = (state = initialState, action) => {

    if (action.type === "ADD_SPECS"){
        console.log(action.specs)
        return({
            Specifications: action.specs
        })
    }

    return state;
}

export default Specifications;