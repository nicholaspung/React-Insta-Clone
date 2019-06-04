import React from 'react';
import './App.css';

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

  handleSearchSubmit = event => {
    event.preventDefault();

    let filtering = this.state.postData.filter(post => post.username.includes(this.state.search))

    this.setState({
      filteredData: filtering,
      search: ''
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
