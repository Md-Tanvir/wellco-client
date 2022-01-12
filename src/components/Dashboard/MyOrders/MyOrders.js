import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const email = user.email;

  // Get orders of logged user
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // Cancelling order with id
  const handleCancel = (id) => {
    const action = window.confirm("Do you want to cancel the Order?");
    if (action) {
      fetch(`http://localhost:5000/deleteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Canceled successfully");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 data-aos="fade-up" className="text-center mb-5">
        Manage My Orders
      </h2>

      <table data-aos="fade-up" className="table">
        <thead>
          <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Buyer</th>
            <th scope="col">Email</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>

            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <th>{order?.name}</th>
              <td>{order?.displayName}</td>
              <td>{order?.email}</td>
              <td>$ {order?.price}</td>
              <td>{order?.status}</td>

              <td>
                <button
                  onClick={() => handleCancel(order?._id)}
                  className="btn btn-danger float-end"
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
