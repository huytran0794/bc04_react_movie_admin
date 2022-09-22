import React from "react";
import Lottie, { useLottie } from "lottie-react";
import bg_login from "../../assets/bg_login.json";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import USER_SERVICE from "../../service/userService";
import { setUserInfo } from "../../redux/slice/userSlice";
import { LOCAL_SERVICE } from "../../service/localService";
export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    let { username: taiKhoan, password: matKhau } = values;
    // let onSuccess = () => {
    //   message.success("Đăng nhập thành công");

    // };
    // let onFail = () => {
    //   message.error("Đăng nhập thất bại");
    // };
    // dispatch(setUserLoginActionServ({ taikhoan, matkhau }, onSuccess, onFail));
    USER_SERVICE.login({ taiKhoan, matKhau })
      .then((res) => {
        console.log(res.data.content);
        dispatch(setUserInfo(res.data.content));
        message.success("Đăng nhập thành công");
        LOCAL_SERVICE.user.set(res.data.content);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const options = {
    animationData: bg_login,
    loop: false,
  };
  console.log(options);

  const { LoginView } = useLottie(options);
  return (
    <div className="container flex items-color h-screen">
      <div className="w-1/2 h-1/2">
        <Lottie animationData={bg_login} />
      </div>
      <div className="w-1/2 h-full flex items-center">
        <Form
          name="basic"
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="flex-grow"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input className="w-full" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password className="w-full" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
