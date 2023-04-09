import React, { useState } from "react";
import "./style.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would typically send the login request to your server and handle the response
    // For the sake of simplicity, we will just check if the username and password match a hardcoded value
    if (username === "admin" && password === "password") {
      setErrorMessage("");
      alert("Login successful!");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (

    <div className="background-wrapper">
        <div className="login-session-wrapper">
            <div className="login-logo">
                <img src="" className="" alt="" />
            </div>

            <div className="login-form-wrapper">
                <div className="form-brand">
                    <h5>Starboard</h5>
                    {/* dấu cách :v */}
                    {" "}                    
                    <h5 className="color-red">Asia</h5>
                </div>

                <div className="input-wrapper">
                    <form action="">
                        <div className="input-field">
                            <label className="input-label" htmlFor="">User Name</label>
                            <input  type="text" placeholder="" />
                        </div>
                        <div className="input-field">
                            <label className="input-label" htmlFor="">Password</label>
                            <input type="password" placeholder="" />
                        </div>

                        <div className="submit-btn-wrapper">
                            <button className="submit-btn" type="">LOGIN</button>
                        </div>
                    </form>
                </div>

                
            </div>

        </div>
    </div>

    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="username">Username:</label>
    //     <input
    //       type="text"
    //       id="username"
    //       name="username"
    //       value={username}
    //       onChange={handleUsernameChange}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password:</label>
    //     <input
    //       type="password"
    //       id="password"
    //       name="password"
    //       value={password}
    //       onChange={handlePasswordChange}
    //     />
    //   </div>
    //   {errorMessage && <div className="error">{errorMessage}</div>}
    //   <button type="submit">Login</button>
    // </form>
  );
}

export default LoginForm;
