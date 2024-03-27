import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <h1>Hello, World!</h1>
      <p>This is a basic React application.</p>
    </div>
  );
}

export default App;
