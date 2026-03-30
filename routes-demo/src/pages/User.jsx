import React from "react";
import { useParams } from "react-router-dom";


function USerPage()
{
    const {name} = useParams();
    return(
        <h1>Welcome {name}, This is the User Page</h1>
    )
}

export default USerPage;