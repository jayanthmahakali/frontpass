import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
          <Sidebar/>
          <Dashboard/>
        </div>
      </div> 
    </>
  )
}

export default App;
