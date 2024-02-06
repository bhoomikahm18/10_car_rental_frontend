import React, { useEffect } from 'react'
import Header from '../../components/Header/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { carsAction } from '../../store/index.js';
import { getAllCars } from '../../api_helpers/ApiHelpers.jsx';

function Home() {
  const [cars, setCars] = useSelector([]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCars())
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