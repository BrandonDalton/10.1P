import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import './styles/Navigation.scss'
import './styles/Footer.scss'
import './styles/RequesterTask.scss'

import Navigation from './components/navigation.jsx';
import Footer from './components/footer.jsx';
import RequesterTask from './components/requesterTask.jsx';

function App() {
  return (
    <div className="App">
      <Navigation />
      <RequesterTask />
      <Footer />
    </div>
  );
}

export default App;
