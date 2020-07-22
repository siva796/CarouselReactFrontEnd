import React from "react";
import ReactFormInputValidation from "react-form-input-validation";
import axios from 'axios'
import "./stylescss.css";

class ReactFormWithValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        userName: "",
        email: "",
        // phone_number: ""
      },
      errors: {}
    };
    this.form = new ReactFormInputValidation(this);

    this.form.useRules({
        userName: "required",
        email: "required|email",
        
        // phone_number: "required|numeric|digits_between:10,12",
    });

    this.form.onformsubmit = (state) => {
        axios.post('https://localhost:44380/api/values',this.state.fields)
        .then(response =>{
            console.log(response)
            this.setState({ posts:response.data})
        })
        .catch(error =>{
            console.log(error)
        })
        this.props.history.push('/MainGet');
    }
  }
 
  render() {
   
    return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
          <h5>   </h5>
          <h5> User Page</h5>
            <div className="fadeIn first">

             </div>
        <form onSubmit={this.form.handleSubmit}>
              
                
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter The UserName"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.userName}
                  pattern="^[a-zA-Z]*$"
                />
             
              <label className="error">
                {this.state.errors.userName ? this.state.errors.userName : ""}
              </label>
             <br/>
             <br/>
            
              
                
                <input
                  type="text"
                  name="email"
                  placeholder="Enter the Email"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email}
                />
            
              <label className="error">
                {this.state.errors.email ? this.state.errors.email : ""}
              </label>
              <br/>
             <br/>
 
            {/* <p>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone_number"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.phone_number}
                />
              </label>
              <label className="error">
                {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
              </label>
            </p> */}
            <p>
              <button type="submit">Submit</button>
            </p>
        </form>
        <br/>
      
        <div id="formFooter">
             <h5>Have a Good Day</h5>
             </div> 
        </div>
       
       </div>
        )
  }
}

export default ReactFormWithValidation;