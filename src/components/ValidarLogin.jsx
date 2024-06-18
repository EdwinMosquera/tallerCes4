import React, { useContext } from 'react'
import { AutenContext } from '../context/AutenticacionProvide';
import { Navigate } from 'react-router-dom';

const ValidarLogin = ({children}) => {
    const { user } = useContext(AutenContext);

    if (user === null) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default ValidarLogin