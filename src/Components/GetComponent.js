
import React, { useState, useEffect} from 'react';
 import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Pagination } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
import ReactPaginate from 'react-paginate';



class UserList extends React.Component {
  constructor(props) {
    super(props);
  
    this.sendValue = this.sendValue.bind(this);    
    this.setValue = this.setValue.bind(this);
   
    
    this.state = {
      error: null,
      getData:[],
      pageOfItems: [],
    
     
    }
   
   
  }
 
  
setValue(e){
  this.setState({
    getData: e.target.value
  });
}
sendValue(){
  //console.log(this.state.userID);
  this.props.history.push('/second/'+this.state.getData.userId,this.state.getData.userName,this.state.getData.email); 
}


  componentDidMount() {
    const apiUrl = 'https://localhost:44380/api/values';
 
    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
         
          this.setState({
            getData: result
          });
          console.log(result);
        },
        (error) => {
          this.setState({ error });
        }
      )
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
 
  render() {
   
     const { error , getData }= this.state;
    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(

        <div>
        
           <h2 bgcolor="black">User List</h2>
    
     {/* <Pagination
                    bsSize="medium"
                    items={10}
                    activePage={1}/> */}
        

          <Table
      striped
      bordered
      small
      Pagination
      data={getData}>
         
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
              {getData.map(getUser => (
                <tr key={getUser.userId}>
                    <td onChange={this.setValue}>{getUser.userId}</td>
                  
                  <td onChange={this.setValue}>{getUser.userName}</td>
                  <td onChange={this.setValue}>{getUser.email}</td>
                  <td onChange={this.setValue}><button type="button" className="btn btn-primary btn-xs" onClick={this.sendValue}>Update</button>
                   </td>
                   <td>
                    <button type="button" className="btn btn-primary btn-xs" onClick={this.delete}>Delete</button>
                   </td>
                   <td>
                    <button type="button" className="btn btn-primary btn-xs" onClick={this.back}>Back</button>
                   </td>
                 
                </tr>
              ))}
            </tbody>
            
          </Table>
        </div>
      )
    }
  }
}

export default UserList;