import React from "react";

const UserName = ({ user, click }) => {
  let { title, first, last } = user.name;

  const clickHandler = () => {
    click(user);
  };

  return <p onClick={clickHandler}>{`${title}. ${first} ${last}`}</p>;
};

export default UserName;
