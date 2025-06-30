import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const activeLink = "your-active-link-class";
const btnLink = "your-btn-link-class";

export default function RegistroCuponero() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tipo, setTipo] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTipo('EM');
        try {
            await axios.post('https://cuponmania-backend.onrender.com/cupones/signup/', {
                username,
                email,
                password,
                tipo,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            toast.success('User registered successfully');
            navigate('/loginCuponero');
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    toast.error('El usuario ya existe');
                } else if (error.response.status === 400) {
                    const errorMessage = error.response.data.message || 'Datos de registro incorrectos';
                    toast.error(errorMessage);
                } else {
                    toast.error('Error registering user');
                }
            } else {
                toast.error('Error registering user');
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-left items-center h-screen relative">
                    <div className="absolute top-0 left-0 p-4">
                        <NavLink to="/inicio" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
                            <img src="/assets/logoCuponero.png" fill="none" className="w-80 h-17 p-3" viewBox="0 0 24 24" />
                        </NavLink>
                    </div>
                    <div className="flex-grow flex flex-col justify-left items-center space-y-7 mt-72 ml-0">
                        <div className="group">
                            <input
                                type="text"
                                placeholder="Usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-[200px] sm:w-[480px] text-black rounded-full border border-black px-2 py-2 focus:outline-none focus:ring-2 focus:ring-cuponBlue focus:border-transparent text-center text-xl font-montserrat"
                            />
                        </div>
                        <div className="group">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-[300px] sm:w-[480px] text-black rounded-full border border-black px-2 py-2 focus:outline-none focus:ring-2 focus:ring-cuponBlue focus:border-transparent text-center text-xl font-montserrat"
                            />
                        </div>
                        <div className="group">
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-[300px] sm:w-[480px] text-black rounded-full border border-black px-2 py-2 focus:outline-none focus:ring-2 focus:ring-cuponBlue focus:border-transparent text-center text-xl font-montserrat"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 border text-xl border-black text-black font-poppins md:font-regular rounded-full hover:bg-cuponBlue hover:text-white">
                            Registrarse
                        </button>
                    </div>
                    <div className="absolute left-[180px] top-64 z-0 flex h-32 w-[634px] flex-shrink-0 items-center justify-center text-center text-3xl leading-[44px] tracking-normal">
                        <div className='font-poppins pr-[44px] text-center text-2xl leading-[44px] tracking-normal text-black'>
                            Registrate para empezar a ofrecer los mejores cupones a cientos de usuarios
                        </div>
                    </div>
                    <div className="absolute left-[170px] top-44 z-0 flex h-32 w-[639px] flex-shrink-0 items-center justify-center text-center text-3xl leading-[44px] tracking-normal">
                        <div className="font-sans pr-[44px] text-right text-4xl font-black leading-[44px] tracking-normal text-black ">
                            Crear una cuenta nueva
                        </div>
                    </div>
                    <div className="relative bg-cuponBlue w-[500px] h-full text-black overflow-hidden">
                        <img src="/assets/CuponesFondo.png" className="w-full h-full object-cover transform scale-125" />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="bg-cuponBlue w-80 h-52 flex flex-col justify-center items-center rounded-xl font-poppins md:font-semibold text-white text-2xl p-2 z-10">
                                Bienvenido de Vuelta
                                <div className="text-lg mt-2 text-center font-poppins md:font-normal">
                                    Para empezar a ofrecer cupones Inicia Sesion
                                </div>
                                <NavLink to="/loginCuponero" className={isActive => (isActive ? activeLink : btnLink)}>
                                    <button className="mt-4 px-4 py-2 border text-2xl border-white text-white font-poppins md:font-semibold rounded-full hover:bg-white hover:text-cuponBlue">
                                        Iniciar Sesion
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
