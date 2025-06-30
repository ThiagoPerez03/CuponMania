import Carousel from "../components/carousel"
import { CuponesListCuponManiaco } from "../components/CuponesListCuponManiaco"
import { useEffect } from "react"

const InicioCuponManiaco = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div>
            <Carousel />
            <div className="text-white items-center text-3xl text-center font-poppins" style={{ marginTop: '-40px' }}>
                <h1>Destacados</h1>
                <div style={{ padding: '20px' }}>
                    <CuponesListCuponManiaco />
                </div>
            </div>
        </div>
    )
}

export default InicioCuponManiaco
