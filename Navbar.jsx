 import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header className="navbar">
      <h3 className="brand">🥇 StudentHub</h3>

      <nav className="nav-links">
        <Link to="/form">Add</Link>
        <Link to="/details">Students</Link>
        <Link to="/card">Card</Link>
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </nav>
    </header>
  );
}
