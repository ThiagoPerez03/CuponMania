import NavBarCuponero from "../components/navbarCuponero";
import React from 'react'
import { CuponesList } from '../components/CuponesList'


const InicioCuponero = () => {
  return (
    <div className="bg-cuponBlue min-h-screen" >
      <NavBarCuponero />
      <div className="mt-4"></div>
      <CuponesList />
    </div>
  )
}
export default InicioCuponero

