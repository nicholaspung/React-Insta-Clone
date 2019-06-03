import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

class App extends React.Component {
  state = {
    dummyData
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(post => <PostContainer post={post} key={post.id} />)}
      </div>
    );
  }
}

export default App;
