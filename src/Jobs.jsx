import React from "react";

function Jobs(props){
    return(
        <>
               <div className="card Jobcard text-center mt-5">            
                    <h2 className="pt-2">
                        {props.title}
                    </h2>
                    <h4>
                        Experience: {props.exp}
                    </h4>
                    <p className="package mx-3">
                        Pakage:{props.package}
                    </p>
                    <p className="fs-4 text-start ms-2">
                        Description :{props.desc}
                    </p>
                    <ul>
                        <li>
                           . Proficient in Angular version 14 or above.
                           <br/><br/>
                        </li>
                        <li>
                        · Strong understanding of Angular concepts, components, services, and modules.<br/><br/>
                        </li>
                        <li>
                        · Hands-on experience with Angular Material components and theming.<br/><br/>
                        </li>
                        <li>
                        · Knowledge and understanding of UI/UX design principles.<br/><br/>
                        </li>
                        <li>
                        · Ability to collaborate effectively with designers to implement user interfaces.<br/><br/>
                        </li>
                        <li>
                        · Proficient in TypeScript, HTML5, and CSS3 for front-end development.
                        </li>
                    </ul>
                    <div>
                    <p>To Get Mail On this :<br/>
                    <i class="fa-solid fa-envelope text-info"></i>info@a2zithub.com<br/>
                    Or Contact : 
                    <i class="fa-solid fa-phone text-info"></i>9011144920
                    </p>
                    </div>
                </div> 
        </>
    )
}
export default Jobs;