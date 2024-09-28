import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from "./components/MovieList";
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState('');

  // Handle search input
  const handleSearch = (term) => {
    // console.log(term, 'in app file');
    
    setSearchTerm(term);
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={<MovieList searchTerm={searchTerm}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
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
