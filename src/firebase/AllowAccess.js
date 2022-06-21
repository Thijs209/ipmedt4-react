import React, {useState} from "react";
import Firebase, {fetchToken} from "./Firebase";

function AllowAccess () {
        const [isTokenFound, setTokenFound] = useState(false);
        fetchToken(setTokenFound);
}

export default AllowAccess