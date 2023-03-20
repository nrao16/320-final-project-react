import React from 'react'
import { Card, CardHeader, CardMedia, CardActions, Box, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { PropTypes } from 'prop-types';

const FavoriteCard = ({ favoriteItem, removeFromFavorites }) => {
    return (
        <Box padding={1}>
            <Card sx={{ maxWidth: 250, maxHeight: 350 }}>
                <CardHeader
                    titleTypographyProps={{
                        fontSize: 12,
                    }}
                    subheaderTypographyProps={{
                        fontSize: 10,
                    }}
                    title={favoriteItem.title}
                    subheader={favoriteItem.subHeader}
                />
                <CardMedia
                    component="img"
                    sx={{ height: 100, objectFit: "contain" }}
                    src={favoriteItem.img}
                    alt="Favorite item image"
                />
                <CardActions sx={{ textAlign: "right", width: '100%', justifyContent: 'flex-end' }}>
                    <IconButton sx={{ "& :hover": { color: "red" } }}
                        aria-label="delete favorite"
                        onClick={() => {
                            removeFromFavorites({
                                "id": favoriteItem.id,
                                "title": favoriteItem.title,
                                "subHeader": favoriteItem.title,
                                "img": favoriteItem.img
                            })
                        }}
                    ><DeleteForeverIcon fontSize="medium" color="primary" />
                    </IconButton>

                </CardActions>
            </Card>
        </Box>
    )
}
FavoriteCard.propTypes = {
    favoriteItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subHeader: PropTypes.string,
        img: PropTypes.string,
    }),
    removeFromFavorites: PropTypes.func,
}

export default FavoriteCard