import React from "react";
import LoginForm from "./components/LoginForm";
import ChatContainer from "./components/ChatContainer";
import "./App.css";

class App extends React.Component {
  state = {
    user: null
  };

  createOrLoginUser = (e, path) => {
    const URL = "http://localhost:3000/api/v1/";
    e.preventDefault();
    const username = e.target.querySelector(".username").value;
    const password = e.target.querySelector(".password").value;
    fetch(URL + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
      .then(res => res.json())
      .then(response => {
        console.log("%c response", "color: blue", response);
        localStorage.setItem("token", response.jwt);
        this.setState({ user: response.user });
      });
  };

  componentDidMount() {}
  render() {
    return (
      <div className="App">
        {!this.state.user ? (
          <LoginForm onSubmit={this.createOrLoginUser} />
        ) : (
          <ChatContainer user={this.state.user} />
        )}
      </div>
    );
  }
}

export default App;
