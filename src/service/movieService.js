import { MOVIE_AXIOS_INSTANCE, MOVIE_BY_THEATER_AXIOS_INSTANCE } from "./configURL";

const MOVIE_SERVICE = {
  getAllMovie: (groupId) =>MOVIE_AXIOS_INSTANCE.get(`/LayDanhSachPhim?maNhom=${groupId}`),
  getMovieByTheater: (groupId) => MOVIE_BY_THEATER_AXIOS_INSTANCE.get(`/LayThongTinLichChieuHeThongRap?maNhom=${groupId}`),
};

export default MOVIE_SERVICE;
