import React from 'react'

export default function Employee( {employee} ) {
    return (
        
        <>  
            <tr>
                <th>{employee.firstName}</th>
                <th>{employee.lastName}</th>
                <th>{employee.email}</th>
                <th>{employee.remote}</th>
            </tr>
        </>        

    )
}
