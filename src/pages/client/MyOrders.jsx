import { useAuth } from "../../context/AuthContext";
import { orders } from "../../data/orders";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MyOrders() {
  const { user } = useAuth();
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const myOrders = orders.filter((o) => o.clientId === user?.id);
  const filteredOrders =
    filter === "all"
      ? myOrders
      : filter === "active"
      ? myOrders.filter((o) => o.status === "in-progress" || o.status === "review" || o.status === "pending")
      : myOrders.filter((o) => o.status === "completed");

  return (
    <main className="container-custom py-10">
      <h1 className="text-3xl font-poppins font-semibold">My Orders</h1>
      <p className="mt-2 text-white/70">Track all your projects</p>

      {/* Filters */}
      <div className="mt-6 flex gap-2">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg border ${
              filter === f ? "bg-primary border-primary" : "border-white/20 hover:bg-white/5"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="mt-8 space-y-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="card-glass p-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-lg">{order.serviceTitle}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      order.status === "completed"
                        ? "bg-green-500/20 text-green-300"
                        : order.status === "in-progress"
                        ? "bg-blue-500/20 text-blue-300"
                        : order.status === "review"
                        ? "bg-purple-500/20 text-purple-300"
                        : "bg-yellow-500/20 text-yellow-300"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-white/70 mt-2">{order.description}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/60">
                  <span>Order ID: {order.id}</span>
                  <span>Amount: ${order.amount.toLocaleString()}</span>
                  <span>Placed: {order.createdAt.toLocaleDateString()}</span>
                </div>
              </div>
              <Link to={`/orders/${order.id}`} className="btn-primary text-sm">
                Track Order
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="mt-8 card-glass p-8 text-center">
          <p className="text-white/70 mb-4">No orders found</p>
          <Link to="/services" className="btn-primary">
            Browse Services
          </Link>
        </div>
      )}
    </main>
  );
}
