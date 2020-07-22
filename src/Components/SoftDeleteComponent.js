import React,{ Component } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import "./stylescss.css";
import HeaderComponent from './HeaderComponent';
import Footer from './Footer';

class SoftDeleteComponent extends Component{
    constructor(props){
        super(props)
           
            this.state={
                userId:'',
                isDeleted:'',
                message:'',
                Data:this.props.location.data[0]
              
                }
                  }
     
    changeHandler=e => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=e =>{
        
      e.preventDefault()
      console.log(this.state)
      axios.put("https://localhost:44380/api/SoftDelete?userId="+this.state.Data.userId,this.state.isDeleted)
      .then(response =>{
          console.log(response)
          toast.success('Deleted successfully',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
          this.setState({posts:response.data })
      })
      .catch(error =>{
          console.log(error)
          toast.error('Server is down',{position : toast.POSITION.TOP_RIGHT,autoClose : 4000})
      })
    }
    back=()=>{
        this.props.history.push('/GetAll');
    }
    
    render(){
        const {userId }=this.state.Data;
      
      return(
          <div>
              <HeaderComponent/>
              <br/>
              <br/>
              <br/>
        <div className="wrapper fadeInDown">
           <div id="formContent">
             <h5 className="active"> Delete Page</h5>
             <br/>
            
               <div className="fadeIn first">

                </div>
                <br/>
           <form onSubmit={this.submitHandler} >
               <div>
                   <input type="text" name="userId" value={userId}
                   onChange={this.changeHandler}
                   placeholder="Enter the UserId"
                  required pattern="[0-9]*"  />
                 
               </div>
               <br/>
               <br/>
               <h5 className="active"> Are you sure to Delete this ?</h5>
               <br/>
               <button  className="btn-btn-primary" onClick={this.back}>Back</button>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <button type="submit" className="btn-btn-primary">Delete</button>
           </form>
             <br/>
             <h4 color="black">{this.state.message}</h4>
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

export default SoftDeleteComponent;
