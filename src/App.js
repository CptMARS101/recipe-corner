import './App.css';
import React from 'react';
import NavBar from './COMPONENTS/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        </header>
        <main>
      </main>
      <Outlet />
    </div>
  );
}

export default App;
