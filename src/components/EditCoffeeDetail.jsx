import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { updateCoffee } from "../features/coffeeSlice";
import Header from "./Header";

const EditCoffeeDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setform] = useState({
    name: "",
    size: "",
    price: 0,
    image: "",
    quantity: 0,
  });

  const coffeeData = useSelector((state) => state.coffees.coffees);

  useEffect(() => {
    if (id) {
      const data = coffeeData.filter((c) => c._id === id);
      setform({ ...data[0] });
    }

  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCoffee({ id, form }));
    navigate("/");
  };

  const handleChange = (event) => {
    event.preventDefault();

    setform({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <Header />
      <div>
        <h2 className="text_center">Edit coffee</h2>
        <form onSubmit={handleUpdate}>
          <div className="container">
            <div className="display">
              <img
                src={form.image || ""}
                alt="image"
                style={{ width: "30%" }}
              />
            </div>
            <br />
            <h4>
              <br />
              <label>Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name || ""}
                onChange={handleChange}
              />
              <br />
              <br />
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={form.price || 0}
                onChange={handleChange}
              />
              <br />
              <br />
              <label>Size:</label>
              <input
                type="text"
                name="size"
                value={form.size || 0}
                onChange={handleChange}
              />
              <label>Quantity:</label>
              <input
                type="text"
                name="quantity"
                value={form.quantity || 0}
                onChange={handleChange}
              />
            </h4>

            <div className="btn_display">
              <button className="btn" type="submit">
                Save update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCoffeeDetail;
