import { useState } from "react";

function IncomePage() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const [showAmount, setShowAmount] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAmount([...showAmount, amount]);
    setDescription("");
    setAmount("");
  };

  return (
    <div className="container">
      <h1>Enter Income Transaction</h1>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {showAmount.length > 0 &&
        showAmount.map((amount, i) => (
          <h4 key={i}>
            Amount: {amount} <br />
          </h4>
        ))}
    </div>
  );
}

export default IncomePage;
