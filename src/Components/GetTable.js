import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory, Router } from 'react-router-dom';
import "./stylescss.css";



const GetTable=({items,loading})=>{
 

    const history = useHistory();
    

   
  

    if(loading){
        return<h2>Loading....</h2>;
    }
     
    const deleteData=(userId)=>{
      const data=[{
        userId:userId,
        }]
         history.push({pathname:"/delete",data})
        
        
      }
    const back=()=>{
     
        history.push('/login');
      }
      
  const update=(userId,userName,email)=>{
    
    const data={
      userId:userId,
      userName:userName,
      email:email,
     

    }
    console.log(userId,userName,email);
    // history.push({pathname:"/Update",data});
    history.push('/Update',data)
    // return(<UpdateComponent userId={userId} userName={userName} email={email}/>)
   
  }
  

  
  // const filteredUser = items.filter(itemData => {
  //   return itemData.userName.indexOf(search) !== -1;
  // });
   
 
  
  
 
    // let filteredItems=items.filter(item=>{
    //   return item.userName.indexOf(search)!== -1
    // })

    return (

     
      
      <div className="col-md-0">      
               <div>
               {/* <input type="text" onChange={onchange} />
            */} 
                  <Table className=
                      "table table-bordered">
                     <thead>
                      <tr >
                          <th scope="col" bgcolor="black">userId</th>
                          <th scope="col" bgcolor="black">userName</th>
                          <th scope="col" bgcolor="black">Email</th>
                          <th scope="col" bgcolor="black">Update</th>
                          <th scope="col" bgcolor="black">Delete</th>
                          <th scope="col" bgcolor="black">Back</th>
                      </tr>
                    </thead>
        
                <tbody>
           
              
       
            {
            
                items.map(item=>(
                <tr key={item.userId}>
                    <td >{item.userId}</td>
                  
                  <td>{item.userName}</td>
                  <td>{item.email}</td>
                  <td >
                  <button type="button" className="btn btn-primary" onClick={()=>{update(item.userId,item.userName,item.email)}}>update</button>
                   </td>
                   <td>
                    <button type="button" className="btn btn-primary" onClick={()=>deleteData(item.userId)}>Delete</button>
                   </td>
                   <td>
                    <button type="button" className="btn btn-primary" onClick={back}>Back</button>
                   </td> 
                </tr>
            ))  }

        </tbody>
        </Table>
       
        </div>
    </div>
  
    
    );
   };

export default GetTable;