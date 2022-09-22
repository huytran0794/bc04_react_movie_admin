import { USER_AXIOS_INSTANCE as AXIOS_INSTANCE, USER_AXIOS_INSTANCE } from "./configURL";
import { LOCAL_SERVICE } from "./localService";

const USER_SERVICE = {
  login: (data) =>
    // AXIOS_INSTANCE.post(`/https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`, data),
    USER_AXIOS_INSTANCE.post('/DangNhap', data),
  getUserList: () => USER_AXIOS_INSTANCE.get(`/LayDanhSachNguoiDung?MaNhom=${LOCAL_SERVICE.user.get()?.maNhom}`),
};

export default USER_SERVICE;
