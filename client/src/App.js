import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
  <Router>
    <Route path="/" exact component={Join} />
    {/* not exact params becouse there will be qeuery parameteres in the route */}
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
