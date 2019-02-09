import React, { Component } from 'react';
import './Search.css';

import ResultItemCard  from '../../components/ResultItemCard';
import ResultItemTable from '../../components/ResultItemTable';
import SearchForm      from '../../components/SearchForm';
import axios           from 'axios';
import { Redirect }    from 'react-router-dom';
import { fire }        from '../../firebaseConfig';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      search: '',
      result: null,
      errors: {
        searchError: false,
      },
      resultMode: 'cards',
      shouldRedirectToIndex: false,
    };
  }

  makeRequest = () => {
    if (this.props.match.params.request === undefined) {
      return;
    }
    axios.get(`https://api.github.com/search/users?per_page=10&q=${this.props.match.params.request}`)
      .then(res => {
        if (res.data.total_count === 0) {
          this.setState({
            errors: {
              searchError: true,
            },
          });
        } else {
          this.setState({
            result: res.data.items,
            errors: {
              searchError: false,
            },
          });
        }
      })
      .catch(err => {
        this.setState({
          result: '',
          errors: {
            searchError: true,
          },
        });
      });
  };

  makeRedirect = setTimeout(() => {
    window.location.href = 'http://localhost:3000';
  }, 3000);

  handleView = (view) => {
    this.setState({
      resultMode: view,
    });
  };

  handleClearInput = () => {
    this.setState({
      shouldRedirectToIndex: true,
    });
  };

  handleSearch = (value, searchResult) => {
    this.setState({
      search: value,
      result: searchResult,
    });
  };

  authSearchListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  };


  componentDidMount() {
    this.setState({ search: this.props.match.params.request });
  }

  componentWillMount(prevProps, prevState) {
    this.authSearchListener();
    this.makeRequest();
  }

  componentWillReceiveProps(nextProps) {
    this.makeRequest();
  }


  render() {
    if (this.state.user) {
      clearTimeout(this.makeRedirect);
      return (
        <div className={'search-page'}>
          {
            this.state.shouldRedirectToIndex ?
              <Redirect to={'/search'}/> :
              null
          }
          <SearchForm onSelectView={this.handleView}
                      onClearInput={this.handleClearInput}
                      onRewriteSearch={this.handleSearch}
                      resultMode={this.state.resultMode}
                      errors={this.state.errors}
                      match={this.props.match.params.request}
          />
          {
            this.state.result ?
              <div className={`search-result-${this.state.resultMode}`}>
                {
                  this.state.resultMode === 'table' ?
                    <ResultItemTable result={this.state.result}/> :
                    this.state.result.map(item => (
                      <ResultItemCard
                        key={item.id}
                        id={item.id}
                        login={item.login}
                        html_url={item.html_url}
                        url={item.url}/>),
                    )
                }
              </div> : null
          }
        </div>
      );
    } else {
      return (
        <div className={'search-page'}>
          <p>You have to log in!</p>
          <p style={{ display: 'none' }}>
            {this.makeRedirect}
          </p>
        </div>
      );
    }
  }
}


export default Search;
