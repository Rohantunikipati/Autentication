import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const Private_Route = () => {
    const {current_user} = useSelector(state => state.user);
  return current_user ? <Outlet/> : <Navigate to="/signin"/>
}

export default Private_Route;