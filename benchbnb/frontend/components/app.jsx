import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
     <header>

         <h1>Bench BnB</h1>

       <GreetingContainer />
     </header>
     <Switch>
       <AuthRoute exact path="/login" component={LogInFormContainer} />
       <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>

   </div>
);

export default App;
