import React from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Home } from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
