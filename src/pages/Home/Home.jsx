import React, { useEffect } from 'react'
import Header from '../../components/Header/Header.jsx';
import { useSelector } from 'react-redux';
import { getAllCars } from '../../api_helpers/ApiHelpers.jsx';

function Home() {
  const [cars, setCars] = useSelector(state => state.cars);

  useEffect(() => {
    getAllCars()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <Header />
      <h1>Home page</h1>
      <h1>Length of the array is </h1>
    </div>
  )
}

export default Home;