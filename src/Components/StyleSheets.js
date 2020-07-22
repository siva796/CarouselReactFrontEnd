import React, { Component } from 'react'
import './myStyles.css'



function StyleSheets(props)
{
 let className=props.primary?'primary':''
    return(
        <h1 className={`${className} font-xl`}>Style Sheets</h1>
    )    
}
     


export default StyleSheets