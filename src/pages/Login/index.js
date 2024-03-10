import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";
import { generateFakeToken } from "../../utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!username.trim() || !password.trim()) {
      setError("Username and password are required");
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (validateForm()) {
      if (username === "user" && password === "password") {
        setError("");
        localStorage.setItem("login_token", generateFakeToken());
        navigate("/quote");
      } else {
        setError("Invalid username or password");
      }
    }
  };

  return (
    <div class="container-fluid ps-md-0">
      <div class="row g-0">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4">Login</h3>
                  {error && <p style={{ color: "red" }}>{error}</p>}

                  <div class="mb-3">
                    <FormLabel>Email</FormLabel>
                    <input
                      type="email"
                      class="form-control login-input"
                      placeholder="name@example.com"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                  </div>
                  <div class="mb-3">
                    <FormLabel>Password</FormLabel>
                    <input
                      type="password"
                      class="form-control login-input"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>

                  <div class="d-grid">
                    <button
                      class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                      onClick={handleLogin}
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
