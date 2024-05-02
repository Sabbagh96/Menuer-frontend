import React, { useState } from "react";
import StepOne from "../register/StepOne";
import StepTwo from "../register/StepTwo";

const Register = () => {
  const [page, setPage] = useState(0);
  const [regEmail, setRegEmail] = useState("");
  const formTitles = [
    "Create Account",
    "Create Account",
  ];
  const pageDisplay = () => {
    return page === 0 ? (
      <StepOne
        regEmail={regEmail}
        setRegEmail={setRegEmail}
        nextPage={() => setPage(page + 1)}
        formTitles={formTitles}
        page={page}
      />
    ) : (
      <StepTwo
        regEmail={regEmail}
        nextPage={() => setPage(page + 1)}
        formTitles={formTitles}
        page={page}
      />
    );
  };
  return (
    <div>
      <div>
        {/* Header starts here */}
        {/* <div>
          <h1>{formTitles[page]}</h1>
        </div> */}
        {/* Header ends here */}
        {/* Body starts here */}
        <div>{pageDisplay()}</div>
        {/* Body ends here */}
        {/* Button  starts here*/}
        <div></div>
        {/* Button  ends here*/}
      </div>
    </div>
  );
};

export default Register;
