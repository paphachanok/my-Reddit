import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Adjust path to your store file
import './App.css';
import SubReddit from './features/subReddits/SubReddits';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SubReddit />
      </div>
    </Provider>
  );
}

export default App;
