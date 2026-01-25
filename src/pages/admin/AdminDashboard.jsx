import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { orders } from "../../data/orders";

export default function AdminDashboard() {
  const stats = {
    totalOrders: orders.length,
    activeOrders: orders.filter((o) => o.status === "in-progress").length,
    completedOrders: orders.filter((o) => o.status === "completed").length,
    totalRevenue: orders.reduce((sum, o) => sum + o.amount, 0),
  };

  const recentOrders = orders.slice(0, 5);

  return (
    <main className="container-custom py-10">
      <h1 className="text-3xl font-poppins font-semibold">Admin Dashboard</h1>
      <p className="mt-2 text-white/70">Overview of your business</p>

      {/* Stats Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-glass p-6"
        >
          <p className="text-white/70 text-sm">Total Orders</p>
          <p className="text-3xl font-bold mt-2">{stats.totalOrders}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-glass p-6"
        >
          <p className="text-white/70 text-sm">Active Orders</p>
          <p className="text-3xl font-bold mt-2 text-primary">{stats.activeOrders}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-glass p-6"
        >
          <p className="text-white/70 text-sm">Completed</p>
          <p className="text-3xl font-bold mt-2 text-green-400">{stats.completedOrders}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-glass p-6"
        >
          <p className="text-white/70 text-sm">Total Revenue</p>
          <p className="text-3xl font-bold mt-2 text-accent">${stats.totalRevenue.toLocaleString()}</p>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/admin/orders" className="card-glass p-6 hover:bg-white/10 transition">
          <h3 className="font-semibold">Manage Orders</h3>
          <p className="text-white/70 text-sm mt-1">View and update order status</p>
        </Link>
        <Link to="/admin/blog" className="card-glass p-6 hover:bg-white/10 transition">
          <h3 className="font-semibold">Manage Blog</h3>
          <p className="text-white/70 text-sm mt-1">Create and edit blog posts</p>
        </Link>
        <Link to="/admin/users" className="card-glass p-6 hover:bg-white/10 transition">
          <h3 className="font-semibold">Manage Users</h3>
          <p className="text-white/70 text-sm mt-1">View client accounts</p>
        </Link>
      </div>

      {/* Recent Orders */}
      <div className="mt-8">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-poppins font-semibold">Recent Orders</h2>
          <Link to="/admin/orders" className="text-primary hover:underline">View all</Link>
        </div>
        <div className="card-glass overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Client</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Service</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-white/5">
                    <td className="px-6 py-4 text-sm">{order.id}</td>
                    <td className="px-6 py-4 text-sm">{order.clientName}</td>
                    <td className="px-6 py-4 text-sm">{order.serviceTitle}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          order.status === "completed"
                            ? "bg-green-500/20 text-green-300"
                            : order.status === "in-progress"
                            ? "bg-blue-500/20 text-blue-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">${order.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
