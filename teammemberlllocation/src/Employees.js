import * as React from 'react';

import Femaleimage from './images/Femaleimage.jpg'
import Maleimage from './images/Maleimage.jpg'
const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {

   
    return(
  <main className='container'>
    <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
<select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectionChange}>
    <option>TeamA</option>
    <option>TeamB</option>
    <option>TeamC</option>
    <option>TeamD</option>
</select>

        </div>
        </div>
    <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
            <div className='card-collection'>
        {

employees.map((employee) => (
    //add gap between cards & cursor pointer
    <div id={employee.id} className={(employee.teamName === selectedTeam?'card m-2 standout':'card m-2')} style={{cursor:'pointer'}} onClick={handleEmployeeCardClick}>

        {(employee.gender === 'male')?<img src={Maleimage} className='card-img-top'></img>
        :<img src={Femaleimage} className='card-img-top'></img>}
        
        <div className='card-body'>
            <h2 className='card-title'>Full Name:{employee.fullName}</h2>
            <h4 className='card-text'>Designation:{employee.designation}</h4>
        </div>
    </div>
))
 }</div></div>
 </div>
  </main>
    );
}
  export default Employees;