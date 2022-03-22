import axios from "axios";

export const loadWeather = () => async (dispatch) => {
    const weatherData = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=mumbai&aqi=no`)
    dispatch({
        type: "FETCH_WEATHER",
        payload: {
            location: weatherData.data.location.name,
            temperature: weatherData.data.current.temp_c,
            condition: weatherData.data.current.condition.text,
            localtime: weatherData.data.location.localtime
        }
    })
}



