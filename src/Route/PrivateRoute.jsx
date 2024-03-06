
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="h-screen w-full flex items-center justify-center">
            <div className="h-[200px]">
                {/* <Loading /> */}
                loading...
            </div>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>



};

export default PrivateRoute;