import React from 'react';
import './App.css';
import Fuse from 'fuse.js';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

class App extends React.Component {
  state = {
    postData: [],
    search: '',
    filteredData: []
  }

  componentDidMount() {
    this.setState({
      postData: dummyData,
      filteredData: dummyData
    })
  }

  handleSearchInput = event => {
    this.setState({
      search: event.target.value
    })
  }

  // No fuzzy searches
  // handleSearchSubmit = event => {
  //   event.preventDefault();

  //   let filtering = this.state.postData.filter(post => post.username.includes(this.state.search))

  //   this.setState({
  //     filteredData: filtering,
  //     search: ''
  //   })
  // }

  // Fuzzy searches using fuse.js
  handleSearchSubmit = event => {
    event.preventDefault();

    let options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "username"
      ]
    };

    let fuse = new Fuse(this.state.postData, options);
    let result = fuse.search(this.state.search)

    this.setState({
      filteredData: result
    })
  }

  render() {
    return (
      <div className="App">
        <div className="nav-section">
          <SearchBar handleSearchInput={this.handleSearchInput} value={this.state.search} handleSearchSubmit={this.handleSearchSubmit} />
        </div>
        <div className="post-container">
          {this.state.filteredData.map(post => <PostContainer post={post} key={post.id} />)}
        </div>
      </div>
    );
  }
}

export default App;
