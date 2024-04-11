import React from 'react'

const StepSix = ({ nextPage }) => {
  return (
    <div>
      Step Six !!!
      <button
            
            onClick={nextPage}
            className="bg-[#E32B87] text-white font-bold py-2 px-4 rounded"
          >
            Continue
          </button>
    </div>
  )
}

export default StepSix
