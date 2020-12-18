import axios from 'axios';
import {getIdToken} from './firebase';

const api = axios.create({
  baseURL: window.location.hostname !== 'localhost' ? 'https://kma-trello.herokuapp.com' : 'http://localhost:3001',
});

api.interceptors.request.use(async (request) => {
  request.headers.Authorization = await getIdToken();
  return request;
});

const fetchBoards = async () => {
  return api.get('/boards')
    .then(({data}) => data);
}

const updateBoard = async (board) => {
  await api.post(`/boards/${board._id}`, board);
}

export default {
  fetchBoards,
  updateBoard,
}
