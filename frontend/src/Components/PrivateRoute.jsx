import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  if (!isAuth) return <Navigate to="/login" />;
  return children;
};

export const AdminPrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  if (!isAuth) return <Navigate to="/login" />;
  if (isAuth.role !== "manager") return <Navigate to="/login" />;
  return children;
};
