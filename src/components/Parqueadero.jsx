import { useContext, useState } from "react"

import { EstacionamientoContext } from "../context/EstacionamientoProvide"
import { Box, Button, CardActions, Container, CssBaseline, Grid, Paper, TextField, styled } from "@mui/material";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";


const Parqueadero = () => {
    const { motoCelda, setMotoCelda, setCarroCelda, carroCelda, empleado } = useContext(EstacionamientoContext);
    const [buscar, setBuscar] = useState('');
    const [selectVehiculo, setSelectVehiculo] = useState('');
    const navigate = useNavigate();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const handleBuscar = () => {
        navigate(`/buscar/${buscar}`);
    }
    return (
        <div>
            <div>
                <TextField id="standard-search" label="Buscar Vehiculo" type="search" value={buscar} onChange={(e) => setBuscar(e.target.value)} variant="standard" />
                <Button onClick={handleBuscar} variant="outlined">Iniciar</Button>
            </div>
            <br /><br /><br />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 24 }}>
                    {Array.from(motoCelda).map((moto) => (
                        <Grid item xs={2} sm={4} md={4} key={moto.id}>
                            <Item>
                                <p>M</p>
                                <p>{moto.id}</p>
                                <p>{moto.placa}</p>
                                <p>{moto.fecha}</p>

                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <br /><br /><br />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 24 }}>
                    {Array.from(carroCelda).map((carro) => (
                        <Grid item xs={2} sm={4} md={4} key={carro.id}>
                            <Item>
                                <p>N</p>
                                <p>{carro.id}</p>
                                <p>{carro.placa}</p>
                                <p>{carro.fecha}</p>

                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default Parqueadero