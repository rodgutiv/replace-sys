import axios from 'axios'
export const api = axios.create({
  baseURL: "http://reface.nodolab.com.mx:3000/"
})
