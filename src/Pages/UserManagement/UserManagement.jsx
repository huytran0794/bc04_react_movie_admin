import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserTable from "../../Components/UserTable";
import USER_SERVICE from "../../service/userService";
export default function UserManagement() {
  const [userList, setUserList] = useState([]);
  const user = useSelector((state) => state.userSlice.user);
  if (user === null) {
    window.location.href = "/login";
  }
  // userlist
  useEffect(() => {
    USER_SERVICE.getUserList()
      .then((res) => {
        console.log(res.data.content);
        setUserList(res.data.content);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <UserTable dataSource={userList} />
    </div>
  );
}
