
import { Form, Input, Button } from 'antd';
import React,{ Component } from 'react'
import axios from 'axios'


class newForm extends Component {
  formRef = React.createRef();
  constructor(props){
    super(props)
    {
    
        this.state={
            userName:'',
            email:'',
          
        }
    }
}
 


changeHandler=e => {
    this.setState({[e.target.name]:e.target.value})
}
submitHandler=e =>{
    
  e.preventDefault();
 
  console.log(this.state)
  axios.post('https://localhost:44380/api/values',this.state)
  .then(response =>{
      console.log(response)
      this.setState({ posts:response.data})
  })
  .catch(error =>{
      console.log(error)
  })
  this.props.history.push('/MainGet');
}

resetForm = () => {
    this.setState({ userName: '' })
    this.setState({email:''})
  }
 

//   onFinish = values => {
//     console.log(values);
//   };

//   onReset = () => {
//     this.formRef.current.resetFields();
//   };

 

  render() {
      const{userName,email}=this.state;

    return (
      <Form  ref={this.formRef} name="control-ref" onSubmit={this.submitHandler} onReset={this.resetForm}>
        <Form.Item
          name="userName"
          label="userName"
          value={userName}
          onChange={this.changeHandler}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="email"
          value={email}
          onChange={this.changeHandler}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
       
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        
        
        </Form.Item>
      </Form>
    );
  }
}

export default newForm;






// const { Option } = Select;
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };



{/* <Form.Item
name="gender"
label="Gender"
rules={[
  {
    required: true,
  },
]}
>
<Select
  placeholder="Select a option and change input text above"
  onChange={this.onGenderChange}
  allowClear
>
  <Option value="male">male</Option>
  <Option value="female">female</Option>
  <Option value="other">other</Option>
</Select>
</Form.Item>
<Form.Item
noStyle
shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
>
{({ getFieldValue }) =>
  getFieldValue('gender') === 'other' ? (
    <Form.Item
      name="customizeGender"
      label="Customize Gender"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
  ) : null
}
</Form.Item> */}


// onGenderChange = value => {
//     this.formRef.current.setFieldsValue({
//       note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
//     });
// }