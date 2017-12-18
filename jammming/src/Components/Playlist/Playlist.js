import Tracklist from '../Tracklist/Tracklist.js';
import 'Playlist.css';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
  }

  handleNameChange(input) {
    const name = input.target.value
    this.props.onChange(name);
  };

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={handleNameChange()} />
        <Tracklist onRemove={this.props.onRemove}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
};
