import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import Search from "../components/Search"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { TiWeatherPartlySunny } from "react-icons/ti"

export default function Searched() {

    const params = useParams()
    const [weather, setWeather] = useState(null)



    useEffect(() => {
        const searched = async (name) => {
            const data = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${name}`)
            console.log(data.data)
            setWeather(data.data)

        }
        searched(params.search)
    }, [params.search])

    return (
        <Bg className="bg "  >

            {
                weather && (
                    <motion.div animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={((weather.current.temperature > 25) ? "app humid" : "app")} >
                        <Nav>
                            <TiWeatherPartlySunny />
                            {/* <br /> */}
                            <Logo to={"/"} >JOHNSON'S <br /> weather app</Logo>
                        </Nav>
                        <div className="search">
                            <Search />
                        </div>
                        <h2 >{weather.location.name}</h2>
                        <h1>{weather.current.temperature}°<span>C</span> </h1>


                        <h3>{weather.current.weather_descriptions}</h3>
                        <br />
                        <br />
                        <h3 className="h3"> {weather.location.localtime}</h3>
                    </motion.div>
                )
            }
        </Bg>
    )
}


const Bg = styled.div`
.app{
    min-height: 100vh;
    background: linear-gradient(  transparent, rgba(0,0,0,1)  ), url("/img_5.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* animation: opacity 4s ease-out; */
  transition:  .4s ease-out;
    

}
.app.humid{
    background: linear-gradient(  transparent , rgba(0,0,0,1) ), url("/img_3.jpg");
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
    span{
        font-size: 30px;
    }
    .h3{
font-weight: 300;
font-size: 13px;
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