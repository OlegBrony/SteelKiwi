import React, { Component } from 'react';
import './SearchForm.css';
import { Button, Input }    from 'semantic-ui-react';
import { debounce }         from 'throttle-debounce';
import { Redirect }         from 'react-router-dom';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.match || '',
      result: null,
      errors: {
        searchError: false,
      },
      shouldRedirect: false,
    };
  }

  handleInputChange = (e) => {
    if (e.target.value === '') {
      this.setState({
        search: e.target.value,
        errors: {
          searchError: false,
        },
      });
    } else {
      this.setState({ search: e.target.value });
      this.debouncedInputHandler();
    }
  };

  clearInput = () => this.props.onClearInput();
  tableMode = () => this.props.onSelectView('table');
  cardsMode = () => this.props.onSelectView('cards');


  rewriteSearch = () => {
    this.setState({
      shouldRedirect: true,
    });
    if (!this.state.errors.searchError) {
      this.props.onRewriteSearch(this.state.search, this.state.result);
    }
  };

  debouncedInputHandler = debounce(300, this.rewriteSearch);


  render() {
    return (
      <div className={'search-form'}>
        <Input
          name={'search'} placeholder={'search...'}
          value={this.state.search} onChange={this.handleInputChange}
          error={this.state.errors.searchError}
          className={'search-input'} autoFocus={true}
        />
        <Button className={'search-btn'} primary content={'Search!'} onClick={this.handleInputChange}/>
        <Button className={'search-btn'} secondary content={'Clear inputs'} onClick={this.clearInput}/>
        <Button.Group className={'search-mode'}>
          <Button className={this.props.resultMode === 'cards' ? 'active' : null}
                  onClick={this.cardsMode}>Card mode</Button>
          <Button.Or/>
          <Button className={this.props.resultMode === 'table' ? 'active' : null}
                  onClick={this.tableMode}>Table mode</Button>
        </Button.Group>
        {this.state.shouldRedirect ?
          <Redirect to={`/search/${this.state.search}`}/> :
          null
        }
      </div>
    );
  }
}

export default SearchForm;
