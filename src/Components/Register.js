import React,{ Component } from 'react'
import axios from 'axios';
import "./stylescss.css";
import HeaderComponent from './HeaderComponent';
import Footer from './Footer';
import {toast} from 'react-toastify'


class Register extends Component{
    constructor(props){
        super(props)
        
        
            this.state={
                userName:'',
                email:'',
                password:''
              
            }
        
    }
  //  Privateroute = ({ component: Component ,...rest }) => {
  //     return <Route {...rest} render={(props) => {
  //         return (localStorage.getItem('InsertUser') ? <Component {...props} /> : <Redirect to='/'/> )}}/>
  //     }

    
    changeHandler=e => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=e =>{
        
      e.preventDefault();
     
      console.log(this.state)


      axios.post('https://localhost:44380/api/CheckRegister',this.state)
      .then(response =>{
          console.log(response)
          if(response.data==false)
          {

            axios.post('https://localhost:44380/api/values',this.state)
          .then(response =>{
          console.log(response)
          localStorage.setItem('InsertUser',response.data);
          toast.success('sucessfully Registered',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
          this.setState({ posts:response.data})
          localStorage.setItem('userData',response.data);
          // this.props.history.push('/MainGet');
      })
            
          }
          else{
            toast.error('UserName or Email Already Exist',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000});
          }  
         
       
      })
      .catch(error =>{
          console.log(error)
          toast.error('Server is down',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
      })
     
    }
  Login=()=>{
    this.props.history.push('/login');
  }
    resetForm = () => {
        this.setState({ userName: '' })
        this.setState({email:''})
        this.setState({password:''})
      }
     
    render(){
        const {userName,email,password }=this.state;
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
             <h5> SignUp Page</h5>
               <div className="fadeIn first">

                </div>
                <br/>
           <form   onSubmit={this.submitHandler} onReset={this.resetForm} >
               <div>
                   <input type="text" name="userName" Value={userName}
                   
                   onChange={this.changeHandler}
                   placeholder="Enter the UserName"
                   
                  required   pattern='^[a-zA-Z]*$'  />
                 
               </div>
               
               <br/>
             
               <div>
                
                   <input type="text" name="email" Value={email}
                   onChange={this.changeHandler}
                   placeholder="Enter the Email"
                  required pattern="[aA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                    <br/>
           
               </div>
               <br/>
               
               <input type="password" name="password" Value={password}
                   maxLength="10"
                   onChange={this.changeHandler}
                   placeholder="Enter the password"
                   
                  required   />
                  <br/>
                  <br/>
                  <button className="btn-btn-primary" onClick={this.Login}>Back</button>
                  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <button className="btn-btn-primary" type="reset">cancel</button> 
               &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
               <button className="btn-btn-primary"  type="submit">Register</button>
           </form>
             <br/>
             
            
            <div id="formFooter">
             <h5>Have a Good Day</h5>
             </div> 
          </div>
    
          </div>
          <Footer/>
          </div>
      )
    }
  
}

export default Register;