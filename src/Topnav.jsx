import React from "react";

function Topnav(props){
    return(
        <>
          <header>
            <div className="continer">
                <div className="row top_menu">
                    <div className="col-md-8 text-white fw-bold">
                        <marquee behavior="1" direction="left">{props.para} </marquee>
                    </div>
                    <div className="col-md-4 text-center d-none d-md-block">
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-whatsapp"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
          </header>
        </>
    )
}
export default Topnav;