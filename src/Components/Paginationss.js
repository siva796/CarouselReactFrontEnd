import React,{ Component } from 'react'



class Paginationss extends Component{
   
    render(){
        const{ itemsPerPage,totalitems,paginate,nextPage,previousPage }=this.props;
        const pageNumbers=[];
        for(let i=1;i<=Math.ceil(totalitems / itemsPerPage);i++){
            pageNumbers.push(i);
        }
      return(
        <nav>
        <ul className="pagination">
            <li className="page-item">
            <a onClick={()=>previousPage()} 
                href="#"     className="page-link"><h5>(-</h5>
            </a>
            </li>
        
            {pageNumbers.map(number=>(
                
             
                <li key={number}  className="page-item">
                  
                    <a onClick={()=>paginate(number)}
                href='#' className="page-link">
                        <h5>{number}</h5>
                     
                    </a>
                    
                </li>
            ))}
             <li className="page-item">
                <a onClick={()=>nextPage()}   href="#" className="page-link"><h5>-)</h5></a>
            </li>
        </ul>

 </nav>
      )
    }

}

export default Paginationss;