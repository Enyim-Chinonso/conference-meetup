"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    occupation: "",
    ticketType: "regular",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // Ticket pricing
  const ticketPrices = {
    regular: 3000,
    founder: 5000,
  };

  const selectedAmount = ticketPrices[formData.ticketType];

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // 🔹 Client-side Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Full name must contain only letters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.occupation.trim()) {
      newErrors.occupation = "Occupation is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.occupation.trim())) {
      newErrors.occupation = "Occupation must contain only letters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      console.log("Form submitted:", formData);
      setShowModal(true);

      setTimeout(() => {
        router.push(`/payment?amount=${selectedAmount}&type=${formData.ticketType}`);
      }, 2500);
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register"
      className="py-5 d-flex justify-content-center align-items-center bg-light min-vh-100"
    >
      <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: "600px", width: "100%" }}>
        <div className="card-body p-5">
          <h2 className="text-center text-primary mb-3 fw-bold">
            Register for Digital Roadmap Tech Conference
          </h2>
          <p className="text-center text-muted mb-4">
            Choose your ticket and secure your seat today!
          </p>

          <form onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label fw-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`form-control form-control-lg ${errors.fullName ? "is-invalid" : ""}`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control form-control-lg ${errors.email ? "is-invalid" : ""}`}
                placeholder="example@email.com"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Occupation */}
            <div className="mb-4">
              <label htmlFor="occupation" className="form-label fw-semibold">
                Occupation
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className={`form-control form-control-lg ${errors.occupation ? "is-invalid" : ""}`}
                placeholder="What do you do?"
              />
              {errors.occupation && <div className="invalid-feedback">{errors.occupation}</div>}
            </div>

            {/* Ticket Type */}
            <div className="mb-4">
              <label htmlFor="ticketType" className="form-label fw-semibold">
                Select Ticket Type
              </label>
              <select
                id="ticketType"
                name="ticketType"
                value={formData.ticketType}
                onChange={handleChange}
                className="form-select form-select-lg"
              >
                <option value="regular"> Regular — ₦3,000</option>
                <option value="founder"> Founder — ₦5,000</option>
              </select>
            </div>

            {/* Ticket Summary */}
            <div className="alert alert-info text-center py-3 mb-4 rounded-3">
              Selected Ticket:{" "}
              <strong className="text-primary text-uppercase">
                {formData.ticketType} — ₦{selectedAmount.toLocaleString()}
              </strong>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 btn-lg shadow-sm"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Processing...
                </>
              ) : (
                "Register Now"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg rounded-3">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Registration Successful</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center py-4">
                <h5 className="fw-bold mb-2">Thank you, {formData.fullName}!</h5>
                <p className="text-muted">Your registration was successful.</p>
                <p className="text-primary fw-semibold">
                  Ticket Type: {formData.ticketType.toUpperCase()} — ₦{selectedAmount.toLocaleString()}
                </p>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  className="btn btn-success px-4"
                  onClick={() => {
                    setShowModal(false);
                    router.push(`/payment?amount=${selectedAmount}&type=${formData.ticketType}`);
                  }}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
