import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isApproved, setIsApproved] = useState(false);

  // Getting all orders
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [isApproved]);

  // Deleting order with specific id

  const handleDelete = (id) => {
    const action = window.confirm("Do you want to cancel the order?");
    if (action) {
      fetch(`http://localhost:5000/deleteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Canceled successfully");
            const remaining = allOrders.filter((order) => order._id !== id);
            setAllOrders(remaining);
          }
        });
    }
  };
  // Updating order status
  const handleStatus = (id) => {
    fetch(`http://localhost:5000/allOrders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Order Shipped");
          setIsApproved(true);
        }
      });
  };

  return (
    <div>
      <h2 className="text-center mb-5">All The Courses</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Buyer</th>
            <th scope="col">Email</th>
            <th scope="col">Price</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => (
            <tr key={order._id}>
              <th>{order?.name}</th>
              <td>{order?.displayName}</td>
              <td>{order?.email}</td>
              <td>$ {order?.price}</td>
              <td className='d-flex'>
                <button
                  onClick={() => handleDelete(order?._id)}
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

export default ManageOrders;
