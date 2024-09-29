import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import RestrictedRoute from './components/RestrictedRoute';

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <RestrictedRoute path="/" element={<Home />}/> */}
        </Routes>
    </Router>
    
  );
}

export default App;




// // import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         header
//       </header>
//       <div>
//         body
//       </div>
//     </div>
//   );
// }

// export default App;
