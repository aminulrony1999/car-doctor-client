import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-express-server-xi.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log(error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("Log Out the user");
          logOut()
            .then(() => {
              setLoading(false);
              navigate('/login');
            })
            .catch((error) => console.error(error));
        }
      }
    );
  }, [logOut,setLoading,navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
