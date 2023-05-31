import axios from 'axios';
export const myCustomAxios = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/",
    });