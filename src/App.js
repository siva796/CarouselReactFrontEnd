import React, { Component } from 'react';
import './App.css';
import './index';
import SignUpForm from './Components/SignUpForm';
import ReactButtonClickForm from './Components/ReactButtonClickForm';




import {  BrowserRouter as Router,Route, Switch, Redirect } from 'react-router-dom';




import UpdateComponent from './Components/UpdateComponent';
import SoftDeleteComponent from './Components/SoftDeleteComponent';
import GetComponent from './Components/GetComponent';


import GetAllComponent from './Components/GetAllComponent';

import ReactFormWithValidation from './Components/ReactFormWithValidation';
import MainForm from './Components/FormValidationComponents/MainForm';

import tenthForm from './Components/tenthForm';
import newForm from './Components/newForm';


import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import updatePage from './Components/updatePage';
import LoginComponent from './Components/LoginComponent';

import GetAllComponents from './Components/GetAllComponents';
import Register from './Components/Register';


const cricketer=({match})=>{
return(<h1>welcome cricketer {match.params.username}</h1>)
}

toast.configure();
function App() {
  
  return (
    
     
    <Router>
    {/* <Switch> */}
    {/* <div className="App"> */}

      <Route path="/" exact strict render={
        ()=>{
          return(<h1>welcome to home</h1>);
        }
      }/>
      <Route path="/user" exact render={
        ()=>{
          return(<h1>welcome to User</h1>);
        }
      }/>
      {/* <Route path="/404" component={PageNotFound} />
                    <Redirect to="/404" />
      <Route path="*"   component={PageNotFound} /> */}
       <Route path="/new" exact strict component={newForm}/>
       <Route path="/userData" exact strict component={Register}/>
       <Route path="/validate" exact strict component={ReactFormWithValidation}/>
       <Route path="/update" exact strict  component={UpdateComponent}/>
       <Route path="/login"  component={LoginComponent}/>
       <Route path="/delete" exact strict component={SoftDeleteComponent}/>
       <Route path="/MainGet" component={GetAllComponent}/>
       <Route path="/updatePage" component={updatePage}/>
       <Route path="/userMain" exact strict component={MainForm}/>
       {/* <Route path="/userFirstPage" exact strict component={UserPageCarousel}/> */}
       {/* <Route path="/MainUpdate" exact strict component={MainPageExampleUpdate}/> */}
       <Route path="/userPage" exact strict component={ReactButtonClickForm}/>
       <Route path="/Form" exact strict component={SignUpForm}/>
       <Route path="/getallData" exact strict component={GetComponent}/>
       <Route path="/tenth" exact strict component={tenthForm}/>
   
       <Route path="/GetAll"  exact strict   component={GetAllComponents}/>
    {/* </div> */}
    {/* </Switch> */}
    </Router>
  
  );
}



export default App;












 {/* <Route path="/cric/:username" exact strict component={Pagination}/> */}
          {/* <Route path="/getData" exact strict component={PostList}/> */}
          {/* <Route path="/get" exact strict component={UserList}/> */}
{/* <BrowserRouter>
    <div>
      <Route path='userData' component={PostForm}/>
      <Route path='getData' component={PostList}/>
      <Route path='update' component={UpdateComponent}/>
      <Route path='delete' component={SoftDeleteComponent}/>

    </div>
    </BrowserRouter> */}


        {/* <FormsComponent/>  */}
      {/* <SignUpForm/>  */}
      {/* <ReactButtonClickForm/> */}
      {/* <PostList/> */}
      {/* <PostForm/> */}
      {/* <SoftDeleteComponent/> */}
      {/* <UpdateComponent/> */}
      {/* <FormsComponent/> */}
           {/* <ReactForm/> */}
      {/* <Inline/> */}
      {/* <StyleSheets primary={true}/> */}
      {/* <Counter /> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <Application/> */}
      {/* <Greet Name="Ponting" profileName="Batsman"/>
      <Greet Name="sachin" profileName="All Rounder"/>
      <Greet Name="Ab" profileName="Batsman"/> */}
     {/* <Welcome Name="Ponting" profileName="Batsman"/>  
     <Welcome Name="Pathan" profileName="AllRounder"/>  
     <Welcome Name="steyn" profileName="Bowler"/>  */}
     {/* <Message/>  */}
     {/* <Hellow/> */}





























































