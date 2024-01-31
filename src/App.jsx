import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import BookingCar from './pages/BookingCar/BookingCar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/bookingcar' element={<BookingCar />} />
      </Routes>
    </div>
  );
}

export default App;
