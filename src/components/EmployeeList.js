import React from 'react';
import Employee from './Employee'
import {remote} from './FilterButton'

export default function EmployeeList( { employees } ) {
    return (
        
       employees.map(employee => {
           return <Employee key={employee.id} employee={employee} />
       })
    )
}
