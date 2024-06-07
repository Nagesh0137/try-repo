import React from "react";

export default function Batchs() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card my-5 shadow-lg">
                <div className="float-start w-100">
                  <img
                    src="https://www.a2zithub.org/training/uploads/171514934576496337.png"
                    alt="a2z logo"
                    className="float-end batch-card-img"
                  />
                </div>
                <h2 className="card-title text-center">
                  Full Stack Web Developer
                </h2>
                <div className="card-body text-center">
                  <h2>⏰ 6-Month</h2>
                  <p className="batch-date text-white">19-05-2024</p>
                  <span className="batch-time">
                    Time : 05:00 pm To 07:00 pm
                  </span>

                  <button
                    type="button"
                    class="btn border-0 mt-4 batch-btn btn-primary "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    JOIN NOW
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel">
                            Modal title
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div className="modal-body"></div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            git
                            className="btn btn-secondary"
                            data-bs-dismiss="modal">
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
