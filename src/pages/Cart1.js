import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart, UpdateQuantity } from "../features/CartSlice";

export default function Cart1() {
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(RemoveFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(UpdateQuantity({ id, quantity }));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-dark">
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((value) => (
              <tr key={value.id}>
                <td>
                  <img
                    src={value.thumbnail}
                    alt="Product"
                    className="img-fluid"
                    style={{ maxWidth: "50px", height: "auto" }}
                  />
                </td>
                <td>{value.title}</td>
                <td>{value.price}</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={value.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(value.id, Number(e.target.value))
                    }
                  />
                </td>
                <td>{value.total}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(value.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-end">
        <button className="btn btn-success">Proceed to Checkout</button>
      </div>
    </div>
  );
}
