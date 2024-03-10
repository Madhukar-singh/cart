import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./pages/NotFound/index.js";
import Quote from "./pages/Quote/index.js";
function App() {
  const isLoggedIn = localStorage.getItem("login_token");
  return (
    <>
      <Routes>
        {isLoggedIn && (
          <Route path="/login" element={<Navigate to="/home" replace />} />
        )}

        {!isLoggedIn && <Route path="/login" element={<Login />} />}

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
