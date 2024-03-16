import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const BookService = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, price, title, img } = service;
  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const duePrice = form.price.value;
    const bookingInfo = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: duePrice,
    };
    fetch("http://localhost:5000/bookings",{
        method : 'POST',
        headers : {
            'content-type' :'application/json'
        },
        body : JSON.stringify(bookingInfo)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
            alert('service booked successfully');
        }
        form.reset();
    })
  };
  return (
    <div>
      <h2 className="text-center text-3xl">Book Service : {title}</h2>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
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
              name="date"
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
              defaultValue={user?.email}
              name="email"
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
              name="price"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary bg-[#FF3811] border-none text-white"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
