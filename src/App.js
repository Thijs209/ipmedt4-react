import React from "react";
import axios from "axios";

class App extends React.Component{
    state = { data: "", calories: ""}

    makeApiCall = () =>{
        console.log("ja")
        axios.get('http://127.0.0.1:8000/api/exercise').then(res => {
            console.log(res.data)
            this.setState({
                data: res.data.name,
                calories: res.data.calories
            })
        })
    }

    render(){
        if(this.state.data == ""){
            this.makeApiCall()
        }
        return(
            <article>
                <p>{this.state.data} {this.state.calories}</p>
            </article>
        )
    }
}

export default App