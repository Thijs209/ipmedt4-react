import React from "react";
import axios from "axios";

import Home from "./Home";
import Exercise from "./Exercise";
import Navbar from "./components/Navbar";
import Notifications from "./Notifications";
import Footer from "./Footer";

class App extends React.Component {
    state = {video: ""}

    ffChecken = bloeb => {
        const BASE_URL = "localhost:8000/api/exercise/";
    };

    render(){
            return (
                <main>
                    <Navbar />
                    {/* <Aanmeld onSubmit={this.ffChecken} /> */}
                    <Router>
                        <Switch>
                            <Route exact path="/profiel" component={Profile}/>
                            <Route exact path="/scoreboard" component={Scoreboard}/>
                            <Route exact path="/notificatie" component={Notifications}/>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/oefening" component={Exercise}/>


                            <Route path="/register">
                                {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
                            </Route>
                            <Route path="/login">
                                {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
                            </Route>
                            
                        </Switch>
                    </Router>
                </main>
            );
    }
}

export default App;