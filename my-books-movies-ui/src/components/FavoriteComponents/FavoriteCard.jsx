import React from 'react'
import { Card, CardHeader, CardMedia } from '@mui/material';
import { Box } from '@mui/material';

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
            </Card>
        </Box>
    )
}

export default FavoriteCard