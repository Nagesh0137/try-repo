import React from "react";
import Head from "../Head";
export default function Cartificate() {
  const HandleCartificateform = (e) => {
    e.preventDefault();
    alert("OTP Send");
  };
  return (
    <>
      <Head head1="Cartificate"></Head>
      <section>
        <div className="container py-5 ">
          <div className="row">
            <div className="col-md-4">
              <div>
                <form className="mb-3" onSubmit={HandleCartificateform}>
                  <h2 className="bg-dark text-white p-3 border-bottom border-danger">
                    Verify Your Certificate
                  </h2>
                  <input
                    type="text"
                    className="w-75 p-2 mt-3"
                    placeholder="Enter Your Name *"
                  />
                  <br />
                  <input
                    type="text"
                    className="w-75 p-2 mt-3"
                    placeholder="Certificate No *"
                  />
                  <br />
                  <input
                    type="number"
                    className="w-75 p-2 mt-3"
                    placeholder="Enter Register Mobile No*"
                  />
                  <br />
                  <button className="btn btn-success mt-2">Get OTP</button>
                </form>
                <p className="mt-5 text-center fw-bold">
                  Kindly Scroll Up For The Address And Contact Details Of A2Z IT
                  HUB In Ahmednagar
                </p>
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-center">
                <img
                  src="https://www.a2zithub.org/training/uploads/170384053511064896.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
