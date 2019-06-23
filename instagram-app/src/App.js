import React from 'react';
import './App.css';

import LoginPage from './components/Login/LoginPage';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';

function App() {
  const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
    </div>
  );
}

export default App;
