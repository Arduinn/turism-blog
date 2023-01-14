import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
} from 'react-router-dom';

import Home from "../pages/home"
import Navbar from "../components/navbar";
import Posts from "../components/posts"


export default function ApplicationsRoutes(){
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element = {<Home />} path="/"/>
            </Routes>
        </BrowserRouter>
    );
}