import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpFinished from '../pages/SignUpFinished';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/cadastro" exact component={SignUp} />
        <Route path="/cadastro/finished" exact component={SignUpFinished} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
