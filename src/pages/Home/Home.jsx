import React, { useEffect, useState } from 'react'
// import Header from '../../components/Header/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/car_actions.js';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { carActions } from '../../store/car_slice.js';
import { ExpandMore } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

function Home() {
  const cars = useSelector((state) => state.car.cars);
  const dispatch = useDispatch();

  console.log(cars);

  useEffect(() => {
    dispatch(getAllCars())
  }, [dispatch]);


  return (
    <>
      {cars.map(car => {
        return <div className='col-sm-4'>
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
            <img height={"50%"} width="100%" src={car.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car.name}
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
        </div>
      })}

    </>
  )
}

export default Home;