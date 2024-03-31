import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const { newUser, setUser, setLoading } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    newUser(name, email, password)
      .then((result) => {
        const user = { email };
        //get access token
        axios
          .post("https://car-doctor-express-server-xi.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            setUser(result.user);
            setLoading(false);
            form.reset();
            navigate(location?.state ? location.state : "/", { replace: true });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={loginImg} alt="Login Image" />
        </div>
        <div className="card shrink-0 w-full max-w-sm">
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary bg-[#FF3811] border-none rounded-lg text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-[#FF3811] font-bold">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
