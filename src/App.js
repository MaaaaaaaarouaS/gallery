import React from 'react';
import Signup from './components/Signup';
import SignupAccount from './components/SignupAccount';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Forgetpwd from './components/Forgetpwd';
import Resetpwd from './components/Resetpwd';
import Notif from './components/Notif';
import Verify from './components/Verify';
import Gallery from './components/Gallery';
import Index from './components/Index';

function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/Signup' component={Signup} style={{backgroundColor:"#FFFF"}}/>
          <Route exact path='/Signup_with_Account' component={SignupAccount} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/forget_password' component={Forgetpwd} />
          <Route exact path='/reset_password' component={Resetpwd} />
          <Route exact path='/notif' component={Notif} />
          <Route exact path='/verify' component={Verify} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;