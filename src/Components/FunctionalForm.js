import React, { useState } from 'react';


const FunctionalForm = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const nameInput = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const emailInput = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const passwordInput = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const pressSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div>
        <h1>FUNCTIONAL FORM</h1>
          <form onSubmit={pressSubmit}> 
            <label for='name'>Name: </label>
            <br />
            <input type='text' id='name' placeholder='Please Enter your Name' onChange={nameInput} value={name}/>
            <hr />
            <hr />
            <label for='email'>Email: </label>
            <br />
            <input type='email' id='email' placeholder='Please Enter your Email' onChange={emailInput} value={email}/>
            <hr />
            <hr />
            <label for='password'>Password: </label>
            <br />
            <input type='password' id='password' placeholder='Please Enter your Password' onChange={passwordInput} value={password}/>
            <hr />
            <hr />
            <input type='submit' />
          </form>
      </div>
    </div>
  );
};

export default FunctionalForm;
