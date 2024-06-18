import React, { createContext, useState } from 'react'

const AutenContext = createContext();

const AutenticacionProvide = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (user, password, callback) => {
        const validarUsuario = [
            { user: 'admin', password: 'admin' }
        ];
        
        const usuario = validarUsuario.find(u => u.user === user && u.password === password);
        
        if (usuario) {
            setUser({ user });
            callback();
        } else {
            alert('Credenciales invalidas');
        }
    };

  return (
    <AutenContext.Provider value={{user, login}}>
        {children}
    </AutenContext.Provider>
  );
}
export {AutenContext}
export default AutenticacionProvide;