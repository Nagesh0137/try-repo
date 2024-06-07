import React from "react";
import job from "./Data";
import Head from "./Head";
import Jobs from "./Jobs";
function Jobs2() {
  return (
    <>
      <Head head1="Job"></Head>
      <section>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4">
              <Jobs
                title={job[0].heading}
                exp={job[0].experience}
                package={job[0].salary}
                desc={job[0].Desc}></Jobs>
            </div>
            <div className="col-md-4">
              <Jobs
                title={job[0].heading}
                exp={job[0].experience}
                package={job[0].salary}
                desc={job[0].Desc}></Jobs>
            </div>
            <div className="col-md-4">
              <Jobs
                title={job[0].heading}
                exp={job[0].experience}
                package={job[0].salary}
                desc={job[0].Desc}></Jobs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Jobs2;
