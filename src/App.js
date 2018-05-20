import React, { Component } from 'react';

import ChatListPage from './components/ChatListPage';
import CreateChat from './components/CreateChat';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="">
        <div className="container">
          <h2>Chats</h2>
          <ChatListPage />
          <CreateChat />
        </div>
      </div>
    );
  }
}


export default App;
