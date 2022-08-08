import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes,setPacientes}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

 

    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        //Validacion del Formulario
        if([nombre, propietario, email, fecha, sintomas].includes('') ){
            setError(true);
            return;
        }
        setError(false);
        //Objeto paciente
        const paciente = {
            nombre, 
            propietario, 
            email, 
            sintomas, 
            fecha,
            id: generarId()
        }
        //Actualizando array pacientes de App.jsx
        setPacientes([...pacientes, paciente]);
        //Reiniciando Formulario
        setEmail('')
        setFecha('')
        setNombre('')
        setPropietario('')
        setSintomas('')

    }

    return ( 
    <div className="md:w-1/2 lg:w-2/5 mx-5 ">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes </h2>
        
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold  ">Administralos</span>
        </p>

        <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

            {error && 
                <Error mensaje='Todos los campos son obligatorios' />
            }
            
            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold " >
                    Nombre Mascota
                </label>
                <input type="text"
                       id="mascota"
                       className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                       placeholder="Nombre de la Mascota" 
                       value={nombre}
                       onChange={(e) => setNombre(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold " >
                    Nombre Propietario
                </label>
                <input type="text"
                       id="propietario"
                       className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                       placeholder="Nombre del Propietario"
                       value={propietario}
                       onChange={(e) => setPropietario(e.target.value)} 
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold " >
                    Email
                </label>
                <input type="email"
                       id="email"
                       className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                       placeholder="Correo del Propietario" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold " >
                    Alta
                </label>
                <input type="date"
                       id="alta"
                       className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                       placeholder="Correo del Propietario" 
                       value={fecha}
                       onChange={(e) => setFecha(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold " >
                    Síntomas
                </label>
                <textarea
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md "
                    placeholder="Describe los Síntomas" 
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                />
            </div>

            <input type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value="Agregar Paciente"
            />
            
        </form>
    </div> 
    );
}
 
export default Formulario;