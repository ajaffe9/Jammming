import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    return <this.props.onAdd track={this.props.track} />
  };

  removeTrack() {
    return <this.props.onRemove track={this.props.onRemove} />
  };

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <a className="Track-action" onClick={this.addTrack} onClick={this.removeTrack}><!-- + or - will go here --></a>
      </div>
    );
    renderAction() {
      if (isRemoval()) {
        return '-';
      } else {
        return '+';
      };
    };
  }
};
