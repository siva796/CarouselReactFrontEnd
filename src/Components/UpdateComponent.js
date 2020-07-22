import React,{ Component } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify';
import "./stylescss.css";

import HeaderComponent from './HeaderComponent';
import Footer from './Footer';






class UpdateComponent extends Component{
    constructor(props){
        super(props)
          this.state={
              
               userName:this.props.location.state.userName,
               email:this.props.location.state.email,
               getData:[],
               Data :this.props.location.state
                

              
            }
            console.log(props)
         
      
    
       
    }
  
    
  

    changeHandler=e => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=e =>{
        

      e.preventDefault()
      console.log(this.state)
      axios.put("https://localhost:44380/api/Values?userId="+this.state.Data.userId,this.state)
      .then(response =>{
          console.log(response)
          toast.success('sucessfully Updated',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
          // this.setState({
          // message:'Updated sucessfully',posts:response.data})
          
      })
      .catch(error =>{
          console.log(error)
          toast.error('Server is down',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
      })
     
    }
    resetForm = () => {
      this.setState({userId:''})
      this.setState({userName: '' })
      this.setState({email:''})
      this.setState({message:''})
    }


    back=()=>{
      this.props.history.push('/GetAll');
    }
 




    render(){
      //  const {values}=this.props;  
       const{userId,userName,email}=this.state.Data;
     
 
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
          
               <div className="fadeIn first">

                </div>
                <div id="formFooter" bgcolor="lightGrey">
             <h5>Update page</h5>
             </div>

              
           <form onSubmit={this.submitHandler} onReset={this.resetForm} >
  
               <div>
                   <input  type="text" name="userId"    Value={userId}
                   onChange={this.changeHandler} placeholder="Enter the userId"
                   
                  required pattern="[0-9]*" maxLength="2" disabled />
                 
               </div>
               <br/>
              
               <div>
                   <input type="text" name="userName" Value={userName}
                   onChange={this.changeHandler}
                  
                   pattern="^[a-zA-Z]*$" maxLength="50"  contentEditable required  />
                 
               </div>
               <br/>
               
               <div>
                   <input type="text" name="email" Value={email}
                   onChange={this.changeHandler}
                
                   pattern="[aA-zZ0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  maxLength="50"  contentEditable required/ >
                
           
               </div>
               <br/>
               
               <button  className="btn-btn-primary" onClick={this.back}>Back</button>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <button type="reset" className="btn-btn-primary">cancel</button>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <button type="submit" className="btn-btn-primary">Update</button>
              
           </form>
             <br/>
             {/* <div><h4 color="black">{this.state.message}</h4></div> */}
            
          </div>
          </div>
          <Footer/>
          </div>
      )
    }

}
export default UpdateComponent;
