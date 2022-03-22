import axios from "axios";

export const searchWeather = (name) => async (dispatch) => {



    const weatherData = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${name}&aqi=no`)
    dispatch({
        type: "SEARCH_WEATHER",
        payload: {
            location: weatherData.data.location.name,
            temperature: weatherData.data.current.temp_c,
            condition: weatherData.data.current.condition.text,
            localtime: weatherData.data.location.localtime
        }
    })
}



export const resetWeather = () => {
    return {
        type: "RESET_WEATHER"
    }
}