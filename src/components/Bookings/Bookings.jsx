import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default Bookings;