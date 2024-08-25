import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// PrivateRoute component for user-specific routes
const PrivateRoute = () => {
    const { user } = useSelector((state) => state.auth);
    console.log(user);

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
