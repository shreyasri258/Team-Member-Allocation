import './App.css'
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Footer from './Footer';
//import Content from './Content';
import Employees  from './Employees';


export default function App() {
  return (
    <div>
      <h1>Hello</h1>
   
    
     <h1><Employees></Employees></h1>
      <Footer></Footer>
    </div>
   
    
  );
}
