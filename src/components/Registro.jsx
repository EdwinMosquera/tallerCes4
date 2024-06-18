import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useContext, useState } from "react";
import { EstacionamientoContext } from '../context/EstacionamientoProvide';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const { RegistrarVehiculo } = useContext(EstacionamientoContext);
  const [documento, setDocumento] = useState('');
  const [tipo, setTipo] = useState('carro');
  const [placa, setPlaca] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [cilindraje, setCilindraje] = useState('');
  const navigate = useNavigate();

  const handleSumbmit = (e) => {
    e.preventDefault();

    const placaCarro = /^[A-Z]{3}[0-9]{3}$/;
    const placaMoto = /^[A-Z]{3}[0-9]{2}[A-Z]$/;

    if (tipo === 'carro' && !placaCarro.test(placa)) {
      alert('La placa del carro debe tener formato ABC123.');
      return;
    }

    if (tipo === 'moto' && !placaMoto.test(placa)) {
      alert('La placa de la moto debe tener formato ABC12D.');
      return;
    }

    const vehiculo = { tipo, placa, marca, modelo, cilindraje: tipo === 'moto' ? cilindraje : undefined };
    RegistrarVehiculo(documento, vehiculo);

    setDocumento('');
    setTipo('carro');
    setPlaca('');
    setMarca('');
    setModelo('');
    setCilindraje('');

    navigate('/');
  }

  const marcaCarro = ["FORD", "NISSAN", "CHEVROLET", "TOYOTA", "BMW", "HYUNDAI", "MERCEDES BENZ"];
  const marcaMoto = ["SUZUKI", "YAMAHA", "HONDA", "BMW", "KAWASAKI", "AKT", "PULSAR", "N-MAX", "AGILITY"];
  const modeloCarro = ["2015", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];
  const cilindrajeMoto = ["125", "150", "200", "250", "300", "500", "1000", "1200"];

  return (
    <>
      <div>
        <h1>Registro Vehiculo</h1><br></br>

        <div>
          <form onSubmit={handleSumbmit}>
            <TextField id="standard-search" name='documento' label="Documento" value={documento} onChange={e => setDocumento(e.target.value)} variant="standard" /><br />
            <br />
            <TextField id="standard-search" name='placa' label="Placa" value={placa} onChange={e => setPlaca(e.target.value)} variant="standard" maxLength={6} /><br /><br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipo de Vehículo</InputLabel>
              <Select
                labelId="demo-simple-select-label" id="demo-simple-select" value={tipo} label="Tipo de Vehículo" onChange={(e) => setTipo(e.target.value)}>
                <MenuItem value={"carro"}>Carro</MenuItem>
                <MenuItem value={"moto"}>Moto</MenuItem>
              </Select>
            </FormControl>
            <br /><br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Marca</InputLabel>
              <Select
                labelId="demo-simple-select-label" id="demo-simple-select" value={marca} label="Marca" onChange={(e) => setMarca(e.target.value)}
              >
                {(tipo === 'carro' ? marcaCarro : marcaMoto).map((marca) => (
                  <MenuItem key={marca} value={marca}>{marca}</MenuItem>
                ))}

              </Select>
            </FormControl>
            <br /><br />
            {tipo === 'carro' && (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                <Select
                  labelId="demo-simple-select-label" id="demo-simple-select" value={modelo} label="Modelo" onChange={(e) => setModelo(e.target.value)}>
                  {(modeloCarro).map((modelo) => (
                    <MenuItem key={modelo} value={modelo}>{modelo}</MenuItem>
                  ))};

                </Select>
              </FormControl>
            )}

            {tipo === 'moto' && (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Cilindraje</InputLabel>
                <Select
                  labelId="demo-simple-select-label" id="demo-simple-select" value={cilindraje} label="Cilindraje" onChange={(e) => setCilindraje(e.target.value)}>
                  {(cilindrajeMoto).map((cilindraje) => (
                    <MenuItem key={cilindraje} value={cilindraje}>{cilindraje}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            <br /><br />
            <Button type='submit' variant="outlined">Iniciar</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registro