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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  };

  addTrack(track) {
    if ({this.state.playlistTracks}.includes(track.id)) {
      return 'Track is already in Playlist';
    } else {
      return [{this.state.playlistTracks}].push(this.track);
    }
  };

  removeTrack(track) {
    if ({this.state.playlistTracks}.includes(track.id)) {
      return {this.state.playlistTracks}.slice(this.track);
    } else {
      return 'Error'
    }
  };

  updatePlaylistName = name => {
    returns this.state.playlistName;
  };

  savePlaylist() {
    return const trackURIs = [this.state.playlistTracks.uri];
  };

  search(term) {
    console.log(term)
  };

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.state.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks:{this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
