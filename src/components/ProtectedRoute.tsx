import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
    const token = localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg");
    return token ? <Outlet/> : <Navigate to="/auth/login"/>;
};

export default ProtectedRoute