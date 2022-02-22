import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Greetings from '@/components/Greetings';
import Counter from '@/components/Counter';
import Pokemon from '@/components/Pokemon';

function App() {
  return (
    <div className="App">
      <Greetings name="jinhyukoo" />
      <nav>
        <Link to="/page1">page1</Link>
        <Link to="/page2">page2</Link>
        <Link to="/page3">page3</Link>
        <Link to="/page1/sub">sub</Link>
        <Link to="/page1/1">Page ID</Link>
        <Link to="/page1/2">Page ID2</Link>
      </nav>
      <Outlet />
      <Counter />
      <Pokemon />
    </div>
  );
}

export default App;
