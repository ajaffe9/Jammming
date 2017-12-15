import Track from '../Track/Track.js';
import './TrackList.css';

export class TrackList extends React.Component {
  render() {
    tracks: {this.props.searchResults};
    return (
      <div className="TrackList">
        <!-- You will add a map method that renders a set of Track components  -->
        <track={this.props.tracks.map()} />
        {this.props.track.name}
        {this.props.track.artist}
        {this.props.track.album}
      </div>
    );
  }
};
