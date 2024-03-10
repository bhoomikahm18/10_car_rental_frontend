import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import BookingCar from './pages/BookingCar/BookingCar';
// import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navbar from './pages/Navbar/Navbar';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url("https://downloadhdwallpapers.in/wp-content/uploads/2018/09/Luxury-Car-Animated-Gif-Hot.gif")`
    }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/register' element={<Register />} />
        <Route path='/bookingcar' element={<BookingCar />} />
      </Routes>
    </div>
  );
}

export default App;
