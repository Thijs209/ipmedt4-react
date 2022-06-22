import React from "react";
import axios from "axios";

import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

class App extends React.Component {
    state = {video: ""}

    ffChecken = bloeb => {
        const BASE_URL = "localhost:8000/api/exercise/";
    };

    render(){
        return (
            <html>
                <Navbar />
                <Home />
                {/* <Footer /> */}
            </html>
        );
    }
}

export default App;