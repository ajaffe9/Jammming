import './SearchResults.css';

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <searchResults = {this.state.searchResults} />
      </div>
    );
  }
};
