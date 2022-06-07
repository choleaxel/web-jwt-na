import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import "antd/dist/antd.css";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    //when app first loads it checks local storage, finds token and sets state,logs in
    const _token = localStorage.getItem("token"); //must use _token instead of token
    if (_token) {
      setToken(_token);
    }
  }, []);
  return (
    <div className="App">
      {!token ? <Login setToken={setToken} /> : <Home token={token} />}
    </div>
  );
}

export default App;

//line 11, if no token
