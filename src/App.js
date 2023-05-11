import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
// import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import MyCart from './pages/MyCart';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        {/* <Footer /> */}
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/mycart" element={<MyCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
