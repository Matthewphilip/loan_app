import React, { useState } from "react";
import ErrorModal from "./ErrorModal/ErrorModal";
import SuccessModal from "./SuccessModal/SuccessModal";
import "../styles/form.css";

const Form = () => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState();
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState();
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [success, setSuccess] = useState();

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const loanTermHandler = (event) => {
    setLoanTerm(event.target.value);
    setSelected(true);
    console.log(event.target.value);
    // event.target.style.backgroundColor = "purple";
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredAmount && selected === false) {
      setError({
        title: "Error!",
        message:
          "You have empty fields, please enter all required details and resubmit.",
      });
      console.log(error);
    } else if (!enteredAmount) {
      setError({
        title: "Error!",
        message: "Please enter a loan amount.",
      });
      console.log(error);
    } else if (selected === false) {
      setError({
        title: "Error!",
        message: "Please enter a loan term.",
      });
      console.log(error);
    } else {
      setSuccessfulSubmit(true);
      setSuccess({
        title: "Thank You!",
        message: `Your loan request for £${enteredAmount} on a ${loanTerm} month term has been received.`,
      });

      const individualRequest = {
        Amount: enteredAmount,
        Term: loanTerm,
      };

      const loanRequestLog = [];

      loanRequestLog.push(individualRequest);

      console.log(individualRequest);
      console.log(loanRequestLog);

      setEnteredAmount("");
      setLoanTerm("");
      setSelected(false);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  const successHandler = () => {
    setSuccess(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {success && (
        <SuccessModal
          title={success.title}
          message={success.message}
          onConfirm={successHandler}
        />
      )}
      <form className="form-container" onSubmit={submitHandler}>
        <h3 className="form-title">Apply for a loan now 👍</h3>
        <div className="loan-amount">
          <label className="loan-amount-label" htmlFor="amount">
            Loan amount
          </label>
          <span className="input-symbol-euro">
            <input
              id="amount"
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </span>
          <label className="loan-term-label">Loan term (months)</label>
          <div className="button-container">
            <button type="button" onClick={loanTermHandler} value="12">
              12
            </button>
            <button type="button" onClick={loanTermHandler} value="18">
              18
            </button>
            <button type="button" onClick={loanTermHandler} value="24">
              24
            </button>
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
