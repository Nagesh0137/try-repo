import React from "react";
import Head from "./Head";
import Blog,{Rightblog} from "./Blog";
import job,{bcard} from "./Data";
function Blog2(){
    return(
        <>
        <Head head1='Blog'></Head>
            <section>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <Blog img={bcard[0].img} title={bcard[0].title} desc={bcard[0].desc}></Blog>
                                </div>
                                <div className="col-md-6">
                                    <Blog img={bcard[1].img} title={bcard[1].title} desc={bcard[1].desc}></Blog>
                                </div>
                                <div className="col-md-6">
                                    <Blog img={bcard[2].img} title={bcard[2].title} desc={bcard[2].desc}></Blog>
                                </div>
                                <div className="col-md-6">
                                    <Blog img={bcard[3].img} title={bcard[3].title} desc={bcard[3].desc}></Blog>
                                </div>
                                <div className="col-md-6">
                                    <Blog img={bcard[4].img} title={bcard[4].title} desc={bcard[4].desc}></Blog>
                                </div>
                                <div className="col-md-6">
                                    <Blog img={bcard[5].img} title={bcard[5].title} desc={bcard[5].desc}></Blog>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="row">
                                <div className="col-md-12 recentpost text-white p-2">
                                    <div>
                                        <h5 className="float-start">Recent Posts</h5>
                                        <i class="fa-solid fa-diamond-turn-right float-end fs-3 mt-1"></i>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <Rightblog img={bcard[0].img} title={bcard[0].title}></Rightblog>
                                </div>
                                <div className="col-md-12">
                                    <Rightblog img={bcard[1].img} title={bcard[1].title}></Rightblog>
                                </div>
                                <div className="col-md-12">
                                    <Rightblog img={bcard[2].img} title={bcard[2].title}></Rightblog>
                                </div>
                                <div className="col-md-12">
                                    <Rightblog img={bcard[3].img} title={bcard[3].title}></Rightblog>
                                </div>
                                <div className="col-md-12">
                                    <Rightblog img={bcard[4].img} title={bcard[4].title}></Rightblog>
                                </div>
                                <div className="col-md-12">
                                    <Rightblog img={bcard[5].img} title={bcard[0].title}></Rightblog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}export default Blog2;