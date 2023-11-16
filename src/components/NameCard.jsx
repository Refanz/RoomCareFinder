import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

function NameCard({name, desc}) {
    return (
        <Card sx={{ maxWidth: 320, width: 400 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="https://www.fertilome.com/media/klowrey/Article%20Images/Tree.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NameCard