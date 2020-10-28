import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';

function App() {
  const[employees, setEmployees] = useState(['Employee 1', 'Employee 2'])
  return (
    <>
    <input type="text"/>
    <EmployeeList employees = {employees} />
    <button>SEARCH</button>
    </>
  )
}

export default App;
