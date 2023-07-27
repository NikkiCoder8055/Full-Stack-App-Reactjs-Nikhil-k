import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productservice from "./service/productservice";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    init();
  }, []); // Add an empty dependency array to run the effect only once

  const [msg, setMsg] = useState("");

  const init = () => {
    productservice
      .getProducts()
      .then((res) => {
        // console.log(res.data);
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productservice
      .deleteProduct(id)
      .then((res) => {
        setMsg("Deleted successfully..!");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                All product List
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">SR.NO</th>
                      <th scope="col">COMPANY</th>
                      <th scope="col">COLOR</th>
                      <th scope="col">PRICE</th>
                      <th scope="col">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{p.company}</td>
                        <td>{p.color}</td>
                        <td>{p.price}</td>
                        <td>
                          <Link
                            to={"edit/" + p.productId}
                            className="btn btn-sm btn-primary"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteProduct(p.productId)}
                            className="btn btn-sm btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
