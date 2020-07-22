import React ,{useState,useEffect}from 'react'
import Axios from 'axios';
import Paginations from './Paginations';
import GetTable from './GetTable';
import HeaderComponent from './HeaderComponent';
import Footer from './Footer';




const GetAllComponent=()=>
{
   const[items,setItems]=useState([]);
   const[loading,setLoading]=useState(false);
   const[currentPage,setCurrentPage]=useState(1);
   const[itemsPerPage]=useState(6);
 
//   const nextPage = () =>{
//     let condition = Math.ceil(items.length/itemsPerPage)
//     if (currentPage < condition) {
//       setItems({currentPage : currentPage + 1,validate:false})     
//     }
// }

   useEffect(()=>{
       const fetchPosts=async()=>{
           setLoading(true);
           const res=await Axios.get('https://localhost:44380/api/values');
           setItems(res.data);
           setLoading(false);
       }
       fetchPosts();
   },[]);
     console.log(items);
     const indexOfLastPost=currentPage*itemsPerPage;
     const indexOfFirstPost=indexOfLastPost-itemsPerPage;
     const currentItems=items.slice(indexOfFirstPost,indexOfLastPost);
     const nextPage =()=>setCurrentPage({currentPage:currentPage + 1});
     const previousPage =()=>setCurrentPage({currentPage:currentPage - 1});
    
    const paginate=(pageNumber)=>setCurrentPage(pageNumber);


    return (
     <div>
         <HeaderComponent/>
         <br/>
         <br/>
         <br/>
         
         <GetTable items={currentItems} loading={loading} />
          
         {/* &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          
          <Paginations itemsPerPage={itemsPerPage} totalitems={items.length}
        paginate={paginate} nextPage={nextPage} previousPage={previousPage}/>
        
        {/* <div><button onClick={nextPage}>Next</button></div> */}
        
        <Footer/>
    </div>
    );
};

export default GetAllComponent;