import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack() {
    return <this.props.onAdd track={this.props.track} />
  };

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <a className="Track-action" onClick={this.addTrack}><!-- + or - will go here --></a>
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
