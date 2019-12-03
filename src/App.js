import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CameraAnalysis from './containers/CameraAnalysis/CameraAnalysis';
import UserList from './containers/UserList/UserList';
import Pagination from './components/Pagination/Pagination';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CameraAnalysis />
      <UserList />
      <Pagination />
    </div>
  );
}

export default App;
