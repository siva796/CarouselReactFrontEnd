import React from 'react'
//   const nextPage = () =>{
//     let condition = Math.ceil(items.length/itemsPerPage)
//     if (currentPage < condition) {
//       setItems({currentPage : currentPage + 1,validate:false})     
//     }
// }

const Paginations=({itemsPerPage,totalitems,paginate,nextPage,previousPage})=>
{
    const pageNumbers=[];
   
 
    for(let i=1;i<=Math.ceil(totalitems / itemsPerPage);i++){
        pageNumbers.push(i);
    }
  


    return (
   
        
       <nav>
           <ul className="pagination">
               <li className="page-item">
                   <a onClick={()=>previousPage()} className="page-link">previous</a>
               </li>
           
               {pageNumbers.map(number=>(
                   
                
                   <li key={number}  className="page-item">
                     
                       <a onClick={()=>paginate(number)}
                       className="page-link">
                           <h5 text-color='blue'>{number}</h5>
                        
                       </a>
                       
                   </li>
               ))}
                <li className="page-item">
                   <a onClick={()=>nextPage()}className="page-link">Next</a>
               </li>
           </ul>

    </nav>
    )
    
}

export default Paginations;