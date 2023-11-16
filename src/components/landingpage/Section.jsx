import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {
    ElectricBoltOutlined,
    HealthAndSafety,
    PaidOutlined
} from "@mui/icons-material";

function Section() {
    const sectionItems = [
        {
            id: 1,
            icon: <HealthAndSafety sx={{ fontSize: 100 }} color="primary" />,
            sentence:
                'Find the Right Comfort in Hospital Room Search - A Caring and Professional Care Experience.',
        },
        {
            id: 2,
            icon: <ElectricBoltOutlined sx={{ fontSize: 100 }} color="primary" />,
            sentence:
                'Find a Hospital Room Fast: Instant Search for Just-in-Time Treatment!',
        },
        {
            id: 3,
            icon: <PaidOutlined sx={{ fontSize: 100 }} color="primary" />,
            sentence: 'No Fees Required: Find a Hospital Room Fast and Free',
        },
    ];
    return (
        <Box sx={{  minHeight: '400px', textAlign:'center', mt:'100px' }}>
            <Grid container>
                {sectionItems.map((item) => (
                    <Grid
                        item
                        xs={12}
                        md={4}
                        minHeight={300}
                        key={item.id}
                    >
                        {item.icon}
                        <Typography>{item.sentence}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Section