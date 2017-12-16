import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: [
      name: this.name,
      artist: this.artist,
      album: this.album,
      playlistName: '',
      playlistTracks: [{this.name, this.artist, this.album}]
    ]};
    this.addTrack = this.addTrack.bind(this);
  };

  addTrack(track) {
    if (track.id === this.state.playlistTracks) {
      return 'Track is already in Playlist';
    } else {
      return [{this.state.playlistTracks} + {this.track}];
    }
  };

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks:{this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
