import React, { Component } from 'react';

class ClassForm extends Component {
  
  constructor(props){

    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  };

  nameInput = (event) => {
    console.log(event.target.value);
    this.setState({name: event.target.value});
  };

  emailInput = (event) => {
    console.log(event.target.value);
    this.setState({email: event.target.value});
  };

  passwordInput = (event) => {
    console.log(event.target.value);
    this.setState({password: event.target.value});
  };

  pressSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
    
    return (
      <div>
        <h1>CLASS FORM</h1>
        <form onSubmit={this.pressSubmit}> 
          <label for='name'>Name: </label>
          <br />
          <input type='text' id='name' placeholder='Please Enter your Name' onChange={this.nameInput} value={this.state.name}/>
          <hr />
          <hr />
          <label for='email'>Email: </label>
          <br />
          <input type='email' id='email' placeholder='Please Enter your Email' onChange={this.emailInput} value={this.state.email}/>
          <hr />
          <hr />
          <label for='password'>Password: </label>
          <br />
          <input type='password' id='password' placeholder='Please Enter your Password' onChange={this.passwordInput} value={this.state.password}/>
          <hr />
          <hr />
          <input type='submit' />

        </form>
      </div>
    );
  };
};

export default ClassForm;
