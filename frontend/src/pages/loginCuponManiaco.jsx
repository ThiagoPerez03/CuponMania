import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const activeLink = "your-active-link-class";
const btnLink = "your-btn-link-class";

const loginCuponManiaco = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/cupones/login/', {
                username: username.trim(),
                password: password.trim(),
            });

            console.log('Response data:', response.data);
            const tipoUsuario = response.data.user_type;

            toast.success('Sesión iniciada');
            if (tipoUsuario === 'CL')
                navigate("/inicioCuponManiaco");
            if (tipoUsuario === 'EM')
                navigate("/inicioCuponero");
        } catch (error) {
            console.error('Error during login:', error.response ? error.response.data : error.message);
            toast.error('Invalid credentials');
        }
    };

    return (
        <div>
            <div className="flex justify-right items-center h-screen relative">
                <div className="absolute top-0 right-0 p-4">
                    <NavLink to="/inicio" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
                        <img src="/assets/logoSlogan.png" fill="none" className="w-80 h-17 p-3" viewBox="0 0 24 24" />
                    </NavLink>
                </div>
                <div className="relative bg-white w-1/2 h-full text-black overflow-hidden">
                    <div className="bg-cuponRed w-8/12 h-full text-black overflow-hidden relative">
                        <img src="/assets/CuponesFondo.png" className="w-full h-full object-cover transform scale-125" />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="bg-cuponRed w-80 h-52 flex flex-col justify-center items-center rounded-xl font-poppins md:font-semibold text-white text-3xl p-2 z-10">
                                Sos miembro?
                                <div className="text-lg mt-2 text-center font-poppins md:font-normal">
                                    Registrate para empezar a obtener cupones
                                </div>
                                <NavLink to="/registroCuponManiaco" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
                                    <button className="mt-4 px-4 py-2 border text-2xl border-white text-white font-poppins md:font-semibold rounded-full hover:bg-white hover:text-cuponRed">
                                        Registrarse
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex-grow flex flex-col justify-left items-center space-y-7 mt-56 mr-48">
                        <div className="group">
                            <input
                                type="text"
                                placeholder="Usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-[200px] sm:w-[480px] text-black rounded-full border border-black px-2 py-2 focus:outline-none focus:ring-2 focus:ring-cuponRed focus:border-transparent text-center text-xl font-montserrat"
                            />
                        </div>
                        <div className="group">
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-[300px] sm:w-[480px] text-black rounded-full border border-black px-2 py-2 focus:outline-none focus:ring-2 focus:ring-cuponRed focus:border-transparent text-center text-xl font-montserrat"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 border text-xl border-black text-black font-poppins md:font-regular rounded-full hover:bg-cuponRed hover:text-white">
                            Iniciar Sesion
                        </button>
                    </div>
                </form>
            </div>
            <div className="absolute right-[160px] top-64 z-0 flex h-32 w-[634px] flex-shrink-0 items-center justify-center text-center text-3xl leading-[44px] tracking-normal">
                <div className='font-poppins pr-[44spx] text-center text-2xl leading-[44px] tracking-normal text-black'>
                    Ingresa para obtener los mejores cupones de cientos de lugares
                </div>
            </div>
            <div className="absolute right-[140px] top-44 z-0 flex h-32 w-[639px] flex-shrink-0 items-center justify-center text-center text-3xl leading-[44px] tracking-normal">
                <div className="font-sans pr-[44px] text-right text-4xl font-black leading-[44px] tracking-normal text-black ">
                    Inicia Sesión en tu Cuenta
                </div>
            </div>
        </div>
    );
};
export default loginCuponManiaco;