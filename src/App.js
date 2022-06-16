import React from "react";
import axios from "axios";

import Aanmeld from "./Aanmeld";
import Home from "./Home";
import Navbar from "./Navbar";

class App extends React.Component {
    state = {video: ""}

    ffChecken = bloeb => {
        const BASE_URL = "localhost:8000/api/exercise/";
    };

    render(){
        return (
            <main>
                <Navbar />
                <Home />
                {/* <Aanmeld onSubmit={this.ffChecken} /> */}
            </main>
        );
    }
}

export default App;