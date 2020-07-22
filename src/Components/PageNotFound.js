import React from 'react'
import {useHistory} from 'react-router-dom'
import Error from '../Assets/404Error.jpg'

 function PageNotFound() {
     const history = useHistory();
     const goBack = () =>{
         history.push('/userData');
     }
    return (
        
        <div>
        <div style={{position:"absolute",top:"27%",left:"47%"}}>
        <button onClick={goBack} className="bt btn-primary">go back</button>
        </div>
         <div>
         <img src={Error} alt="" style={{width:"100%",BackgroundSize:"cover",backgroundRepeat:"no-repeat",height:"650px"}}/>
         </div>   
        </div>
        
    )
}
export default PageNotFound