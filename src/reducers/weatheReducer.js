const initialState = {
    location: "",
    temperature: "",
    condition: "",
    localtime: ""
}


const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_WEATHER":
            return {
                ...state,
                location: action.payload.location,
                temperature: action.payload.temperature,
                condition: action.payload.condition,
                localtime: action.payload.localtime,
            }
        default:
            return { ...state }
    }
}
export default weatherReducer


