import React, { Component }               from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NotePage                           from './pages/Note';
import HomePage                           from './pages/Home';
import SearchPage                         from './pages/Search';
import UserPage                           from './pages/UserPage';
import Header                             from './components/Header';


class App extends Component {
  componentDidMount() {
    // window.localStorage.setItem('user', '')
  }

  render() {
    return (
      <Router>
        <>
          <Header/>
          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={'/search'} component={SearchPage}/>
          <Route exact path={'/search/:request'} component={SearchPage}/>
          <Route exact path={'/user/:name'} component={UserPage}/>

          {/*<Route path={'/notes'} exact component={NotePage}/>*/}
        </>
      </Router>
    );
  }
}

export default App;
