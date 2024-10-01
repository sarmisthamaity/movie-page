import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  let auth = localStorage.getItem("token");
return (
    auth ? <Outlet/> : <Navigate to='/signup'/>
  )
  
}

export default PrivateRoutes;
