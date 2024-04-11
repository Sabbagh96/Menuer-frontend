import React , { useState }  from 'react'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';
 

const Form = () => {
    const [page , setPage] = useState(0) ; 
    const [regEmail, setRegEmail] = useState("") ; 
    const formTitles = [
      "Create Account",
      "Create Account",
      "Create Business",
      "Create Business",
      "Create Business",
      "Create Business",
    ];
    const pageDisplay = () => {
      return page === 0 ? (
        <StepOne regEmail={regEmail} setRegEmail={setRegEmail}  nextPage={() => setPage(page + 1)} formTitles={formTitles} page={page} />
      ) : page === 1 ? (
        <StepTwo regEmail={regEmail} nextPage={() => setPage(page + 1)} formTitles={formTitles} page={page} />
      ) : page === 2 ? (
        <StepThree nextPage={() => setPage(page + 1)} formTitles={formTitles} page={page} />
      ) : page === 3 ? (
        <StepFour nextPage={() => setPage(page + 1)} formTitles={formTitles} page={page} />
      ) : page === 4 ? (
        <StepFive nextPage={() => setPage(page + 1)} formTitles={formTitles} page={page} />
      ) : (
        <StepSix />
      );
    }
  return (
    <div >
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
        <div>
          
        </div>
        {/* Button  ends here*/}
      </div>
    </div>
  );
}

export default Form
