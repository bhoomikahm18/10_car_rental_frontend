import React, { useEffect, useState } from 'react'
// import Header from '../../components/Header/Header.jsx';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../store/car_actions.js';
import { Button, Card, CardActions, CardContent, CardMedia, Collapse, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  // transition: theme.transitions.create('transform', {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));

function Home() {
  const cars = useSelector((state) => state.car.cars);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  console.log(cars);

  useEffect(() => {
    dispatch(getAllCars())
  }, [dispatch]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    < div className='cars_home' >
      {cars.map(car => {
        return <div >
          <Card sx={{
            margin: 2,
            maxWidth: 250,
            // height: 320,
            borderRadius: 2,
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}>
            <CardMedia
              component="img"
              height="194"
              image={car.image}
              alt="Cars Pictures"
            />
            <CardActions disableSpacing>
              <Typography h5>
                {car.name}
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>

                <Typography paragraph>Capacity: {car.capacity}</Typography>
                <Typography paragraph>Fuel Type: {car.fuelType}</Typography>
                <Typography paragraph>{car.rentPerHour} Rent per hour</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      })}

    </ div >
  )
}

export default Home;