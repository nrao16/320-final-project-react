// import React from 'react'
// import { Grid } from '@mui/material';
// import invokeRESTApi from '../services/invokeRESTApi';
// import FavoritesList from '../components/FavoriteComponents/FavoritesList';

// export async function loader() {
//   const url = `${process.env.REACT_APP_NYT_API_BASE_URL}/movies/v2/reviews/picks.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`;
//   return invokeRESTApi(url);
// }
// const FavoritesPage = ({favorites, removeFromFavorites}) => {

//   const gridItemBreakpoint = 12;

//   return (
//     <Grid container spacing={1}>

//       <Grid container item xs={gridItemBreakpoint} sm={gridItemBreakpoint} md={gridItemBreakpoint}>
//         <FavoritesList favorites={favorites} removeFromFavorites={removeFromFavorites} />
//       </Grid>

//     </Grid>
//   )
// }

// export default FavoritesPage