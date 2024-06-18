import { CardContent, Typography, Button, CardActions, Box, Card} from "@mui/material";
import { useContext } from "react";
import { EstacionamientoContext } from "../context/EstacionamientoProvide";

const Cards = () => {
    const {motoPrueba, setMotoCelda}= useContext(EstacionamientoContext);
    
    const prueba = (
        setMotoCelda(motoPrueba)
    );

    const card = (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                   
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );

    return (
        prueba
    )
}

export default Cards