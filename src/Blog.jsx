import React from "react";
import Head from "./Head";
function Blog(props) {
  return (
    <>
      <div className="card mt-5" style={{ width: "18rem;" }}>
        <img src={props.img} className="card-img-top" alt="img card" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </>
  );
}
export default Blog;
function Rightblog(props) {
  return (
    <>
      <div className="mb-3 mt-1" style={{ maxWidth: "540px;" }}>
        <div className="row g-0">
          <div className="col-4">
            <img src={props.img} className="img-fluid" alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title ps-3">{props.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Rightblog };
