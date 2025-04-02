import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart, UpdateQuantity } from "../features/CartSlice";

export default function Cart1() {
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  console.log(cart);
  
  const handleRemove = (id) => {
    dispatch(RemoveFromCart(id)); 
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return; 
    dispatch(UpdateQuantity({ id, quantity }));
  };

  return (
    <>
      <div class="container mt-5">
        <h2 class="mb-4">Shopping Cart</h2>
        <table class="table table-bordered">
          <thead class="table-dark">
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
            {cart.map((value) => { return <> <tr>
                <td>
                  <img
                    src={value.thumbnail}
                    alt="Product"
                    class="img-fluid"
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
                  onChange={(e) => handleQuantityChange(value.id, Number(e.target.value))}
                />
              </td>
                <td>{value.total}</td>
                <td>
                  <button class="btn btn-danger" onClick={()=>{handleRemove(value.id)}}>Remove</button>
                </td>
              </tr>
            </>
             ;
            })}

          </tbody>
        </table>
        <div class="text-end">
          <button class="btn btn-success">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
} 