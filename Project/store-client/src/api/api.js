
import axios from 'axios'


const API = 'https://671b70ef2c842d92c37fec0c.mockapi.io/prodcutsapp/products'
// const API = 'http://localhost:3000/products/all'
// const API = 'http://localhost:3000/orders/all'
// const API = 'http://localhost:3000/users/all'

const getProducts = () => axios.get(API)
const getOrders = () => axios.get(API)
const getUsers = () => axios.get(API)

export { getProducts }
export { getOrders}
export { getUsers}