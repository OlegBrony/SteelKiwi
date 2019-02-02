import React, { Component } from 'react';
import './Note.css'

class Note extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'note fare-in'}>
        <p className={'note-content'}>{this.props.noteContent}</p>
      </div>
    );
  }
}

export default Note;
