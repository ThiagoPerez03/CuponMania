import axios from 'axios'

const cuponesApi = axios.create({
    baseURL: 'https://cuponmania-backend.onrender.com/cupones/'
})
// En estos casos utilizo la url base, pero si necesito otra URL no sirve.
export const getAllCupones = () => cuponesApi.get('/');

export const getCuponById = (id) => cuponesApi.get(`/${id}`);

export const createCupon = (cupon) => cuponesApi.post('/', cupon);

// Interpolación: ``. Distinto a las comillas.
export const deleteCupon = (id) => cuponesApi.delete(`/${id}/`);

export const updateCupon = (id, cupon) => cuponesApi.put(`/${id}/`, cupon);