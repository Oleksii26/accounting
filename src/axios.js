import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://bolt-accounting.onrender.com'
})

export default instance