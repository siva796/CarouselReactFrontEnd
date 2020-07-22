import React,{ Component } from 'react'
import axios from 'axios';
import "./stylescss.css";
import HeaderComponent from './HeaderComponent';
import Footer from './Footer';
import {toast} from 'react-toastify'
import { configConsumerProps } from 'antd/lib/config-provider';


class LoginComponent extends Component{
    constructor(props){
        super(props)
        
        
            this.state={
                userName:'',
                email:'',
                password:'',
               
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
     
      console.log(this.state);
   
      axios.post('https://localhost:44380/api/Login',this.state)
      .then(response =>{
          console.log(response)
          // if(this.props.config.data.userName=="" && this.props.config.data.password=="")
          // {
          //   toast.error('Please Fill all the detials ',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
          // }
         if(response.data==true)
          {
            toast.success('Login successfully',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
            this.setState({ posts:response.data})
            this.props.history.push('/GetAll');
          }
          else{
            toast.error('Invalid UserName or Invalid password',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000});
          }
            

          
          // localStorage.setItem('InsertUser',response.data[0].Id);
       
      })
      .catch(error =>{
          console.log(error)
          toast.error('Server is down ',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
      })
     
    }
    back=()=>{
        this.props.history.push('/userData');
    }
    resetForm = () => {
        this.setState({ userName: '' })
        this.setState({email:''})
        this.setState({password:''})
      }
     
    render(){
        const {userName,password }=this.state;
      return(
        <div>
        <HeaderComponent/>
        <br/>
        <br/>
        <br/>
        <br/>
      
        <div style={{backgroundImage: 'url(' + require('../Assets/bg1.jpg') + ')'}} className="bg">
        </div>
        <div style={{backgroundImage: 'url(' + require('../Assets/Logo.jpg') + ')'}} className="Logo">
        </div>
        <div className="wrapper fadeInDown">
           <div id="formContent">
             <h5> Login Page</h5>
               <div className="fadeIn first">

                </div>
                <br/>
           <form   onSubmit={this.submitHandler} onReset={this.resetForm} >
               <div>
                   <input type="text" name="userName" value={userName}
                   
                   onChange={this.changeHandler}
                   placeholder="Enter the UserName"
                   
                  required   pattern='^[a-zA-Z]*$'  />
                 
               </div>
               
               <br/>
               <input type="password" name="password" value={password}
                   maxLength="10"
                   onChange={this.changeHandler}
                   placeholder="Enter the password"
                   
                  required   />
                  <br/>
                  <br/>
                  <br/>
                  <button className="btn-btn-primary" onClick={this.back}>Signup</button> 
                  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <button className="btn-btn-primary" type="reset">cancel</button> 
               &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
               <button className="btn-btn-primary"  type="submit">Next</button>
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

export default LoginComponent;