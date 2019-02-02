import React, { Component } from 'react';
import Note                 from './components/Note';
import NoteForm             from './components/NoteForm';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        // { id: 1, noteContent: 'Note 1' },
        // { id: 2, noteContent: 'Note 2' },
      ],
    };
  }

  addNote = (note) => {
    if (note === '') {
      return
    }
    this.setState({
      notes: [
        ...this.state.notes,
        { id: this.state.notes.length, noteContent: note, },
      ],
    });
  };


  render() {
    return (
      <div className={'notes-wrapper'}>
        <div className={'notes-header'}>
          <h1>React &#60;3 Firebase</h1>
        </div>
        <div className={'notes-body'}>
          {
            this.state.notes.map(item =>
              <Note noteContent={item.noteContent} noteId={item.id} key={item.id}/>,
            )
          }
        </div>
        <div className={'notes-footer'}>
          <NoteForm addNote={this.addNote}/>
        </div>
      </div>
    );
  }
}

export default App;
