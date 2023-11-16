import Box from "@mui/material/Box";
import {Avatar, Card, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

function Testimonial() {
    const reviews = [
        {
            id: 1,
            name: 'Linda Saraswati',
            statement:
                'Website yang memudahkan saya dalam mencari kamar rumah sakit.',
            image_url:
                'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg',
            position: 'Mahasiswa',
        },
        {
            id: 2,
            name: 'Dinda Suleha',
            statement:
                'Website ini menolong saya di saat kebingungan mencari kamar rumah sakit yang kosong',
            image_url:
                'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg',
            position: 'Bos Kelapa Sawit',
        },
        {
            id: 3,
            name: 'Hendra Suratman',
            statement:
                'Website ini sangat membantu banyak orang, desain bagus',
            image_url:
                'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg',
            position: 'Wirausahawan',
        },
    ];
    return (
        <Box
            sx={{
                flexGrow: 1,
                padding: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '300px',
                mt:'75px'
            }}
        >
            <Grid container spacing={2}>
                {reviews.map((review) => (
                    <Grid item sm={12} md={4} key={review.id}>
                        <Card sx={{height: '250px', maxHeight: '250px'}}>
                            <CardContent>
                                <Typography>
                                    "{review.statement}"
                                </Typography>
                                <Box sx={{display: 'flex', mt:'20px'}}>
                                    <Avatar
                                        src={review.image_url}
                                        size="large"
                                        sx={{mr:'10px'}}
                                    />
                                    <Box>
                                        <Typography>{review.name}</Typography>
                                        <Typography>
                                            {review.position}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Testimonial