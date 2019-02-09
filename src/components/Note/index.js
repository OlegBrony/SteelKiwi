import React from 'react';
import './Note.css';


const Note = (props) => (
  <div className={'note fare-in'}>
    <p className={'note-content'}>{props.noteContent}</p>
  </div>
);


export default Note;
