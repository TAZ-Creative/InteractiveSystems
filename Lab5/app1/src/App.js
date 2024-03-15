import logo from './logo.svg';
import About from './About';
import './App.css';

function TestComponent() {
  return (
    <button>Click here</button>
  )
}

function SignUp() {
  return (
    <button>Sign Up</button>
  )
}

function LogIn() {
  return (
    <button>Log In</button>
  )
}

let isNewUser = true;
// let content;

// if(isNewUser)
// {
//   content = <SignUp/>;
// }
// else
// {
//   content = <LogIn/>;
// }

function App() {
  return (
    <div>
      <h1>Azeem is here</h1>
      <p>Paragraph</p>
      <TestComponent/>
      <About/>
      {isNewUser? <SignUp/>: <LogIn/>}
    </div>
  );
}

export default App;
