import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import fire from './fire';
import auth from "firebase/compat/auth";  // eslint-disable-line no-unused-vars
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import './App.css';


function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, sethasAccount] = useState(false);

  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }
  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin = () =>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err) => {
    /*eslint default-case: "error"*/
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
            // no default
      }
    })

  };
  
  const handleSignup =() =>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err) => {
   /*eslint default-case: "error"*/
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
            // no default
      }
    })
  }
  
const handleLogout = () =>{
  fire.auth().signOut();
}
const authListener = () =>{
  fire.auth().onAuthStateChanged((user) =>{
    if(user){
      clearInputs();
      setUser(user);
    }
    else{
      setUser("");
    }
  });
};

useEffect(() =>{
  authListener()
})

  return (
    <div className="App">
      <Router>
      {user ? (
          <Welcome handleLogout={handleLogout} />
      ) :(
        <Login 
        email={email} 
        user={user}
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin} 
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        sethasAccount={sethasAccount}
        emailError={emailError}
        passwordError={passwordError} />
      )}
      <Switch>
      <Route exact path="/"/>
       <Route exact path="/profile" component={Profile} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
