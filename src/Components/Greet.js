import React from 'react'

function Greet(props)
{
    const {Name,profileName}=props
    return<h1>{Name} is {profileName}</h1>
}

// const Greet=props=>{
//     console.log(props);
// return <h1>{props.Name}</h1>
// }
export default Greet