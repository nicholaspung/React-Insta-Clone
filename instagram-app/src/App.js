import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

class App extends React.Component {
  state = {
    postData: []
  }

  componentDidMount() {
    this.setState({
      postData: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <div className="nav-section">
          <SearchBar />
        </div>
        <div className="post-container">
          {this.state.postData.map(post => <PostContainer post={post} key={post.id} />)}
        </div>
      </div>
    );
  }
}

export default App;
