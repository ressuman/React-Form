// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import ClassForm from './Components/ClassForm';
import FunctionalForm from './Components/FunctionalForm';

function App() {
  return (
    <div className='App'> 
      <hr />
      <br />
      <br />
      <ClassForm />
      <hr />
      <hr />
      <hr />
      <br />
      <br />
      <FunctionalForm />
      <hr />
    </div>
  );
};

export default App;
