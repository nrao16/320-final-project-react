import React from 'react'
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Card, CardMedia, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledCard = styled(Card, {
    // Make sure props are forwarded
    shouldForwardProp: (prop) => true,
})(({ theme }) => ({
    '&:hover': {
        backgroundColor: '#000080',
    },
    '& .MuiCardMedia-img': {
        height: '70vh',
    },
}));

const HomePage = () => {
    return (
        <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <StyledCard>
                    <CardActions>
                        <Link to="/books">
                            <CardMedia
                                component={"img"}
                                src={"https://img.freepik.com/free-vector/white-bookshelf-mockup-books-shelf-library_107791-2457.jpg?w=2000"}
                                alt="Image of bookshelf with books"
                            />
                        </Link>
                    </CardActions>
                </StyledCard>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <StyledCard>
                    <CardActions>
                        <Link to="/movies">
                            <CardMedia
                                component={"img"} 
                                src="https://previews.123rf.com/images/leberus/leberus2006/leberus200600016/149868636-online-cinema-with-popcorn-soda-and-3d-glasses.jpg" 
                                alt="Image of movie theatre with popcorn"
                            />
                        </Link>
                    </CardActions>
                </StyledCard>
            </Grid>
        </Grid>
    )
}

export default HomePage