import Breakdown from "../breakdowns/breakdown";
import "./paymentbreakdown.scss";

function Paymentbreakdown() {
  return (
    <>
      <div className="payment-breakdowns">
        <h2>payment history</h2>
        <Breakdown />
      </div>
    </>
  );
}

export default Paymentbreakdown;
