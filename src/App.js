import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './components/Main';
import Career from './components/Career'

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <Routes >
          <Route exact path='/' element={<Main />} />
          <Route exact path='/careers' element={<Career />} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;
