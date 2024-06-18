import { TextField, Button } from '@mui/material';
import { useContext, useState } from 'react';
import { AutenContext } from '../context/AutenticacionProvide';
import { useNavigate } from 'react-router-dom';

const login = ({setUser}) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useContext(AutenContext);
  const navigate = useNavigate();

  const handleSumbmit = (e) => {
    e.preventDefault();
    login(usuario, password, () => {
      navigate('/');
    });
  };

  return (
    <>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSumbmit}>
          <TextField id="standard-search" label="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} variant="standard"/><br/>
          <TextField id="standard-password-input" label="Password" value={password} onChange={e => setPassword(e.target.value)} type='password' variant="standard"/><br/><br/>
          <Button type='submit' variant="outlined">Iniciar</Button>
        </form>
      </div>
    </>
  )
}

export default login
