import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const btnLink = "block inline py-1 text-black hover:text-cuponRed cursor-pointer mr-4";
const activeLink = "block inline-blocl py-1 text-cuponRed mr-4";

const Login = () => {
  return (
    <div className="flex justify-start items-center h-screen">
      {/* Boton para los que son cuponeros */}
      <div className="relative bg-white w-1/2 h-full text-black overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-cuponBlue w-96 h-56 flex flex-col justify-center items-center rounded-3xl font-poppins md:font-semibold text-white text-3xl p-2">
            Soy Cuponero
            <div className="text-lg mt-2 text-center font-poppins md:font-normalp">
              Empieza a publicar tu cupones a millones de CuponManiacos
            </div>
            <NavLink to="/loginCuponero" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
              <button className="mt-4 px-5 py-2 border text-2xl border-white text-white font-poppins md:font-semibold rounded-full hover:bg-white hover:text-cuponBlue ml-3">
                Cuponero
              </button>
            </NavLink>
          </div>
          <HiOutlineBuildingOffice2 className="absolute bottom-0 left-1/2 transform translate-x-1/2 text-[12rem] text-black" style={{ transform: 'translate(-50%, 0) scaleX(-1)', strokeWidth: '1px' }} />
        </div>
      </div>
      {/* Boton para los que son cuponManiacos */}
      <div className="relative bg-cuponRed w-1/2 h-full text-black overflow-hidden">
        <img src="/assets/CuponesFondo.png" className="w-full h-full object-cover scale-125" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-cuponRed w-96 h-56 flex flex-col justify-center items-center rounded-3xl font-poppins md:font-semibold text-white text-3xl p-2">
            Soy CuponManiaco
            <div className="text-lg mt-2 text-center font-poppins md:font-normal">
              Empieza a llenar tu cuponera obteniendo miles de cupones
            </div>
            <NavLink to="/loginCuponManiaco" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
              <button className="mt-4 px-4 py-2 border text-2xl border-white text-white font-poppins md:font-semibold rounded-full hover:bg-white hover:text-cuponRed">
                CuponManiaco
              </button>
            </NavLink>
          </div>
        </div>
        <GiShoppingCart className="absolute bottom-0 right-1/2 transform translate-x-1/2 text-[12rem] text-black" style={{ transform: 'translate(50%, 0) scaleX(-1)' }} />
      </div>
      <div className="absolute top-0 left-0 p-0">
        <NavLink to="/inicio" className={({ isActive }) => (isActive ? activeLink : btnLink)}>
          <img src="/assets/logoCuponero.png" fill="none" className="w-80 h-17 p-3" viewBox="0 0 24 24" />
        </NavLink>
      </div>
    </div>
  )
};

export default Login;

