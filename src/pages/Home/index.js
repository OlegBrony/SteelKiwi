import React, { Component } from 'react';
import './Home.css';
import { fire }             from '../../firebaseConfig';
import StyledFirebaseAuth   from 'react-firebaseui/StyledFirebaseAuth';
import LogOutButton         from '../../components/LogOutButton';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        fire.firebase_.auth.GithubAuthProvider.PROVIDER_ID,
        fire.firebase_.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => true,
      },
    };
  }

  authListener = e => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
      else this.setState({ user: null });
    });
  };

  componentDidMount() {
    this.authListener();
  }

  logOut = () => {
    fire.auth().signOut();
    window.location.reload();
  };


  render() {
    return (
      <div className={'body'}>
        <img src="images/sign-in-photo.png" alt="myphoto" className={'home-photo'}/>
        {
          this.state.user ?
            <LogOutButton logOut={this.logOut}/>
            :
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={fire.auth()}/>
        }
      </div>
    );
  }
}


export default Home;
