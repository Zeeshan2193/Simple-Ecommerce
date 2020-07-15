import React from 'react';
import './App.css'


import {BrowserRouter as Router, Routes, Route, NavLink, Link, Outlet, useParams} from "react-router-dom";
//import { Link } from 'react-router-dom';

function App() {
  return (
    
      
      
  <Router>
    
      <ul className="nav">
      <NavLink to="/" as= 'li'>Home</NavLink>
      <NavLink to="launch" as = 'li'>Launch</NavLink>
      </ul>
    



    <h1>WELCOME DEAR</h1>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="launch" element={<Launch />}>
        <Route path="/" element={<LaunchIndex/>} />
        <Route path=":slug" element={<LaunchShoe/>} />
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  </Router>
  );
}
function PageNotFound() 
{
 return <h2>Page Not Found </h2> 
}
function LaunchShoe() {
  const {slug} = useParams();
  const shoe = shoes[slug];
  if(! shoe)
  {
    return <h3>Not Found</h3>
  }
  const {name, img} =shoe;
  return <div>
  <h2>{name}</h2>
  <b><img src = {img} /></b>

  </div>
  
}

function LaunchIndex(){ return (<><h2>List Of Product</h2><ul>
  {Object.entries(shoes).map(([slug, {name, img}]) => (<li key ={slug}><Link to={`/launch/${slug}`}><h2>{name}</h2>
    <img src = {img} alt ={name}></img></Link></li>))}</ul></>)}

function Launch() { return(<><h1>Here is Launch</h1><Outlet /></>) }
function Home() {return(<div><h1>Here is Home</h1></div>)}
const shoes = {
  "air-jordan-1":{
    name : "VALOUR BLUE",
    img : "https://www.Google.com",
  },
  "air-jordan-2":{
    name : "VALOUR BLUE",
    img : "https://www.Google.com",
  },
  "air-jordan-3":{
    name : "VALOUR BLUE",
    img : "https://www.Google.com",
  },
}
export default App;
