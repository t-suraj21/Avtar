import { useParams, Link } from "react-router-dom";
import { orders } from "../data/orders";

export default function OrderDetails() {
  const { id } = useParams();
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <main className="container-custom py-10">
        <h1 className="text-2xl font-poppins font-semibold">Order Not Found</h1>
        <Link to="/my-orders" className="btn-primary mt-4 inline-block">
          Back to Orders
        </Link>
      </main>
    );
  }

  return (
    <main className="container-custom py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-poppins font-semibold">Order Details</h1>
        <p className="mt-2 text-white/70">Order ID: {order.id}</p>

        {/* Order Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-glass p-6">
            <h3 className="font-semibold mb-4">Service Information</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-white/70">Service:</span>{" "}
                <span className="font-medium">{order.serviceTitle}</span>
              </div>
              <div>
                <span className="text-white/70">Description:</span>{" "}
                <span>{order.description}</span>
              </div>
              <div>
                <span className="text-white/70">Amount:</span>{" "}
                <span className="font-medium text-accent">${order.amount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="card-glass p-6">
            <h3 className="font-semibold mb-4">Client Information</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-white/70">Name:</span>{" "}
                <span className="font-medium">{order.clientName}</span>
              </div>
              <div>
                <span className="text-white/70">Email:</span>{" "}
                <span>{order.clientEmail}</span>
              </div>
              <div>
                <span className="text-white/70">Order Date:</span>{" "}
                <span>{order.createdAt.toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Timeline */}
        <div className="mt-8 card-glass p-6">
          <h3 className="font-semibold mb-6">Order Timeline</h3>
          <div className="space-y-4">
            {order.timeline?.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      item.status === order.status
                        ? "bg-primary"
                        : "bg-green-500"
                    }`}
                  />
                  {index < (order.timeline?.length || 0) - 1 && (
                    <div className="w-0.5 h-12 bg-white/20" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium capitalize">{item.status.replace("-", " ")}</span>
                    <span className="text-xs text-white/60">
                      {item.date.toLocaleDateString()}
                    </span>
                  </div>
                  {item.note && (
                    <p className="text-sm text-white/70 mt-1">{item.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div className="mt-6 card-glass p-6 bg-primary/10 border-primary/30">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <div>
              <p className="font-semibold">Current Status: {order.status.replace("-", " ").toUpperCase()}</p>
              <p className="text-sm text-white/70 mt-1">
                Last updated: {order.updatedAt.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <Link to="/contact" className="btn-primary">
            Contact Support
          </Link>
          <Link to="/my-orders" className="btn-secondary">
            Back to Orders
          </Link>
        </div>
      </div>
    </main>
  );
}
