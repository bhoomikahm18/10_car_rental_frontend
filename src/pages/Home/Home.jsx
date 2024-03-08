import React, { useEffect } from 'react'
// import Header from '../../components/Header/Header.jsx';
import '../../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/car_actions.js';
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
    < div className='cars_home'>
      {cars.map(car => {
        return <div >
          <Card
            sx={{
              margin: 2,
              width: 250,
              height: 320,
              borderRadius: 2,
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <img height={"65%"} width="100%" src={car.image} alt='car_image' />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car.name}
                <Typography>Capacity: {car.capacity}</Typography>
                <Typography>Fuel Type: {car.Feultype}</Typography>
                <Typography>{car.rentPerHour} Rent /hour</Typography>
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

    </ div >
  )
}

export default Home;