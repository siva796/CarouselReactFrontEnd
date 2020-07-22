import React ,{useState,useEffect}from 'react'
import Axios from 'axios';
import HeaderComponent from './HeaderComponent';
import Footer from './Footer';
import BootstrapTable from  "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";
import  {BootstrapTableContainer, DataProvider ,PaginationDataProvider, PaginationHandler}
from "react-bootstrap"


const GetPageComponent=()=>
{
   const[items,setItems]=useState([]);
   const[loading,setLoading]=useState(false);
   const[currentPage,setCurrentPage]=useState(1);
   const[itemsPerPage]=useState(6);
 
   

   const fetchPosts=async()=>{
      try{
        const res=await Axios.get('https://localhost:44380/api/values');

      
      console.log(res);
      setItems(res.data);
      }
      catch(e)
      {
          console.log(e);
      }
   }

   useEffect(()=>{
       fetchPosts();
   },[]);
     console.log(items);
     

   const columns=[
       { dataField:"userId", text:"userId"},
       { dataField:"UserName", text:"UserName"},
       { dataField:"Email", text:"Email"}
   ]


    return (
     <div>
         <HeaderComponent/>
         <br/>
         <br/>
         <br/>
         <BootstrapTable
         keyField="userId"
         data={items}
         columns={columns}
         pagination={paginationFactory()}
          />
        
        
        
        
        <Footer/>
    </div>
    );
};

export default GetPageComponent;