import axios from 'axios'
import {toast} from 'react-toastify';
import React, { useEffect } from 'react'
import HeaderComponent from './HeaderComponent';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';



const UpdatePage=(props)=>{
    const[state,setState]=useState({
        userId:'',
        userName:'',
        email:''

    } 
    );
    console.log(props);
    const history = useHistory();
const changeHandler=e => {
    setState({[e.target.name]:e.target.value});

}

// useEffect(()=>{
//     const update=async ()=>{
//         setLoading(true);
//         const res=await axios.put("https://localhost:44380/api/Values?userId=",state.userId,state)
//         .then(response =>{
//             console.log(response)
//             toast.success('sucessfully Updated',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
          
            
//         })
//         .catch(error =>{
//             console.log(error)
//             toast.error('Server is down',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
//         })
//         setState(res.data);
//     }
//     update();
// },[]);









 const submitHandler=e =>{
        
    e.preventDefault()
    console.log(state)
    axios.put("https://localhost:44380/api/Values?userId="+state.userId,state)
    .then(response =>{
        console.log(response)
        toast.success('sucessfully Updated',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
      
        
    })
    .catch(error =>{
        console.log(error)
        toast.error('Server is down',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
    })
   
  }
  const back=()=>{
    history.push('/MainGet');
  }
  
  
   
    return(
     
        <div>
          <HeaderComponent/>
          <br/>
          <br/>
          <br/>
          <div style={{backgroundImage: 'url(' + require('../Assets/bg1.jpg') + ')'}} className="bg">
          </div>
          <div style={{backgroundImage: 'url(' + require('../Assets/Logo.jpg') + ')'}} className="Logo">
          </div>
          <div className="wrapper fadeInDown">
             <div id="formContent">
            
                 <div className="fadeIn first">
  
                  </div>
                  <div id="formFooter" bgcolor="lightGrey">
               <h5>Update page</h5>
               </div>
  
                
             <form onSubmit={submitHandler}  >
    
                 <div>
                     <input  type="text" name="userId"    value={props.userId} 
                     onChange={changeHandler} 
                     
                    required pattern="[0-9]*" maxLength="2" />
                   
                 </div>
                 <br/>
                
                 <div>
                     <input type="text" name="userName" value={props.userName}
                     onChange={changeHandler}
                     pattern="^[a-zA-Z]*$" maxLength="50" required  />
                   
                 </div>
                 <br/>
                 
                 <div>
                     <input type="text" name="email" value={props.email}
                     onChange={changeHandler}
                     pattern="[aA-zZ0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  maxLength="50"  required / >
                  
             
                 </div>
                 <br/>
                 
                 <button  className="btn-btn-primary" onClick={back}>Back</button>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button type="submit" className="btn-btn-primary">Update</button>
                
             </form>
               <br/>
         
              
            </div>
            </div>
            <Footer/>
    
        </div>
  
    );
  }


  export default UpdatePage;