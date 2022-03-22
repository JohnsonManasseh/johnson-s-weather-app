import styled from "styled-components"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import { motion } from "framer-motion"

export default function Modal({ handleClose, weather }) {

    const pdata = [
        {
            id: 1,
            name: "1 day back",
            temperature: 29
        },
        {
            id: 2,
            name: "2 days back",
            temperature: 35
        },
        {
            id: 3,
            name: "3 days back",
            temperature: 22
        },
        {
            id: 4,
            name: "4 days back",
            temperature: 20
        },
        {
            id: 5,
            name: "5 days back",
            temperature: 15
        }
    ]

    return (
        <Div1 className="modal-backdrop">
            <motion.div animate={{ scale: 1, transition: { ease: "easeOut", duration: 0.2 } }} initial={{ scale: 0 }} >
                <Div2 className="modal">
                    <h2>Previous records of {weather.location} </h2>
                    {/* Johnson wqdqwddqwdqwdqwdqwdqdqdqwdqihkhlahjclkajlaxjaolicjaso;ijoicjso;icjdscoijscoijscoishj */}
                    <ResponsiveContainer width="100%" aspect={3} >
                        <LineChart data={pdata}>
                            <XAxis dataKey="name" interval="preserveStartEnd" />
                            <YAxis />
                            <Tooltip />
                            <Line type="natural" dataKey="temperature" stroke="red" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                    <button onClick={handleClose}>Close</button>
                </Div2>
            </motion.div>
        </Div1>
    )
}

const Div1 = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.5);
z-index: 1000;

`

const Div2 = styled.div`
h2{
    color: #0e0c0a !important;
        font-size: 25px !important;
        font-weight: 200 !important;
        letter-spacing: 2px;
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
    background-color: #0e0c0ace;
}

padding: 30px;
height: 500px;
    width: 900px;
/* max-width: 480px; */
margin: 200px auto;
background: #fff;
border-radius: 10px;
`



