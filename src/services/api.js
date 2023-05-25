import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '402c221d68df81f0401af8df184d4d60',
    language: 'pt-BR',
    page: 1
  }
});

export default api;
