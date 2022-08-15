import React from 'react';
import  {Routes, Route} from 'react-router-dom';
import Description from './Components/Description';
// import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Movies from './Components/Movies';


function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Movies/>} />
        {/* <Route path='/movies' element={} /> */}
        <Route path='/description/:title' element={<Description/>} />
      </Routes>
    </div>
  );
}

export default App;

