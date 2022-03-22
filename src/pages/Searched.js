import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import Search from "../components/Search"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { TiWeatherPartlySunny } from "react-icons/ti"
import { useDispatch, useSelector } from "react-redux"
import { searchWeather } from "../actions/searchAction"
import { getCurrentDate } from "../components/currentDate"
import Chart from "../components/Chart"
import Modal from "../components/Modal"

export default function Searched() {



    const params = useParams()
    // const [weather, setWeather] = useState(null)
    const dispatch = useDispatch()
    const weather = useSelector(state => state.search)
    console.log(weather)

    const [modal, showModal] = useState(false)


    const handleClose = () => {
        showModal(false)
    }
    const handleOpen = () => {
        showModal(true)
    }

    // let date = new Date('6/29/2011 4:52:48 PM UTC');
    // date.toString() // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
    // useEffect(() => {
    //     const searched = async (name) => {
    //         const data = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${name}&aqi=no`)
    //         console.log(data.data)
    //         setWeather(data.data)

    //     }
    //     searched(params.search)
    // }, [params.search])

    useEffect(() => {



        dispatch(searchWeather(params.search))
        console.log(getCurrentDate())
    }, [params.search])



    return (



        <Bg className="bg "  >
            {modal &&
                <Modal handleClose={handleClose} weather={weather} />
            }


            <div className={!weather.location ? "app error" : weather.temperature > 25 ? "app humid" : "app"} >
                <Nav to={"/"} >
                    <TiWeatherPartlySunny />
                    <Logo to={"/"} >JOHNSON'S <br /> weather app</Logo>
                </Nav>
                <div className="search">
                    <Search />
                </div>
                {!weather.location ? (<div className="error">
                    <h2 >Sorry, No data found</h2>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* <h1>{weather.temperature}°<span>C</span> </h1>
                        <h3>{weather.condition}</h3>
                        <br />
                        <br />
                        <h3 className="h3"> {weather.localtime}</h3> */}
                    {/* <h2>{date()}</h2> */}
                </div>) : (
                    <div>
                        <h2>{weather.location}</h2>
                        <h1>{weather.temperature}°<span>C</span> </h1>
                        <h3>{weather.condition}</h3>
                        <br />
                        <br />
                        <h3 className="h3"> {getCurrentDate()}</h3>
                        <br />

                        <br />
                        <div className="flex">
                            <div className="container1">
                                <h5>Yesterday</h5>
                                <br />
                                <h3 className="h3">{weather.temperature}°C</h3>
                            </div>
                            <div className="container2">
                                <h5>1 day back</h5>
                                <br />
                                <h3 className="h3">{weather.temperature}°C</h3>
                            </div>
                            <div className="container3">
                                <h5>2 days back</h5>
                                <br />
                                <h3 className="h3">{weather.temperature}°C</h3>
                            </div>
                        </div>
                        <br />
                        <div className="button">
                            <button onClick={handleOpen} >Previous data</button>
                        </div>
                        {/* <h2>{date()}</h2> */}
                    </div>
                )}

            </div>
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
  button{
      background-color: #0b131c;
  }
    

}
.app.humid{
    background: linear-gradient(  transparent , rgba(0,0,0,1) ), url("/img_3.jpg");
    button{
        background-color: #311209;
    }
    button:hover{
        background-color: #0e0c0a9b;
    }
    /* animation: opacity 4s ease-out; */
}
.app.error{
    background: linear-gradient( #695a0867  , rgba(0,0,0,1) ), url("/img_6.jpg");
    /* background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%; */
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

    h5{
        color: white;
    font-weight: 400;
    letter-spacing: 1px;
    }
    span{
        font-size: 30px;
    }
    .h3{
font-weight: 300;
font-size: 13px;
letter-spacing: 2px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
.search{
    padding-bottom: 8rem;
}
   

}
button{
    background-color: #0e0c0a;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all .4s ease;
  border-radius: 16px;
}
button:hover{
    background-color: #0e0c0a9b;
}
.flex{
    display: flex;
    flex-direction: initial;
    width: 600px;
    justify-content: space-between;
    cursor: pointer;
    
}
/* .flex:hover{
    background: rgba(255, 255, 255, 0.424);
} */
.container1, .container2, .container3{
    border: none;
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    transition: all .4s ease;
    /* width: 100%; */
    .h3{
        color: white;
        font-weight: 100;
        letter-spacing: 5px;
        font-size: 20px;
        text-transform: uppercase;
    }

}
.container1:hover, .container2:hover, .container3:hover{
    background: rgba(255, 255, 255, 0.294);
}

h5{
    color: white
}
.button{
    margin-right: 21px;
}
.error{
    padding-top: 20px;
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