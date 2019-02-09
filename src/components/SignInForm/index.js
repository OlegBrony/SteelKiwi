import React, { Component }          from 'react';
import './SignInForm.css';
import { FontAwesomeIcon }           from '@fortawesome/react-fontawesome';
import { faSignInAlt, faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faGithub }                  from '@fortawesome/free-brands-svg-icons';
import { fire }                      from '../../firebaseConfig';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };

  }

  handleSubmit = e => {
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.login, this.state.password)
      .then(user => {
      })
      .catch(err => {
        console.log(err);
      });
  };

  signUp = e => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.login, this.state.password)
      .catch(err => {
        if (err) console.log(err);
      });
  };

  authWithGithub = e => {
    e.preventDefault();
    console.log(fire.firebase_.auth.GithubAuthProvider);
    // fire.auth().GithubAuthProvider();
    const githubProvider = new fire.firebase_.auth.GithubAuthProvider();

    // const githubProvider = new fire.auth.GithibAuthProvider();
    githubProvider.addScope('repo');
    fire.auth().signInWithRedirect(githubProvider)
      .then(res => {
        let token = res.credential.accessToken;
        let user = res.user;
      })
      .catch(err => {
        const { errorCode, errorMessage, email, credential } = err;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('account-exists-with-different-credential');
        } else console.log(err);
      });
  };


  render() {
    return (
      <form className={'sign-in-form'}>
        <h1 className={'sign-in-text form-item'}>Sign in, please</h1>
        <input type="email" placeholder={'Login'} className={'sign-in-input form-item'} name={'login'}
               onChange={this.handleChange} value={this.state.login}/>
        <input type="password" placeholder={'Password'} className={'sign-in-input form-item'} name={'password'}
               onChange={this.handleChange} value={this.state.password}/>
        <div className={'buttons'}>
          <button type={'submit'} className={'sign-in-button form-item sign-button'}
                  onClick={this.login}>
            <FontAwesomeIcon icon={faSignInAlt}/>
          </button>
          <button className={'sign-up-button form-item sign-button'}
                  onClick={this.signUp}>
            <FontAwesomeIcon icon={faRegistered}/>
          </button>
          <button className={'sign-in-github form-item sign-button'}
                  onClick={this.authWithGithub}>
            <FontAwesomeIcon icon={faGithub}/>
          </button>
        </div>
      </form>
    );
  }
}

export default SignInForm;
