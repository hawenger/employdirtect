import React, { useState, useRef } from 'react';
import EmployeeList from './components/EmployeeList';
import RemoteButtons from './components/RemoteButtons'
import './index.css';

function App() {

  let nameInput=useRef();
  const remote = {value: true,
  name:'REMOTE'};
  const onSite = {value: false, name: 'On-Site'}

  const currentEmployees = [{ id: 1, firstName: 'Robert', lastName: 'Smith', email: 'grannysmith@hotmail.com',  remote: remote.name},{ id: 2, firstName: 'Emma', lastName: 'Hockings', email: 'hillsLive@gmail.com',  remote: onSite.name}, { id: 3, firstName: 'Bobby', lastName: 'Mendez', email: 'mandez@gmail.com',  remote: remote.name},{ id: 4, firstName: 'Claude', lastName: 'Debussy', email: 'debutauntnanana@yahoo.com',  remote: remote.name},{ id: 5, firstName: 'Gene', lastName: 'Wilds', email: 'itsalive@gmail.com',  remote: onSite.name}, { id: 6, firstName: 'Eva', lastName: 'Grout', email: 'doeyedmonster@yahoo.com',  remote: remote.name}, { id: 7, firstName: 'Adam', lastName: 'Aunt', email: 'onebyonehoorah@hotmail.com',  remote: remote.name},{ id: 8, firstName: 'Elive', lastName: 'Zigs', email: 'mazeystar@gmail.com',  remote: onSite.name}, { id: 9, firstName: 'Dorris', lastName: 'Ark', email: 'floodzz@gmail.com',  remote: remote.name},{ id: 10, firstName: 'Preston', lastName: 'Buttons Jr.', email: 'arthuritis@yahoo.com',  remote: remote.name},{ id: 11, firstName: 'Gilbert', lastName: 'Grapefruits', email: 'in2deepp@gmail.com',  remote: onSite.name}, { id: 12, firstName: 'Clyde', lastName: 'Dale', email: 'Nayyyborhood@yahoo.com',  remote: remote.name}];
  const allEmployee = currentEmployees;
  const[employees, setEmployees] = useState(currentEmployees)

  function remoteEmployees() {

    setEmployees(employees.filter(function(obj) {
      return obj.remote === remote.name;
    }))
  }
  function onSiteEmployees() {

    setEmployees(employees.filter(function(obj) {
      return obj.remote === onSite.name;
    }))
  }
  function allEmployees() {
    setEmployees(allEmployee);
  }

  function sortAscending() {
    let newData = Object.assign([], employees);
    let sortedData = newData.sort(function(a, b){
      if (a.lastName < b.lastName) return -1;
      else if (a.lastName > b.lastName) return 1;
      return 0;
    });
    setEmployees(sortedData);
  }

  function sortDescending() {
    let newData = Object.assign([], employees);
    let sortedData = newData.sort(function(a, b){
      if (a.lastName > b.lastName) return -1;
      else if (a.lastName < b.lastName) return 1;
      return 0;
    });
    setEmployees(sortedData);
  }

  function lastNameSearch() {
    let newData = Object.assign([], currentEmployees);
    let res=nameInput.current.value.toLowerCase();
    console.log(res)
    setEmployees(newData.filter(function(obj){
     
      return obj.lastName.toLowerCase().match(res)
      
    }))
  }
  let titles = {id: 'EMPLOYEE ID', firstName: 'FIRST NAME', lastName: 'LAST NAME', email:'E-MAIL', remote: 'REMOTE STATUS'}

  return (
    <>
      <h1>DIRTECT EMPLOYEES</h1>
      <br></br>
      <input ref={nameInput} placeholder="Employee last name..." type="text"></input>
      <button onClick={lastNameSearch}>SEARCH</button>
      <br></br>
      <br></br>
      <h4>Sort By:</h4>
      <button onClick={sortAscending}style={{margin:".5em"}}>Last Name (A-Z)</button>
      <button onClick={sortDescending}style={{margin:".5em"}}>Last Name (Z-A)</button>
      <br></br>
      <br></br>
      <h4>Filter:</h4>
      <RemoteButtons remoteEmployees = {remoteEmployees} onSiteEmployees = {onSiteEmployees} allEmployees={allEmployees}/>
      <table>
        <thead>
          <th>EMPLOYEE ID</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>E-MAIL</th>
          <th>REMOTE STATUS</th>
        </thead>
        <tbody>
          <EmployeeList employees = {employees} />
        </tbody>
      </table>
    </>
  )
}
export default App;