import {Card, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function ItemRoom({hospital}) {
    return (
        <Grid item key={hospital.name} xs={12} sm={6} md={4}>
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
                    <Typography gutterBottom variant="h6" component="p">
                        {hospital.name}
                    </Typography>
                    <Typography fontWeight="bold">
                        {hospital.type}
                    </Typography>
                    <Typography>
                        {`Kapasitas Kamar: ${hospital.capacity}`}
                    </Typography>
                    <Typography>
                        {`Status Kamar: ${hospital.isAvailable}`}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ItemRoom

ItemRoom.propTypes = {
    hospital: PropTypes.object
}