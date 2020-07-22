import React,{ Component } from 'react'
import axios from 'axios'
import "./styleGet.css";

class PostList extends Component{
    constructor(props){
        super(props)
        {
            this.state={
                posts:[]
            }
        }
    }
    componentDidMount()
   {
       axios.get('https://localhost:44380/api/values')
         .then(response =>{
             console.log(response)
             this.setState({posts:response.data})
         })
         .catch(error =>{
             console.log(error)
         })
   }

      update=()=>{
        this.props.history.push('/update');
      }
     
      delete=()=>{
        this.props.history.push('/delete');
      }
    
      back=()=>{
        this.props.history.push('/userData');
      }
    render(){
     
        const { posts }= this.state;
      return(
          <div className="text-center">
            <button className="btn btn-outline-danger" onClick={this.back}>Back</button>
            <br/>
            List of post
            {
                posts.length?
                posts.map(post=>
                <div key={post.userId} className=" text-center">
                
                
                <table className="table table-bordered">
                <thead className="thead-dark">
                 <tr>
                    <th scope="col" bgcolor="black"><font size="3">UserId</font></th>
                    <th scope="col" bgcolor="black"><font size="3">UserName</font></th>
                    <th scope="col" bgcolor="black"><font size="3">Email</font></th>
                    <th scope="col" bgcolor="black"><font size="3">Update</font></th>
                    <th scope="col" bgcolor="black"><font size="3">Delete</font></th>
                    </tr> 
                 
                </thead>
                 <tbody>
                  
                  
                     
                    
                    <tr>
                        
                <td><font size="3">{post.userId}</font></td>
                <td><font size="3">{post.userName}</font></td>
                <td><font size="3">{post.email}</font></td>
                    
                  
                   <td><button type="button" className="btn btn-primary btn-xs" onClick={this.update}>Update</button>
                   </td>
                   <td>
                    <button type="button" className="btn btn-primary btn-xs" onClick={this.delete}>Delete</button>
                   </td>
                   </tr>
                 

      
                  
                  
                 </tbody>
                
               
            </table>
                  
                  
                      
                <div>
               
                </div>
                    </div>
                 ):
                 null
                   
                }   
            </div>
           )
          }
        }
             
                
                
                
                
                
                
                
                 
            
         

export default PostList