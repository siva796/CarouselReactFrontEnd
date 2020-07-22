import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import "./style.css";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer(),
  website: yup.string().url()
});

function ReactForm() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    // <div className="wrapper"> 
    // <div className="form-wrapper">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="firstName">
                <label htmlFor="firstName">FirstName</label>
        <input type="text" name="firstName" placeholder="Enter the First Name"
         ref={register} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      <div className="lastName">
        <label>Last Name</label>
        <input type="text" name="lastName" ref={register} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input type="text" name="age" ref={register} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label>Website</label>
        <input type="text" name="website" ref={register} />
        {errors.website && <p>{errors.website.message}</p>}
      </div>
      <input type="submit" />
    </form>
    // </div>
    // </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ReactForm />, rootElement);


export default ReactForm;