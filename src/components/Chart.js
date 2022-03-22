import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts'

export default function Chart() {

    const pdata = [
        {
            id: 1,
            name: "1 day back",
            student: 43,
            fees: 56
        },
        {
            id: 2,
            name: "2 day back",
            student: 89,
            fees: 67
        },
        {
            id: 3,
            name: "3 day back",
            student: 45,
            fees: 67
        },
        {
            id: 4,
            name: "4 day back",
            student: 78,
            fees: 90
        },
        {
            id: 5,
            name: "5 day back",
            student: 67,
            fees: 57
        }
    ]

    return (
        <div>Chart
            <ResponsiveContainer width="100%" aspect={3} >
                <LineChart data={pdata}>
                    <XAxis dataKey="name" interval="preserveStartEnd" />
                    <Line dataKey="student" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

