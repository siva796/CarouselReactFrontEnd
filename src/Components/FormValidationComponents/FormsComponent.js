import React, { Component } from 'react';
//  import './App.css';

const emailRegex=RegExp('^[a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-z0-9]@[a-z0-9][-\.]{0,1}([a-z][-\.]{0,1})*[a-z0-9]\.[a-z0-9]{1,}([\.\-]{0,1}[a-z]){0,}[a-z0-9]{0,}$')

const formValid=formerrors =>
{
    let valid="true";


    Object.values(formerrors).forEach(val=>{
        val.length>0 && (valid="false")})
        return valid;
}



  class FormsComponent extends Component{
      constructor(props){
        super(props)
        {
            this.state={
                firstName:null,
                lastName:null,
                email:null,
                password:null,
                formerrors:{
                    firstName:"",
                    lastName:"",
                    email:"",
                    password:"" 

                }
            }
        }
        // this.handleSubmit=this.handleSubmit.bind(this);
      }
      handleSubmit=e=>{
          e.preventDefault();
          if(formValid(this.state.formerrors))
          {
            // this.setState({
            //     message:'thanks for subsribing'
            // })
            
          }
      }
      handleChange=e=>{
        e.preventDefault();
        const{name,value}=e.target;
        let formerrors=this.state.formerrors;
        switch(name){
            case'firstName':
            formerrors.firstName=value.length< 3 && value.length>0 ?"minimum 3 characters required"
            :"";
            break;
            case'lastName':
            formerrors.lastName=value.length< 3 && value.length>0 ?"minimum 3 characters required"
            :"";
            break;
            case'email':
            formerrors.email= emailRegex.test(value) && value.length>0 ?""
            :"invalid email address";
            break;
            case'password':
            formerrors.password=value.length< 6 && value.length>0 ?"minimum 3 characters required"
            :"";
            break;
            default:
                break;
        }
        this.setState({formerrors,[name]:value},()=>{console.log(this.state)})
      }
    render() {
        const{formerrors}=this.state;
        return(
            <div className="wrapper"> 
            <div className="form-wrapper">
                <div class="text-center">
                    <h1>User Page</h1>
                    <form onClick={()=>this.handleSubmit} noValidate>
            <div className="firstName">
                <label htmlFor="firstName">FirstName</label>
                <input  className={formerrors.firstName.length>0 ?"error":null}
                 placeholder="Enter the First Name" 
                  name="firstName"
                  type="firstName"
                onChange={this.handleChange}
                noValidate></input>
                {formerrors.firstName.length > 0 &&(
                    <span className="errorMessage">
                        {formerrors.firstName}
                    </span>
                )}
            </div>
            <div className="lastName">
                <label htmlFor="lastName">LastName</label>
                <input className={formerrors.lastName.length>0 ?"error":null}
                 placeholder="Enter the Last Name" 
                 type="lastName"
                 name="lastName"
                onChange={this.handleChange}
                noValidate></input>
                {formerrors.lastName.length > 0 &&(
                    <span className="errorMessage">
                        {formerrors.lastName}
                    </span>
                )}
            </div>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input  className={formerrors.email.length>0 ?"error":null}
                placeholder="Enter the Email" 
                  name="email"
                  type="email"
                onChange={this.handleChange}
                noValidate></input>
                {formerrors.email.length > 0 &&(
                    <span className="errorMessage">
                        {formerrors.email}
                    </span>
                )}
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <input  className={formerrors.password.length>0 ?"error":null}
                placeholder="Enter the Password" 
                 type="password"
                 name="password"
                onChange={this.handleChange}
                noValidate></input>
                {formerrors.password.length > 0 &&(
                    <span className="errorMessage">
                        {formerrors.password}
                    </span>
                )}
            </div>
            <div className="createAccount">
                <button type="submit" >create Account</button>
                <br/>
                <small>Already have a Account ?</small>
            </div>
            
        </form>
                </div>
           
        </div>
            </div>

        )
       
    }
      
       

}

  export default FormsComponent;