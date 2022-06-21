import React from "react";
import axios from "axios";

class Profile extends React.Component{
    state = { user: ""}

    makeApiCall = () =>{
        const BASE_URL = 'http://localhost:8000/api/profiel';
        axios.get(BASE_URL).then(res => {
            this.setState({
               user:res.data 
            })
            console.log(res.data)
        });
    }

    render () {
        if (this.state.user == "") {
            this.makeApiCall()
        }
        return(
            <article>
                <p>{this.state.user.email}</p>
            </article>
        )
    }
}

export default Profile;