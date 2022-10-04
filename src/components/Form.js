import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import SuccessModal from "./SuccessModal";
import "../styles/form.css";

const Form = () => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [activeTerm, setActiveTerm] = useState("");
  const [terms, setTerms] = useState([
    {
      id: 12,
      months: 12,
    },
    {
      id: 18,
      months: 18,
    },
    {
      id: 24,
      months: 24,
    },
  ]);

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredAmount && !activeTerm) {
      setError({
        title: "Error!",
        message:
          "You have empty fields, please enter all required details and resubmit.",
      });
      console.log(error);
    } else if (!enteredAmount || enteredAmount < 1) {
      setError({
        title: "Error!",
        message: "Please enter a valid loan amount (>0).",
      });
      console.log(error);
    } else if (!activeTerm) {
      setError({
        title: "Error!",
        message: "Please select a loan repayment term.",
      });
      console.log(error);
    } else
      setSuccess({
        title: "Thank You!",
        message: `Your loan request for £${enteredAmount} on a ${activeTerm} month term has been received.`,
      });

    console.log(success);

    const loanRequestLog = [];

    const dataStorage = () => {
      if (enteredAmount && activeTerm) {
        const individualRequest = {
          Amount: enteredAmount,
          Term: activeTerm,
        };
        console.log(individualRequest);

        return loanRequestLog.push(individualRequest);
      }
    };

    console.log(loanRequestLog);
    setEnteredAmount("");
    setActiveTerm("");
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
            {terms.map((term) => {
              return (
                <button
                  className={
                    activeTerm === term.id ? "button-active" : "button-inactive"
                  }
                  type="button"
                  key={term.id}
                  onClick={() => setActiveTerm(term.months)}
                >
                  {term.months}
                </button>
              );
            })}
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
