import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Search from "../components/Search"
import { Link } from "react-router-dom"
import { TiWeatherPartlySunny } from "react-icons/ti"



export default function Home() {

    const [weather, setWeather] = useState(null)


    useEffect(() => {
        const weather = async () => {
            const data = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=mumbai`)
            console.log(data.data)
            setWeather(data.data)
        }
        weather()
    }, [])





    return (
        <Bg className="bg " >

            {
                weather && (
                    <div className={((weather.current.temperature > 25) ? "app humid" : "app")} >
                        <Nav to={"/"} >
                            <TiWeatherPartlySunny />
                            {/* <br /> */}
                            <Logo to={"/"} >JOHNSON'S <br /> weather app</Logo>
                        </Nav>
                        <div className="search">
                            <Search />
                        </div>
                        <h2>{weather.location.name}</h2>
                        <h1>{weather.current.temperature}°<span>C</span> </h1>
                        <h3>{weather.current.weather_descriptions}</h3>
                        <br />
                        <br />
                        <h3 className="h3"> {weather.location.localtime}</h3>
                    </div>
                )
            }
        </Bg>
    )
}


const Bg = styled.div`
.app{
    min-height: 100vh;
    background: linear-gradient(   transparent, rgba(0,0,0,1) ), url("/img_5.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition:  .4s ease-out;
    /* animation: opacity 4s ease-out; */


}
.app.humid{
    background: linear-gradient(  transparent, rgba(0,0,0,1)  ), url("/img_3.jpg");
    /* animation: opacity 4s ease-out; */
}

/* @keyframes opacity {
  from {opacity: 0;}
  to {opacity: 1;}
} */

div{
    h1{
        font-weight: 200;
        color: white;
        font-size: 120px;
       
    }
    h2{
        color: white;
        font-size: 50px;
        font-weight: 600;
    }
    h3{
        color: white;
        font-weight: 300;
        letter-spacing: 5px;
        font-size: 20px;
        text-transform: uppercase;
    }
    .h3{
font-weight: 300;
font-size: 13px;
    }
    span{
        font-size: 30px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
.search{
    padding-bottom: 8rem;
}

}


`
const Logo = styled(Link)`
text-decoration: none;
font-weight: 400;
font-family: 'Josefin Sans', sans-serif;
color: #121D2E;
`
const Nav = styled.div`
display : flex;
justify-content: flex-start;
align-items: center;
position: absolute;
top: 30px;
left: 30px;
svg{
  font-size: 2rem;
  color: #121D2E;
  padding-bottom: 10px;
}`

