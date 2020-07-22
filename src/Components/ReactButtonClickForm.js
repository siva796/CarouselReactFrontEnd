

import React, { useEffect, useState, Component } from 'react';

import { useForm } from "react-hook-form";
import "./stylescss.css";
import axios from 'axios'
import { useHistory } from 'react-router-dom';





const ReactButtonClickForm = () => {

  const [state, setState] = useState({
    userName:'',
     email:'',
   
  });
 

  const history = useHistory();

  const { handleSubmit, register, errors } = useForm();
  const { userName,email}=state;
 

  // useEffect(()=>{
  //       const fetchPosts=async ()=>{
  //           const res=await axios.post('https://localhost:44380/api/values');
  //           setstate(res.data);
            
  //       }
  //       fetchPosts();
  //   },[]);





 const submitHandler=e =>{
        
    // e.preventDefault();
   
    console.log(state);
    axios.post('https://localhost:44380/api/values',state)
    .then(response =>{
        console.log(response)
        setState({ posts:response.data})
    })
    .catch(error =>{
        console.log(error)
    })
    // history.push('/MainGet');
  }

  
  // const onSubmit = values => {
     
  //   axios.post('https://localhost:44380/api/values',state)
  //     .then(response =>{
  //         console.log(response)
  //         setState({ posts:response.data})
  //     })
  //     .catch(error =>{
  //         console.log(error)
  //     })
  //     // history.push('/MainGet');
    
  //   console.log(values);
    
  // };
//    const changeHandler=e => {
//     setState({[e.target.name]:e.target.value})
// }
  
 const Namehandler=(event)=>{
  setState({
    userName:event.target.value
  })
}

 const Emailhandler=(event)=>{
  setState({
    email:event.target.value
  })
}

  
   

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
      <h2 className="active"> User Page</h2>
         <div className="fadeIn first">

         </div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
          
            <br/>
            <input
                 type="text" 
                 id="login"
                 name="email"
                 value={email}
                 defaultValue={email}
                 onChange={Emailhandler}
                 placeholder="Enter the Email"
                 ref={register({
                 required: ' Email is Required',
                  pattern: {
                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                   message: "Email Address Should be correct format"
                   }
                 })}
                 />
                 <br/>
            <span className="color">{errors.email && errors.email.message}</span>
            <br/>
            <br/>
            <input
               type="text" 
               id="login"
               placeholder="Enter the UserName"
               name="userName"
               onChange={Namehandler}
               value={userName}
                ref={register({
                required: 'UserName is Required',
                pattern: {
                  value: /^[a-zA-Z]*$/i,
                  message: "UserName should be correct format"
                  }
                 })}
               />
              <br/>
            <span >{errors.userName && errors.userName.message}</span>
            <br/>
             <button type="submit">Submit</button>
              <div>
                <span><strong></strong></span>
               
            </div>
            </div>
        </form>
           <br/>
            <br/>
         
            <div id="formFooter">
             <h5>Have a Good Day</h5>
           </div> 
      </div>
       
    </div>
 
  
    

   
  );
};


 export default ReactButtonClickForm;








//  <form onSubmit={handleSubmit(onSubmit)}>
//  <input
//    name="email"
//    ref={register({
//      required: 'Required',
//      pattern: {
//        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//        message: "invalid email address"
//      }
//    })}
//  />
//  {errors.email && errors.email.message}
//  <br/>
//  <br/>
//  <input
//    name="username"
//    ref={register({
//      required: 'Required',
//      validate: value => value !== "admin" || "Nice try!",
   
//    })}
//  />
//  {errors.username && errors.username.message}
//  <br/>
//  <br/>
//  <button type="submit">Submit</button>
// </form>