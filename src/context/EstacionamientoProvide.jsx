import { createContext, useState } from "react";

const moto = [
    { id: 1, placa: "", fecha: "" },
    { id: 2, placa: "", fecha: "" },
    { id: 3, placa: "", fecha: "" },
    { id: 4, placa: "", fecha: "" },
    { id: 5, placa: "", fecha: "" }
];

const carro = [
    { id: 1, placa: "", fecha: "" },
    { id: 2, placa: "", fecha: "" },
    { id: 3, placa: "", fecha: "" },
    { id: 4, placa: "", fecha: "" },
    { id: 5, placa: "", fecha: "" }
];

const EstacionamientoContext = createContext();
const EstacionamientoProvide = ({ children }) => {
    const [empleado, setEmpleado] = useState([]);
    const [carroCelda, setCarroCelda] = useState(carro);
    const [motoCelda, setMotoCelda] = useState(moto);
    const [placa, setPlaca] = useState('');

    const validarPlaca = (placa) => {
        return empleado.some(empleado => empleado.vehiculos.some(vehiculo => vehiculo.placa === placa));
    };

    const RegistrarVehiculo = (documento, vehiculo) => {
        if (validarPlaca(vehiculo.placa)) {
            alert('La placa ya está registrada.');
            return false;
        }
        setEmpleado(prev => {
            const indexEpl = prev.findIndex(emp => emp.documento === documento);
            if (indexEpl !== -1) {
                const updatedEmployees = [...prev];
                updatedEmployees[indexEpl].vehiculos.push(vehiculo);
                return updatedEmployees;
            } else {
                return [...prev, { documento, vehiculos: [vehiculo] }];
            }
        });
        return true;
    };

    const listaRegistro = (actualizar) => {
        setMotoCelda(...actualizar);

    };

    return (

        <EstacionamientoContext.Provider value={{ placa, setPlaca, empleado, carroCelda, motoCelda, RegistrarVehiculo, listaRegistro, setCarroCelda, setMotoCelda }}>
            {children}
        </EstacionamientoContext.Provider>
    )
}

export { EstacionamientoContext };
export default EstacionamientoProvide