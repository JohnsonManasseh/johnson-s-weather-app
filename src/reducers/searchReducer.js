const initialState = {
    location: "",
    temperature: "",
    condition: "",
    localtime: ""
}


const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_WEATHER":
            return {

                location: action.payload.location,
                temperature: action.payload.temperature,
                condition: action.payload.condition,
                localtime: action.payload.localtime,

            }

        case "RESET_WEATHER":
            return {
                location: "",
                temperature: "",
                condition: "",
                localtime: ""
            }
        default:
            return state
        //  {
        //     location: "",
        //     temperature: "",
        //     condition: "",
        //     localtime: "",
        // }
    }
}
export default searchReducer