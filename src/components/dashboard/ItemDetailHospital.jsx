import PropTypes from "prop-types";
import {Card, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

function ItemDetailHospital({hospital}) {
    return (
        <>
            <Grid item key={hospital[0].id} xs={12}>
                <Card
                    sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                    <CardMedia
                        component="div"
                        sx={{
                            pt: '56.25%',
                        }}
                        image={hospital[0].img}
                    />
                    <CardContent sx={{flexGrow: 1}}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {hospital[0].name}
                        </Typography>
                        <Typography>
                            {hospital[0].address}
                        </Typography>
                        <Typography mt={5}>
                            {`Tipe: ${hospital[0].type}`}
                        </Typography>
                        <Typography mt={1}>
                            {`Kontak: ${hospital[0].contact}`}
                        </Typography>
                        <Typography mt={1}>
                            {`Email: ${hospital[0].email}`}
                        </Typography>
                        <Typography mt={1}>
                            {`Jumlah Kamar: ${hospital[0].rooms.length}`}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default ItemDetailHospital

ItemDetailHospital.propTypes = {
    hospital: PropTypes.array
}