import Track from '../Track/Track.js';
import './TrackList.css';

export class TrackList extends React.Component {
  render() {
    tracks: {this.props.searchResults};
    return (
      <div className="TrackList">
        {this.props.tracks.map(track =>
          {
            return <Track track={track} key={track.id} name={track.name} artist={track.artist} album={track.album} onAdd={this.props.onAdd} />
          })
        }
        <TrackList tracks={this.props.playlistTracks} />
      </div>
    );
  }
};
