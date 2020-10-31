import React, {useRef} from 'react';

export default function Form(props) {

    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const idInput = useRef();
    const emailInput = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        const firstName = firstNameInput.current.value;
        const lastName = lastNameInput.current.value;
        const empId = idInput.current.value;
        const empEmail = emailInput.current.value;

        console.log(firstName);
        
        console.log(lastName);
        
        console.log(empId);
        
        console.log(empEmail);
        }
      
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="firstname">First Name:</label>
                <input  ref={firstNameInput}type="text" placeholder="(not required)"/>
                <label for="lastname">Last Name:</label>
                <input  ref={lastNameInput}type="text" placeholder="(not required)"/>
                <label for="email">E-mail:</label>
                <input  ref={emailInput}type="email" placeholder="(not required)"/>
                <label for="email">Employee ID:</label>
                <input  ref={idInput}type="number" placeholder="(not required)"/>
                <label for="exact">EXACT</label>
                <input  type="checkbox" name="exact" id="exact"/>
                <button ClassName="btn" type="submit">SEARCH</button>
            </form>
            <br></br>
        </div>
    )
}
