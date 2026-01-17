 import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentForm from "./pages/StudentForm";
import StudentDetails from "./pages/StudentDetails";
import StudentCard from "./pages/StudentCard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔥 DEFAULT ROUTE */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/form"
          element={
            <ProtectedRoute>
              <Navbar />
              <StudentForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/details"
          element={
            <ProtectedRoute>
              <Navbar />
              <StudentDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/card"
          element={
            <ProtectedRoute>
              <Navbar />
              <StudentCard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
