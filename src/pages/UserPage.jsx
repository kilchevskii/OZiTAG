import React from "react";
import { instance } from "../api";


const UserPage = ({ userInfo, logObj, setLogin }) => {
  const token = logObj.data.accessToken;

  const logOut = () => {
    instance
      .post(
        `/api/tager/user/profile/logout`, {},

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
      }).catch(setLogin(false));

  };
  return (

    <div className="userform">
      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src="https://audioportal.su/diy/wp-content/uploads/2020/10/man.png" alt='user-avatar'></img>.
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>Name: {userInfo.data.name}</h3>
          <p>
            E-mail: {userInfo.data.email}
          </p>
          <p>
            User ID:{userInfo.data.id}
          </p>
        </div>

        <button onClick={logOut}>Logout</button>
      </div>
    </div>

  );
};

export default UserPage;
