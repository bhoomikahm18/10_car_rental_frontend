import React, { useEffect, useState } from 'react'
// import Header from '../../components/Header/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/car_actions.js';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { carActions } from '../../store/car_slice.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  const cars = useSelector((state) => state.car.cars);
  const dispatch = useDispatch();

  // const [carList, setCarList] = useState();
  console.log(cars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getAllCars())
  //     .then((data) => setCarList(data.cars))
  //     .then((data)=> console.log(data))
  //     .catch(()=>console.log("Failed to get all data"))
  // })

  return (
    <div>
      <Box>
        {cars.map(car => {
          <div>{car.name}</div>
        })}
      </Box>
    </div>
  )
}

export default Home;