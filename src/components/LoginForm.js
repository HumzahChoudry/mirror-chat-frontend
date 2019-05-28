import React from "react";

function LoginForm(props) {
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={e => props.onSubmit(e, "login")}>
        <input
          type="text"
          className="username"
          name="username"
          placeholder="Username"
        />
        <input
          type="password"
          className="password"
          name="password"
          placeholder="Password"
        />
        <input type="submit" name="Submit" />
      </form>
      <h3>Signup</h3>
      <form onSubmit={e => props.onSubmit(e, "users")}>
        <input
          type="text"
          className="username"
          name="username"
          placeholder="Username"
        />
        <input
          type="text"
          className="password"
          name="password"
          placeholder="Password"
        />
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
}

export default LoginForm;
