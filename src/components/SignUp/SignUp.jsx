import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
const SignUp = () => {
  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {email,password};
    console.log(userData);
    form.reset();
  }
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
              <input className="btn btn-primary bg-[#FF3811] border-none rounded-lg text-white" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center">Already have an account? <Link to='/login'><span className="text-[#FF3811] font-bold">Sign In</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
