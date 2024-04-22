import { Routes,Route } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/About"
import Layout from "../components/Layout"
function Routing() {
    return (<>
        <Routes>
           <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} /> */}
            </Route>
        </Routes>
    </>)
}

export default Routing