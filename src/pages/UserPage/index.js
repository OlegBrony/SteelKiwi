import React, { Component } from 'react';
import './UserPage.css';
import axios                from 'axios';
// import isAbsoluteURL        from 'axios/lib/helpers/isAbsoluteURL';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faLocationArrow }  from '@fortawesome/free-solid-svg-icons';

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAvatar: null,
      userLogin: null,
      userName: null,
      userLocation: null,
      userBio: null,
      creationDate: null,
      githubLink: null,
      userError: null,
    };
  }

  makeRequest = () => {
    axios.get(`https://api.github.com/users/${this.props.match.params.name}`)
      .then(res => {
        console.log(res);
        if (res.message === 'Not Found') {
          this.setState({
            userError: true,
          });
        } else {
          this.setState({
            userAvatar: res.data.avatar_url,
            userLogin: res.data.login,
            userName: res.data.name,
            userLocation: res.data.location,
            userBio: res.data.bio,
            creationDate: res.data.created_at,
            githubLink: res.data.html_url,
            userError: false,
          });
        }
      })
      .catch(err => {
        this.setState({
          userError: true,
        });
      });
  };

  componentWillMount() {
    this.makeRequest();
  }


  render() {
    const {
      userAvatar,
      userLogin: Login,
      userName: Name,
      userLocation: Location,
      userBio: Bio,
      creationDate,
      githubLink,
    } = this.state;

//    <>
//      <h1>Users</h1>
//      {
//        this.props.isLoading ?
//          <img src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
//          : null
//      }
//      {
//        this.props.hasErrored ?
//          <p>Sorry! There was an error loading the items</p>
//          : null
//      }
//      {this.props.items.results ?
//        <UserCard
//          user={this.props.items.results[0]}
//        /> : null}
//
//    </>

    return (
      <div className={'user-detail'}>
        {
          userAvatar ?
            <>
              <img alt={Name} src={userAvatar} className={'user-detail-avatar'}/>
              <div className={'user-detail-info'}>
                <p className={'user-detail-login'}>
                  <span className={'user-detail-label'}>User login</span>: <a href={githubLink}>{Login}</a>
                </p>
                <p className={'user-detail-name'}>
                  <span className={'user-detail-label'}>User name</span>: {Name}
                </p>
                {
                  Location ?
                    <p className={'user-detail-location'}>
                      <span className={'user-detail-label'}><FontAwesomeIcon icon={faLocationArrow}/></span> {Location}
                    </p> : null
                }
                {
                  Bio ?
                    <p className={'user-detail-bio'}>
                      <span className={'user-detail-label'}>User bio</span>: {Bio}
                    </p> : null
                }
                <p className={'user-detail-date'}><span className={'user-detail-label'}>Created</span>: {creationDate}
                </p>
                <p className={'user-detail-link'}>
                  <span className={'user-detail-label'}>GitHub account</span>: <a href={githubLink}>{githubLink}</a>
                </p>
              </div>
            </>
            : null
          //<div>Loading...</div>
        }
      </div>
    );
  }
}

export default UserPage;
