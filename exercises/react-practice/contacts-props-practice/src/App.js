import React, { Component } from 'react';
import FriendList from './FriendList';

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <FriendList />
      </div>
    );
  }
}
