import React from 'react';
import {BrowserRouter as Router,
  Switch,
  Route, Redirect} from 'react-router-dom';
import DemoCounter from './Components/DemoCounter';
import Clock from './Components/Clock';
export default class App extends React.Component {
  render()
  {
  return (
    <center>
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path = '/' component = {DemoCounter}/>
          <Route exact path = '/clock' component = {Clock}/>
          <Redirect to = "/" component={DemoCounter}/>
        </Switch>
      </Router>
      {/* <h1>Yay</h1> */}
    </div>
    </center>
  );
    }
}

