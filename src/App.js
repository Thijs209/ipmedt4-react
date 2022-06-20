import React from "react";
import axios from "axios";

import Aanmeld from "./Aanmeld";
import Home from "./Home";
import Navbar from "./Navbar";
import Notifications from "./Notifications";

class App extends React.Component {
    state = {page: "home"}

    ffChecken = bloeb => {
        const BASE_URL = "localhost:8000/api/exercise/";
    };
    
    toMessages = () => {
        this.setState({page:'notifications'})
    }

    render(){
        if (this.state.page == "home"){
            return (
                <main>
                    <Navbar />
                    <Home navigation = {this.toMessages}/>
                    {/* <Aanmeld onSubmit={this.ffChecken} /> */}
                </main>
            );
        }else if(this.state.page == "notifications"){
            return (
                <article>
                    <Navbar />
                    <Notifications />
                </article>
            );
        }
        
    }
}

export default App;