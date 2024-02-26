import React, { useEffect, useState } from 'react'
// import Header from '../../components/Header/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/car_actions.js';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { carActions } from '../../store/car_slice.js';
import { ExpandMore } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

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

  console.log(cars);

  useEffect(() => {
    dispatch(getAllCars())
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getAllCars())
  //     .then((data) => setCarList(data.cars))
  //     .then((data)=> console.log(data))
  //     .catch(()=>console.log("Failed to get all data"))
  // })

  return (
    <>
      <Card
        sx={{
          margin: 2,
          width: 250,
          height: 320,
          borderRadius: 5,
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <img height={"50%"} width="100%" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Car name
          </Typography>
        </CardContent>
        <CardActions>
          <ExpandMore>
            <Button
              variant="outlined"
              fullWidth
              size="small"
            >
              Book Car
            </Button>
          </ExpandMore>

        </CardActions>
      </Card>
    </>
  )
}

export default Home;