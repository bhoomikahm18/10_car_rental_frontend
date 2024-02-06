import React, { useEffect } from 'react'
import Header from '../../components/Header/Header.jsx';
import { useSelector } from 'react-redux';
import { carsAction } from '../../store/index.js';

function Home() {
  const [cars, setCars] = useSelector(state=> state.cars);

  useEffect(() => {
    carsAction()
  })
  return (
    <div>
      <Header />
      <h1>Home page</h1>
    </div>
  )
}

export default Home;