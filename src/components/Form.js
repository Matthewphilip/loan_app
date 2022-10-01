import React, { useState } from "react";
import "../styles/form.css";

const Form = () => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  // const [selected, setSelected] = useState(false);

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const loanTermHandler = (event) => {
    setLoanTerm(event.target.value);
    // setSelected(true);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const loanRequest = {
      Amount: enteredAmount,
      Term: loanTerm,
    };
    console.log(loanRequest);
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
