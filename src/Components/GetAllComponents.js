import React,{ Component } from 'react'
import axios from 'axios';

import Paginationss from './Paginationss';
import HeaderComponent from './HeaderComponent';
import Footer from './Footer';
import GetTable from './GetTable';



class GetAllComponents extends Component{
    constructor(props){
        super(props)
        
            this.state={
               items:[],
               loading:false,
               currentPage:1,
               itemsPerPage:6
            };
        
    }
   
   componentDidMount(){
       const getData=async()=>{
           this.setState({ loading: true});
           const res=await axios.get('https://localhost:44380/api/values');
           console.log(res);
           this.setState({ items:res.data});
           this.setState({ loading: false});
       };
       getData();
       
   }
   
    render(){
        const { currentPage,itemsPerPage,items,loading}=this.state;

        const indexOfLastPost=currentPage*itemsPerPage;
        const indexOfFirstPost=indexOfLastPost-itemsPerPage;
        const currentItems=items.slice(indexOfFirstPost,indexOfLastPost);
        const paginate=pageNumber=>this.setState({currentPage: pageNumber});
        const nextPage=()=> this.setState({currentPage: currentPage + 1 });
        const previousPage=()=> this.setState({currentPage: currentPage - 1});
      return(
          <div>
               <HeaderComponent/>
         <br/>
         <br/>
         <br/>
         
         
            <GetTable items={currentItems} loading={loading} />
            <br/>
            <Paginationss itemsPerPage={itemsPerPage} totalitems={items.length}
        paginate={paginate} nextPage={nextPage} previousPage={previousPage}/>
               
           <Footer/>
          </div>
      )
    }

}

export default GetAllComponents;