import React      from 'react';
import 'semantic-ui-css/semantic.min.css';
import './LogOutButton.css';
import { Button } from 'semantic-ui-react';


const LogOutButton = (props) => (
  <div className={'log-out-block'}>
    <p className={'log-out-text'}>want to log in with another account?</p>
    <Button className={'log-out-button'} onClick={props.logOut}>Log out</Button>
  </div>
);


export default LogOutButton;
