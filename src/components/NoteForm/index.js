import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      newNoteContent: e.target.value,
    });
  };

  writeNote = () => {
    this.props.addNote(this.state.newNoteContent);
    this.setState({
      newNoteContent: '',
    });
  };

  render() {
    return (
      <div>
        <input type="text" placeholder={'write!'} className={'note-input'}
               value={this.state.newNoteContent}
               onChange={this.handleChange}
        />
        <button className={'note-button'} onClick={this.writeNote}>
          Add!
        </button>
      </div>
    );
  }
}

export default NoteForm;
