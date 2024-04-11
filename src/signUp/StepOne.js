import React, { useState } from 'react'

const EMAIL_REGEX = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/

const StepOne = ({ nextPage, regEmail, setRegEmail }) => {
  const [emailError, setEmailError] = useState(null)

  const handleEmailChange = (e) => {
    setRegEmail(e.target.value)
    setEmailError(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!EMAIL_REGEX.test(regEmail)) {
      setEmailError('Please enter a valid email address.')
      return
    }
    nextPage()
  }

  return (
    <div className="relative w-full h-screen bg-hero_section">
      <div className="bg-white w-1/3 border rounded-xl min-h-96 absolute right-32 top-20 z-50 shadow-lg">
        <h1 className="mt-8 flex ml-10 text-xl font-bold">Create Account</h1>
        <div className="font-semibold">
          <div className="flex ml-10 text-sm ">
            Already Have Account?{" "}
            <span className="ml-1 text-[#E32B87] underline"> Log In</span>
          </div>
        </div>
        <div>
          <div className="font-semibold flex text-sm justify-start ml-10 mt-6">
            Email Address
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="flex border-[1px] outline-none border-gray-300 rounded-lg mt-1 ml-10 w-3/4 h-11 p-2 "
              type="email"
              value={regEmail}
              placeholder="example@gmail.com"
              onChange={handleEmailChange}
            />
            {emailError && (
              <div className="text-red-500 text-sm mt-1 ml-10">
                {emailError}
              </div>
            )}
            <button
              type="submit"
              className="bg-[#E32B87] text-white font-bold py-2 px-4 rounded-xl  w-3/4 mt-5 mr-6 text-center "
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StepOne