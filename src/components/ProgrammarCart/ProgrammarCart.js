import React from "react";
import "./ProgrammarCart.css";


const ProgrammarCart = (props) => {
  // console.log(props.programmar);
  const { img, id, name, company, country, salary } = props.programmar;
   

  return (
    <div className="ProgrammarCart col-lg-4">
      <div className="card mb-3 myCardDesing">
        <div className="row g-0">
          <div className="col-md-4 myStyle">
            <img className="img-fluid  rounded-circle " src={img} alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body mycart">
              <p>Id : {id}</p>
              <p>name : {name.toUpperCase()}</p>
              <p>Company : {company}</p>
              <p>Country : {country}</p>
              <p>Salary : {salary} tk</p>
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-youtube icon"></i>
              <i className="fab fa-twitter icon"></i>

              <button
                onClick={() => props.addHendalar(props.programmar)}
                className="btn d-block btn-outline-info px-3 mt-2  text-uppercase detailsbtn"
              >  
                <i className="fas fa-user-plus p-0 me-2"></i>
                add to team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammarCart;
