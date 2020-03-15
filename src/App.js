import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.scss'

import Header from "./components/Header"
import Teams from "./components/Team/"
import TeamItem from "./components/TeamItem/"

function App() {
  return (
      <Provider store={store}>
        <Header />
        <div className="main">
            <div className="team-list">
                <Teams />
            </div>
            <div className="team-item">
                <TeamItem/>
            </div>
        </div>

      </Provider>
  );
}

export default App;
