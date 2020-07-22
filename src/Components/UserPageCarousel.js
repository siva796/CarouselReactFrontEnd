// import React,{ Component } from 'react'
// import { useForm } from "react-hook-form";
// import "./stylescss.css";
// import axios from 'axios'

// class UserPageCarousel extends Component{
    
// constructor(props){
//     super(props);
//     this.state={
//         userName:'',
//         email:'',
      
//     }
// }

// changeHandler=e => {
//     this.setState({[e.target.name]:e.target.value})
// }
// submitHandler=e =>{
    
//   e.preventDefault();
 
//   console.log(this.state)
//   axios.post('https://localhost:44380/api/values',this.state)
//   .then(response =>{
//       console.log(response)
//       this.setState({ posts:response.data})
//   })
//   .catch(error =>{
//       console.log(error)
//   })
//   this.props.history.push('/MainGet');
// }

// resetForm = () => {
//     this.setState({ userName: '' })
//     this.setState({email:''})
//   }
 
// render(){
//     const { handleSubmit, errors } = useForm();
//     const {userName,email }=this.state;
//   return(
//     <div class="wrapper fadeInDown">
//       <div id="formContent">
//       <h2 class="active"> User Page</h2>
//          <div class="fadeIn first">

//          </div>
//         <form onSubmit={handleSubmit(this.submitHandler)}>
//             <div>
//             <input
//                  type="text" 
//                  id="login"
//                  name="email"
//                  value={email}
//                  onChange={this.changeHandler}
//                  placeholder="Enter the Email"
//                  ref={register({
//                  required: ' Email is Required',
//                   pattern: {
//                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                    message: "Email Address Should be correct format"
//                    }
//                  })}
//                  />
//                  <br/>
//             <span class="color">{errors.email && errors.email.message}</span>
//             <br/>
//             <br/>
//             <input
//                type="text" 
//                id="login"
//                value={userName}
//                onChange={this.changeHandler}
//                placeholder="Enter the UserName"
//                name="username"
//                 ref={register({
//                 required: 'UserName is Required',
//                 pattern: {
//                   value: /^[a-zA-Z]*$/i,
//                   message: "UserName should be correct format"
//                   }
//                  })}
//                />
//               <br/>
//             <span >{errors.username && errors.username.message}</span>
//             <br/>
//             <br/>
//              <button type="submit">Submit</button>
//               <div>
//                 <span><strong></strong></span>
               
//             </div>
//             </div>
//         </form>
//            <br/>
//             <br/>
         
//             <div id="formFooter">
//              <h5>Have a Good Day</h5>
//            </div> 
//       </div>
       
//     </div>
//   )
// }

// }

// export default UserPageCarousel;