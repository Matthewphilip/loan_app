import React, { useState } from "react";
import "../styles/form.css";

const Form = () => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState();
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState();

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const loanTermHandler = (event) => {
    setLoanTerm(event.target.value);
    setSelected(true);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredAmount && selected === false) {
      setError("No information provided!");
      console.log(error);
    } else if (!enteredAmount) {
      setError("Loan amount required!");
      console.log(error);
    } else if (selected === false) {
      setError("Loan term required!");
      console.log(error);
    } else {
      const loanRequest = {
        Amount: enteredAmount,
        Term: loanTerm,
      };
      console.log(loanRequest);

      setEnteredAmount("");
      setLoanTerm("");
      setSelected(false);
    }
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <h3 className="form-title">Apply for a loan now 👍</h3>
      <div className="loan-amount">
        <label>Loan amount</label>
        <input
          type="number"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
        <label>Loan term (months)</label>
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
  );
};

export default Form;
