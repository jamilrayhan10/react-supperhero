import React from "react";
import "./ShowProgrammar.css";

const ShowProgrammar = (props) => {
  // console.log(props.showprogrammar);
  const { showprogrammar } = props;

  let totalSalary = 0;
  let programmarName = "";
  for (const programmar of showprogrammar) {
    totalSalary = totalSalary + programmar.salary;
    programmarName = programmarName + programmar.name + " ";
    // programmarName = `${programmarName} ${programmar.name}`;
  }

  return (
    <div className="showProgrammar " id="showProgrammar">
      <h4 className="text-center text-capitalize">
        programmar add: {props.showprogrammar.length}
      </h4>

      <h5 className="text-center text-capitalize py-2 border-bottom">
        Total salary: {totalSalary} tk
      </h5>
      <h3 className="pt-3 b-block text-center my-2">{programmarName}</h3>
    </div>
  );
};

export default ShowProgrammar;
