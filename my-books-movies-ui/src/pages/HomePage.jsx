import React from 'react'
import { Grid } from '@mui/material';
import BooksPage from './BooksPage';
import MoviesPage from './MoviesPage';
import AppHeader from '../components/AppHeader';
import { styled } from '@mui/material/styles';
import { Box, CardMedia } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 8,
    '&:hover': {
        backgroundColor: 'grey',
    },
}));

const HomePage = () => {
    return (
        <Box>
            <Box >
                <AppHeader title="My Favorite Books and Movies" />
            </Box>
            <Box>
                <Grid container>
                    <Grid item xs={5} sm={6} md={6} lg={6}>
                        <Item>
                            <Link to="/books">
                                <CardMedia sx={{ height: '60vh', }}
                                    component={"img"}
                                    src={"https://img.freepik.com/free-vector/white-bookshelf-mockup-books-shelf-library_107791-2457.jpg?w=2000"}
                                />
                                {/* <img max-width="100%" src="https://img.freepik.com/free-vector/white-bookshelf-mockup-books-shelf-library_107791-2457.jpg?w=2000" alt="Book Shelf"></img> */}
                            </Link>
                        </Item>
                    </Grid>

                    <Grid item xs={5} sm={6} md={6} lg={6}>
                        <Item>
                            <Link to="/movies">
                                <CardMedia sx={{ height: '60vh' }}
                                    component={"img"} src="https://previews.123rf.com/images/leberus/leberus2006/leberus200600016/149868636-online-cinema-with-popcorn-soda-and-3d-glasses.jpg" alt="Movies"></CardMedia>
                            </Link>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default HomePage