import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authcontext/AuthContextProvider";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) {
      navigate("/login", { replace: true });
    }
  }, [currentUser, navigate]);

  return children;
}

export default ProtectedRoute;
