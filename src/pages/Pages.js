import { Route, Routes } from "react-router";
import Home from "./Home";
import Searched from "./Searched";


export default function Pages() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/:search" element={<Searched />} />
            </Routes>

        </div>
    )
}

