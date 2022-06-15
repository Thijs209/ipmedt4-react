import React from "react";
import axios from "axios";

class App extends React.Component{
    state = { users: ""}

    makeApiCall = () =>{
        console.log("ja")
        axios.get('http://127.0.0.1:8000/api/scoreboard').then(res => {
            console.log(res.data)
            this.setState({
                users: "http://127.0.0.1:8000" + res.data
            })
        })
    }

    render(){
        if(this.state.users == ""){
            this.makeApiCall()
        }
        return(
            <article>
                <p>{this.state.users.email}</p>
            </article>
        )
    }
}

export default App