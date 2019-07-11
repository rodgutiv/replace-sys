import axios from 'axios'
export const api = axios.create({
  baseURL: "http://localhost:3000"
  //baseURL: "http://vps-nodolab.com:3000/"
})
