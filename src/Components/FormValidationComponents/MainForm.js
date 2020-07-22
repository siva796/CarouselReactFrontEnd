import React,{ Component } from 'react'



const ErrorOutput = ({ error }) => <span> {error} </span>;

const FormItem = ({ label, input, error }) => (
  <div>
    <label> {label} </label> <input {...input} />
    {error && <ErrorOutput error={error} />}
  </div>
);

class MainForm extends Component {
    constructor(props){
        super(props)
        this.state={
            userName: "",
            email: "",
            submit: false,
            errors: {}

        }
    }
 

  handleSubmit = () => {

    const {userName , email } = this.state
    const errors = {}
    let invalid = false
    
      if (userName === "") {
        errors.userName = "User name is required"
        invalid = true
      } else if (!userName.match(/^[a-zA-Z]+$/)) {
        errors.userName = "Letters only"
        invalid = true
      }
    
    
    if (email === "") {
      errors.email = "Email is required"
      invalid = true
    } else if (!email.match(/^[aA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
      errors.email = "Email should be Correct Format"
      invalid = true
    }
  
    this.setState({
      invalid,
      errors
    })
  
    return invalid
    // const { userName, email, errors } = this.state;
    // const { userName, email } = errors;

    // const userNameIsValid = userName && !userNameError;
    // const emailIsValid = email && !emailError;

    // userNameIsValid && emailIsValid
    //   ? console.log("Success!")
    //   : console.log("Error!");
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  render() {
    const { userName, email, errors } = this.state;
    return (
      <form onClick={this.handleSubmit}>
        {/* <FormItem label='User Name:' input={{
            type: 'text',
            name: 'userName',
            value:{userName},
            onChange: e => this.setState({ userName: e.target.value }),
            onBlur: (e) => this.validate(e),
          }} error = {errors.userName}
        />  */}
           <input type="text" name="userName" value={userName}
                   
                   onChange={this.changeHandler}
                   placeholder="Enter the UserName"
                   
                  required error={errors.userName}  pattern='^[a-zA-Z]*$'  />

        {/* <FormItem
          label="Email:"
          input={{
            type: "text",
            name: "email",
            value :{email},
            onChange: e => this.setState({ email: e.target.value }),
            onBlur: (e) => this.validate(e),
            
          }}
          error={errors.email}
        /> */}
        <button type="button" >
          Submit
        </button>
      </form>
    );
  }
}




export default MainForm;














