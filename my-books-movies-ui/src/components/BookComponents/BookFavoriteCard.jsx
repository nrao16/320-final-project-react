import React from 'react'
import { Card, CardHeader, CardMedia } from '@mui/material';
import { Box } from '@mui/material';

const BookFavoriteCard = ({ book }) => {
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
                    title={book.title}
                    subheader={book.author}
                />
                <CardMedia
                    component="img"
                    height="70"
                    sx={{ objectFit: "contain" }}
                    src={book.book_image}
                />
            </Card>
        </Box>
    )
}

export default BookFavoriteCard