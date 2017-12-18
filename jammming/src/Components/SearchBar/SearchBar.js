import './SearchBar.css';

export class SearchBar extends React.Component {


  search() {
    
  };

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    );
  }
};
