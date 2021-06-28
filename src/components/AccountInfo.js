import React from "react";
import fire from "../javaScripts/fire";

const AccountInfo = ({ handleLogout }) => {
  var user = fire.auth().currentUser;
  var currentUserEmail;
  if (user != null) {
    user.providerData.forEach(function (profile) {
      currentUserEmail = profile.email;
    });
  }
  return (
    <div>
      <h2 className="welcomeEmail">
        Welcome to our Website. You succesfully signed in with "
        {currentUserEmail}" e-mail. If you want to Log-out please click the
        botton.
      </h2>
      <button className={"buttonLogout"} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AccountInfo;
