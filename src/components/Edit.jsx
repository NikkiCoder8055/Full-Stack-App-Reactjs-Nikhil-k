import React, { useEffect, useState } from "react";
import productservice from "./service/productservice";
import { useNavigate, useParams } from "react-router";

const Edit = () => {
  const [product, setProduct] = useState({
    productId: "",
    company: "",
    color: "",
    price: "",
  });
  // above is object
  //this is method

  useEffect(() => {
    productservice
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
        console.log();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { id } = useParams();
  console.log(id);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  const ProductRegister = (e) => {
    e.preventDefault();
    productservice
      .editProduct(product, id)
      .then((res) => {
        navigate("/");
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
              <div className="card-header fs-3 text-center">Edit Product</div>
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
                  <button className="btn btn-primary col-md-12">Update</button>
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

export default Edit;
