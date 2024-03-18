import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    return (
        <div>
            
        </div>
    );
};

export default Bookings;