import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";

export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth()
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    const location = useLocation()
    console.log(location)
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
}
