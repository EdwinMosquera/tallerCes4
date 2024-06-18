import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';
import { useContext, useEffect, useState } from "react"
import { EstacionamientoContext } from "../context/EstacionamientoProvide"
import { useParams } from 'react-router-dom';


const BuscarRegistro = () => {
    const { empleado, listaRegistro, setMotoCelda, motoCelda, carroCelda, setCarroCelda } = useContext(EstacionamientoContext);

    const [selectVehiculo, setSelectVehiculo] = useState('');
    const [id, setId] = useState(0);
    const { doc } = useParams();

    useEffect(() => {
        const emp = empleado.find(emp => emp.documento === doc);
        if (emp) {
            setSelectVehiculo(emp.vehiculos.map(v => ({ ...v, documento: emp.documento })));
        } else {
            const allVehiculos = empleado.flatMap(emp => emp.vehiculos.map(v => ({ ...v, documento: emp.documento })));
            const vehiculo = allVehiculos.find(v => v.placa === doc);
            if (vehiculo) {
                setSelectVehiculo([vehiculo]);
            } else {
                alert('No se encontró el vehículo o documento.');
                setSelectVehiculo([]);
            }
        }
    }, []);

    const registrarParqueadero = (vehiculo) => {
        

    };

    return (
        <div>

            <h2>Registrar Ingreso</h2>

            {selectVehiculo.length > 0 && (
                <div>
                    {selectVehiculo.map(vehiculo => (
                        <div key={vehiculo.placa} >
                            <p>Placa: {vehiculo.placa}</p>
                            <p>Tipo de vehículo: {vehiculo.tipo === 'carro' ? 'Carro' : 'Moto'}</p>
                            <p>Marca: {vehiculo.marca}</p>
                            {vehiculo.tipo === 'carro' && (
                                <p>Modelo: {vehiculo.modelo}</p>
                            )}
                            {vehiculo.tipo === 'moto' && (
                                <p>Cilindraje: {vehiculo.cilindraje}</p>
                            )}
                            {vehiculo.tipo === 'moto' && (
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-label">Estacion</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label" id="demo-simple-select" label="Estacion" onChange={(e) => { e.preventDefault(); setId(e.target.value) }}>

                                        {(motoCelda).map((moto) => (
                                            <MenuItem key={moto.id} value={moto.id}>{moto.id}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                            {vehiculo.tipo === 'carro' && (
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-label">Estacion</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label" id="demo-simple-select" label="Estacion" onChange={(e) => { e.preventDefault(); setId(e.target.value) }}>

                                        {(carroCelda).map((carro) => (
                                            <MenuItem key={carro.id} value={carro.id}>{carro.id}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                            <br />
                            <Button onClick={registrarParqueadero(vehiculo)} variant="outlined">Registrar Ingreso</Button>

                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default BuscarRegistro