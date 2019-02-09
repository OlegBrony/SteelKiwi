import React, { Component } from 'react';
import Note                 from '../../components/Note';
import NoteForm             from '../../components/NoteForm';
import { fire }             from '../../firebaseConfig';
import './NotePage.css';


class NotePage extends Component {
  constructor(props) {
    super(props);
    this.database = fire.database().ref().child('notes');
    this.state = {
      notes: [],
    };
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      });
      this.setState({
        notes: previousNotes,
      });
    });
  }

  addNote = (note) => {
    if (note === '') return;
    this.database.push().set({ noteContent: note });
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


export default NotePage;
