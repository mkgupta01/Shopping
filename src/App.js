import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Clothes from "./pages/Clothes";
import Electronics from "./pages/Electronics";
import RailwayTickets from "./pages/RailwayTIckets";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/clothes" element={<Clothes/>}/>
                <Route path="/electrnoics" element={<Electronics/>}/>
                <Route path="/railwaytickets" element={<RailwayTickets/>}/>
            </Routes>
        </Router>
    );
}

export default App;