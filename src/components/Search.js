import { FaSearch } from "react-icons/fa"
import styled from "styled-components"
import { useNavigate } from "react-router"
import { useState } from "react"

export default function Search() {

    const navigate = useNavigate()
    const [value, setValue] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        navigate("/" + value)
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch onClick={submitHandler} />
                <input type="text" placeholder="Search other countries" onChange={(e) => setValue(e.target.value)} />
            </div>
        </FormStyle>
    )
}


const FormStyle = styled.form`
/* margin: 0rem 20rem; */
position: relative;
div{
    width: 100%;
}
input{
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
    width: 100%;
}
input::placeholder{
    color: #eee;
    font-weight: 200;
    font-size: 20px;
}
svg{
    position: absolute;
    top: 40%;
    left:  88%;
    transform: translate(100%, -50%);
    color: white;
    z-index: 1;
    cursor: pointer;
    transform: scale(1);
    transition: all 0.4s ease;
}
svg:hover{
    transform: scale(1.5);
}
`
