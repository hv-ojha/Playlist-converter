import React, { useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField'

function App() {
  const [ link, setLink ] = useState('');
  const api = '[API_KEY]';

  const textChange = e => {
    setLink(e.target.value);
  }
  const searchPlayList = () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=${link}&key=${api}`;
    console.log(url);
  }
  
  return (
    <div className="homePage">
      <h1>Playlist Converter</h1>
      <div className="inputBox">
        <TextField onChange={textChange.bind(this)} className="textfield" placeholder="Paste your link here" />
        <button onClick={searchPlayList()} className="btn-check">Check Link</button>
      </div>
      <div className="output">

      </div>
    </div>
  );
}

export default App;
