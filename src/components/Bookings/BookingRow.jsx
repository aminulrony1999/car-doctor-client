const BookingRow = ({booking}) => {
    const {service, date, price,img} = booking;
  return (
    <div>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
            <div className="avatar">
              <div className="rounded w-24 h-24">
                <img
                  src={img}
                  alt="Image of service"
                />
              </div>
            </div>
        </td>
        <td>
            {service}
        </td>
        <td>{date}</td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default BookingRow;
