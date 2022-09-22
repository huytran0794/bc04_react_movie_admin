import axios from "axios";
import { LOCAL_SERVICE } from "./localService";

const BASE_URL = "https://movienew.cybersoft.edu.vn";

const BASE_MOVIE_URL = `${BASE_URL}/api/QuanLyPhim`;
const BASE_MOVIE_BY_THEATER_URL = `${BASE_URL}/api/QuanLyRap`;
const BASE_USER_URL = `${BASE_URL}/api/QuanLyNguoiDung`;
const BASE_TICKET_URL = `${BASE_URL}/api/QuanLyDatVe`;
const BASE_CINEMA_URL = `${BASE_URL}/api/QuanLyRap`;
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNCIsIkhldEhhblN0cmluZyI6IjIwLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3Njg1MTIwMDAwMCIsIm5iZiI6MTY1NDEwMjgwMCwiZXhwIjoxNjc2OTk4ODAwfQ.QYLXMgjth5hQh9opZbNS7JEDPZGWA3o_95kR_VyLix8";

const AXIOS_INSTANCE_GENERATOR = (BASE_URL, token = TOKEN_CYBERSOFT) =>
  axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    Authorization: LOCAL_SERVICE.user.get()?.accessToken,
    headers: { TokenCybersoft: token },
  });

const MOVIE_AXIOS_INSTANCE = AXIOS_INSTANCE_GENERATOR(BASE_MOVIE_URL);
const MOVIE_BY_THEATER_AXIOS_INSTANCE = AXIOS_INSTANCE_GENERATOR(BASE_MOVIE_BY_THEATER_URL);
const USER_AXIOS_INSTANCE = AXIOS_INSTANCE_GENERATOR(BASE_USER_URL);

export { MOVIE_AXIOS_INSTANCE, USER_AXIOS_INSTANCE, MOVIE_BY_THEATER_AXIOS_INSTANCE, TOKEN_CYBERSOFT };
