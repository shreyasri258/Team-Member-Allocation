import './App.css'
import * as React from 'react';
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Footer from './Footer';
//import Content from './Content';
import Employees  from './Employees';


export default function App() {
  const [selectedTeam,setTeam]=useState( "TeamB");

  
  const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

//Local Storage
useEffect (()=>{
  localStorage.setItem('employeeList',JSON.stringify(employees))
    },[employees]);
  
    useEffect (()=>{
      localStorage.setItem('selectedTeam',JSON.stringify(employees))
        },[selectedTeam]);
  

function handleTeamSelectionChange(event){
console.log(event.target.value); 
setTeam(event.target.value);
}
function handleEmployeeCardClick(event){
const transformedEmployees = employees.map((employee)=> employee.id === parseInt(event.currentTarget.id)?(employee.teamName===selectedTeam)?{...employee,teamName:''}:{...employee,teamName:selectedTeam}:employee);

setEmployees(transformedEmployees);
}

  
  return (
    <div>
      <Header selectedTeam={selectedTeam}
      teamMemberCount={employees.filter((employee)=> employee.teamName === selectedTeam).length}
      ></Header>
   
    {/* props drilling */}
     <h1><Employees employees={employees}
                    selectedTeam={selectedTeam}
                    handleEmployeeCardClick={handleEmployeeCardClick}
                    handleTeamSelectionChange={handleTeamSelectionChange}
     
     ></Employees></h1>
      <Footer></Footer>
    </div>
   
    
  );
}
