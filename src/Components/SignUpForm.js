import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
const errorss=[];
const errors=[];
function validation(email){
  if (email.length === 0) {
    errorss.push("Email is required");
  }

  // if (email.length < 5) {
  //   errorss.push("Email should be at least 5 charcters long");
  // }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errorss.push("Email should be correct Format");
  }
  if (email.indexOf(".") === -1) {
    errorss.push("Email should be correct format");
  }
  return errorss;
}
function validate(userName) {
  // we are going to store errors for all fields
  // in a signle array
  // const errors = [];
 
  if (userName.length === 0) {
    errors.push("Name can't be empty");
  }
    // if(userName.filter(x=>x==='^[a-zA-Z]*$').length !== 1){
    //   errors.push("Name should be correct Format");
    // }
  
 
  return errors;
}


     

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName:'',
      email:'',
      errors: [],
      errorss:[]
    };
   

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { userName,email } = this.state;
   
  

    // const errors = validate(name, email, password);
    const errors = validate(userName);
    const errorss=validation(email);
    
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    if (errorss.length > 0) {
      this.setState({ errorss });
      return;
    }
    // submit the data...
  }

  render() {
    const { errors,errorss } = this.state;
    // const { userName,email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
       
        <input
          value={this.state.userName}
          onChange={evt => this.setState({ name: evt.target.value })}
          type="text"
          
          placeholder="Name"
        />
        <span>{errors.map(errors => (
          <p key={errors}>Error: {errors}</p>
        ))}</span>
         <br/>
        <input
          value={this.state.email}
          onChange={evt => this.setState({ email: evt.target.value })}
          type="text"
      
          placeholder="Email"
        />
        <span>
        {errorss.map(errorss => (
          <p key={errorss}>Error: {errorss}</p>
        ))}
        </span>
        <br/> 
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<SignUpForm />, rootElement);

export default SignUpForm;








// function validation( password) {
//   // we are going to store errors for all fields
//   // in a signle array
//   // const errors = [];
//   if (password.length === 0) {
//     errors.push("Password should be at least 6 characters long");
//   }
//   return errors;
// }