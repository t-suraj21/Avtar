import { useAuth } from "../../context/AuthContext";
import { orders } from "../../data/orders";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ClientDashboard() {
  const { user } = useAuth();
  const myOrders = orders.filter((o) => o.clientId === user?.id);
  const activeOrders = myOrders.filter((o) => o.status === "in-progress" || o.status === "review");

  return (
    <main className="container-custom py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-poppins font-semibold">Welcome back, {user?.name}!</h1>
        <p className="mt-2 text-white/70">Here's an overview of your projects</p>
      </motion.div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-glass p-6"
        >
          <p className="text-white/70 text-sm">Total Orders</p>
          <p className="text-3xl font-bold mt-2">{myOrders.length}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-glass p-6"
        >
          <p className="text-white/70 text-sm">Active Projects</p>
          <p className="text-3xl font-bold mt-2 text-primary">{activeOrders.length}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-glass p-6"
        >
          <p className="text-white/70 text-sm">Completed</p>
          <p className="text-3xl font-bold mt-2 text-green-400">
            {myOrders.filter((o) => o.status === "completed").length}
          </p>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/services" className="card-glass p-6 hover:bg-white/10 transition">
          <h3 className="font-semibold">New Order</h3>
          <p className="text-white/70 text-sm mt-1">Browse services and place order</p>
        </Link>
        <Link to="/my-orders" className="card-glass p-6 hover:bg-white/10 transition">
          <h3 className="font-semibold">My Orders</h3>
          <p className="text-white/70 text-sm mt-1">View all your orders</p>
        </Link>
        <Link to="/contact" className="card-glass p-6 hover:bg-white/10 transition">
          <h3 className="font-semibold">Support</h3>
          <p className="text-white/70 text-sm mt-1">Get help with your projects</p>
        </Link>
      </div>

      {/* Active Orders */}
      {activeOrders.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-poppins font-semibold mb-4">Active Projects</h2>
          <div className="space-y-4">
            {activeOrders.map((order) => (
              <div key={order.id} className="card-glass p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">{order.serviceTitle}</h3>
                    <p className="text-white/70 mt-1">{order.description}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === "in-progress"
                            ? "bg-blue-500/20 text-blue-300"
                            : "bg-purple-500/20 text-purple-300"
                        }`}
                      >
                        {order.status}
                      </span>
                      <span className="text-sm text-white/60">
                        Updated {order.updatedAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <Link to={`/orders/${order.id}`} className="btn-primary text-sm">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
