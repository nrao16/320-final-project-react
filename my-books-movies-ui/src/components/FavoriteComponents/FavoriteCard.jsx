import React from 'react'
import { Card, CardHeader, CardMedia, CardActions, Box, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const FavoriteCard = ({ favoriteItem, removeFromFavorites }) => {
    return (
        <Box padding={2}>
            <Card sx={{ height: '100%', width: '100%', display: 'grid', flexDirection: 'row' }}>
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
                    height="80"
                    sx={{ objectFit: "contain" }}
                    src={favoriteItem.img}
                />
                <CardActions sx={{textAlign:"right",  width: '100%', justifyContent: 'flex-end' }}>
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

export default FavoriteCard