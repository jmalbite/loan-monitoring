import "./breakdown.scss";

function Breakdown() {
  return (
    <div className="payment-history">
      <div className="breakdown">
        <h5 className="date">February, 14, 2020</h5>
        <div className="current-balance">
          <h4 className="current-balance">₱7200</h4>
          <span>current balance</span>
        </div>
        <div className="amount-paid">
          <h4 className="amount-paid">₱500</h4>
          <span>amount paid</span>
        </div>
        <div className="remaining-balance">
          <h4 className="new-balance">₱6700</h4>
          <span>new balance</span>
        </div>
      </div>
    </div>
  );
}

export default Breakdown;
