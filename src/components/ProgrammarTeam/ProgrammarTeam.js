import React from "react";
import "./ProgrammarTeam.css";
import { useEffect, useState } from "react";
import ProgrammarCart from "../ProgrammarCart/ProgrammarCart";
import ShowProgrammar from "../ShowProgrammar/ShowProgrammar";

const ProgrammarTeam = () => {
  const [programmars, setProgrammars] = useState([]);
  const [showprogrammar, setShowprogrammar] = useState([]);
  useEffect(() => {
    fetch("./programmar.JSON")
      .then((res) => res.json())
      .then((data) => setProgrammars(data));
  }, []);
  const addHendalar = (showMembur) => {
    // console.log(showMembur)
    const addMembur = [...showprogrammar, showMembur];
    setShowprogrammar(addMembur);
  };
  return (
    <div className="ProgrammarTeam pt-5">
      <div className="row">
        <div className="col-lg-9 p-0 ">
          <div className="row">
            {programmars.map((programmar) => (
              <ProgrammarCart
                addHendalar={addHendalar}
                key={programmar.id}
                programmar={programmar}
              ></ProgrammarCart>
            ))}
          </div>
        </div>
        <div className="col-lg-3">
          <ShowProgrammar showprogrammar={showprogrammar}></ShowProgrammar>
        </div>
      </div>
    </div>
  );
};

export default ProgrammarTeam;
