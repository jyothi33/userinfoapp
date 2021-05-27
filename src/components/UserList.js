import axios from "axios";
import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetail";
import UserName from "./UserName";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  const [person, setPerson] = useState({});

  const fetchUserData = async () => {
    const result = await axios
      .get(`https://randomuser.me/api/?results=20`)
      .catch((err) => console.log(err));
    setUserList(result.data.results);
    console.log(result.data.results);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const clickHandler = (userNew) => {
    setPerson(userNew);
  };

  return (
    <>
      <div className="userNames">
        {userList.map((user) => (
          <UserName key={user.login.uuid} user={user} click={clickHandler} />
        ))}
      </div>
      <>
        {person && (
          <div style={{ width: "500px", padding: "10px", height: "500px" }}>
            {person && <UserDetail person={person} />}
          </div>
        )}
      </>
    </>
  );
};

export default UserList;
