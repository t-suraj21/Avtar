import { useState } from "react";
import { Link } from "react-router-dom";
import { orders } from "../../data/orders";
import type { OrderStatus } from "../../data/orders";

export default function AdminOrders() {
  const [filter, setFilter] = useState<OrderStatus | "all">("all");
  const filteredOrders = filter === "all" ? orders : orders.filter((o) => o.status === filter);

  return (
    <main className="container-custom py-10">
      <h1 className="text-3xl font-poppins font-semibold">Manage Orders</h1>
      <p className="mt-2 text-white/70">View and update all orders</p>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        {["all", "pending", "in-progress", "review", "completed", "cancelled"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as OrderStatus | "all")}
            className={`px-4 py-2 rounded-lg border ${
              filter === status ? "bg-primary border-primary" : "border-white/20 hover:bg-white/5"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
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
                  <h3 className="font-semibold text-lg">{order.id}</h3>
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
                <p className="text-white/70 mt-2">{order.serviceTitle}</p>
                <p className="text-sm text-white/60 mt-1">{order.description}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/60">
                  <span>Client: {order.clientName}</span>
                  <span>Amount: ${order.amount.toLocaleString()}</span>
                  <span>Date: {order.createdAt.toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link to={`/orders/${order.id}`} className="btn-primary text-sm">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="mt-8 card-glass p-8 text-center">
          <p className="text-white/70">No orders found with status: {filter}</p>
        </div>
      )}
    </main>
  );
}
