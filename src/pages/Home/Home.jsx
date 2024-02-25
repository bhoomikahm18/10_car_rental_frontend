import React, { useEffect } from 'react'
import Header from '../../components/Header/Header.jsx';
import { useSelector } from 'react-redux';
import { getAllCars } from '../../api_helpers/ApiHelpers.jsx';
// import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import { ExpandMore } from '@mui/icons-material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Home() {
  const [cars, setCars] = useSelector(state => state.car.cars);

  useEffect(() => {
    getAllCars()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, []);

  console.log(cars);

  return (
    <>
      <Header />
      <h1>Home</h1>
      {/* <h1>Length of the cars are {cars.length}</h1> */}
    </>
  )
}

export default Home;