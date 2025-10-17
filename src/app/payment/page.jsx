"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || "3000";
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.title = "Payment | Digital Roadmap Tech Conference";
  }, []);

  // Open confirmation modal
  const handlePayment = () => {
    setShowModal(true);
  };

  // Confirm and process payment
  const confirmPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
      setShowSuccess(true);

      // Redirect to home after success
      setTimeout(() => {
        router.push("/");
      }, 2500);
    }, 2000);
  };

  return (
    <section className="d-flex align-items-center justify-content-center bg-light vh-100">
      <div
        className="card shadow-lg border-0 p-5 text-center animate__animated animate__fadeIn"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="text-primary fw-bold mb-3">Checkout</h2>
        <p className="text-muted mb-4">
          Please confirm your payment of <strong>₦{amount}</strong> to complete
          your registration.
        </p>

        <div className="border rounded p-3 mb-4 bg-white">
          <h5 className="text-dark mb-2">Digital Roadmap Tech Conference</h5>
          <p className="text-muted small mb-0">Standard Ticket – ₦{amount}</p>
        </div>

        <button
          onClick={handlePayment}
          className="btn btn-success btn-lg w-100 shadow-sm"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Processing...
            </>
          ) : (
            `Pay ₦${amount}`
          )}
        </button>

        <button
          onClick={() => router.push("/")}
          className="btn btn-outline-secondary w-100 mt-3"
        >
          Cancel
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Confirm Payment</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center py-4">
                <p className="text-muted mb-3">
                  You’re about to pay <strong>₦{amount}</strong> for your
                  conference ticket.
                </p>
                <p className="fw-semibold text-primary">
                  Proceed with the payment?
                </p>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  className="btn btn-secondary px-4"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-success px-4"
                  onClick={confirmPayment}
                >
                  Yes, Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Payment Successful</h5>
              </div>
              <div className="modal-body text-center py-4">
                <h5 className="fw-bold mb-2">Thank you!</h5>
                <p className="text-muted mb-2">
                  Your payment of <strong>₦{amount}</strong> was successful.
                </p>
                <p className="text-success fw-semibold mb-0">
                  Redirecting to homepage...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
