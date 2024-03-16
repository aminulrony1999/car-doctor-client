import { useLoaderData } from "react-router-dom";

const BookService = () => {
    const service = useLoaderData();
    const {_id, price, title} = service;
    return (
        <div>
            <h2 className="text-center text-3xl">Book Service : {title}</h2>
            <form className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
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
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due ammount</span>
          </label>
          <input
            type="text"
            defaultValue={"$"+price}
            className="input input-bordered"
            required
          />
        </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary bg-[#FF3811] border-none text-white" type="submit" value="Submit" />
        </div>
      </form>
        </div>
    );
};

export default BookService;