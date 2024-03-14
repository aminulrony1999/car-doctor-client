import loginImg from "../../assets/images/login/login.svg";
const Login = () => {
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {email,password};
    console.log(userData);
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
            <img src={loginImg} alt="Login Image" />
        </div>
        <div className="card shrink-0 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
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
              <input className="btn btn-primary bg-[#FF3811] border-none rounded-lg text-white" type="submit" value="Sign In" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
