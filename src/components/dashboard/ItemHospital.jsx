import {Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function ItemHospital({location, hospital}) {
    return (
        <Grid item key={hospital.id} xs={12} sm={6} md={4}>
            <Card
                sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
            >
                <CardMedia
                    component="div"
                    sx={{
                        pt: '56.25%',
                    }}
                    image={hospital.img}
                />
                <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {hospital.name}
                    </Typography>
                    <Typography>
                        {hospital.address}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href={`${location.pathname}/detail/${hospital.id}`} size="small">Detail</Button>
                    <Button href={`${location.pathname}/room/${hospital.id}`} size="small">Check Room</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ItemHospital

ItemHospital.propTypes = {
    location: PropTypes.string,
    hospital: PropTypes.object
}