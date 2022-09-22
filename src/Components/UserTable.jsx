import React from "react";
import { Space, Table } from "antd";
export default function UserTable({ dataSource }) {
  const columns = [
    {
      title: "Username",
      dataIndex: "hoTen",
      key: "uname",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "account",
      dataIndex: "taiKhoan",
      key: "account",
    },
    {
      title: "userTypeId",
      dataIndex: "maLoaiNguoiDung",
      key: "userTypeId",
    },
    {
      title: "userPhoneNumb",
      dataIndex: "soDT",
      key: "userPhoneNumb",
    },
  ];
  return (
    <Table
      rowKey={(record) => record.taiKhoan}
      dataSource={dataSource}
      columns={columns}
    />
  );
}
