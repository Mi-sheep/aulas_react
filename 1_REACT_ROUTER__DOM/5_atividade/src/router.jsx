import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Welcome from "./pages/Welcome"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/hello" element={<Home />} />
        </Routes>
    )
}

export default Router