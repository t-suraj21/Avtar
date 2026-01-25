import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { services } from "../data/services";

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("service");
  const service = services.find((s) => s.id === serviceId);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    paymentMethod: "card",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock payment processing
    navigate("/payment-success");
  };

  if (!service) {
    return (
      <main className="container-custom py-10">
        <h1 className="text-2xl font-poppins font-semibold">Service not found</h1>
        <p className="mt-2 text-white/70">Please select a valid service</p>
      </main>
    );
  }

  return (
    <main className="container-custom py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-poppins font-semibold">Checkout</h1>
        <p className="mt-2 text-white/70">Complete your order</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info */}
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md bg-white/5 border border-white/20 px-3 py-2 outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md bg-white/5 border border-white/20 px-3 py-2 outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-md bg-white/5 border border-white/20 px-3 py-2 outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-4">Project Description</h3>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your project requirements..."
                  className="w-full rounded-md bg-white/5 border border-white/20 px-3 py-2 outline-none focus:border-primary"
                />
              </div>

              {/* Payment Method */}
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-4">Payment Method</h3>
                <div className="space-y-3">
                  {[
                    { id: "card", label: "Credit/Debit Card", icon: "💳" },
                    { id: "razorpay", label: "Razorpay", icon: "💰" },
                    { id: "stripe", label: "Stripe", icon: "💵" },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer ${
                        formData.paymentMethod === method.id
                          ? "border-primary bg-primary/10"
                          : "border-white/20 hover:bg-white/5"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="sr-only"
                      />
                      <span className="text-2xl">{method.icon}</span>
                      <span className="font-medium">{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full btn-primary py-3">
                Place Order & Pay
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card-glass p-6 sticky top-20">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-white/70">Service</p>
                  <p className="font-medium">{service.title}</p>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">Subtotal</span>
                    <span>Contact for quote</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">Tax</span>
                    <span>TBD</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-accent">Quote-based</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
