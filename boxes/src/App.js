import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from "./Components/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
