import React, { useState } from "react";
import productservice from "./service/productservice";

const Add = () => {
  const [product, setProduct] = useState({
    company: "",
    color: "",
    price: "",
  });
  // above is object
  //this is method
  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const [msg, setMsg] = useState("");

  const ProductRegister = (e) => {
    e.preventDefault();
    productservice
      .saveProduct(product)
      .then((res) => {
        console.log("Product Added Successfully", product);
        setMsg("Product Added Successfully");
        setProduct({
          company: "",
          color: "",
          price: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Product</div>
              <div className="card-body">
                <form onSubmit={(e) => ProductRegister(e)}>
                  <div className="mb-3">
                    <label htmlFor="">Enter Company Name: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      onChange={(e) => handleChange(e)}
                      value={product.company}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Enter Color: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="color"
                      onChange={(e) => handleChange(e)}
                      value={product.color}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Enter Price: </label>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      onChange={(e) => handleChange(e)}
                      value={product.price}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Submit</button>
                  {msg && (
                    <p className="fs-4 text-center text-success">{msg}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
