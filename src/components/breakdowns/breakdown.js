import "./breakdown.scss";

function Breakdown() {
  return (
    <div className="payment-history">
      <div className="breakdown">
        <h5>February, 14, 2020</h5>
        <div className="computation">
          <h4>₱7200</h4>
          <span>current balance</span>
          <h4>₱500</h4>
          <span>amount paid</span>
        </div>
        <div className="remaining-balance">
          <h4>₱6700</h4>
          <span>new balance</span>
        </div>
      </div>

      <div className="breakdown">
        <h5>February, 14, 2020</h5>
        <div className="computation">
          <h4>₱7200</h4>
          <span>current balance</span>
          <h4>₱500</h4>
          <span>amount paid</span>
        </div>
        <div className="remaining-balance">
          <h4>₱6700</h4>
          <span>new balance</span>
        </div>
      </div>

      <div className="breakdown">
        <h5>February, 14, 2020</h5>
        <div className="computation">
          <h4>₱7200</h4>
          <span>current balance</span>
          <h4>₱500</h4>
          <span>amount paid</span>
        </div>
        <div className="remaining-balance">
          <h4>₱6700</h4>
          <span>₱new balance</span>
        </div>
      </div>
    </div>
  );
}

export default Breakdown;
