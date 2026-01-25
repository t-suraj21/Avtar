export default function AdminUsers() {
  const users = [
    { id: "2", name: "John Doe", email: "john@example.com", role: "client", joined: "2026-01-10" },
    { id: "3", name: "Jane Smith", email: "jane@example.com", role: "client", joined: "2026-01-12" },
    { id: "4", name: "Bob Wilson", email: "bob@example.com", role: "client", joined: "2026-01-15" },
  ];

  return (
    <main className="container-custom py-10">
      <h1 className="text-3xl font-poppins font-semibold">Manage Users</h1>
      <p className="mt-2 text-white/70">View all registered clients</p>

      <div className="mt-8 card-glass overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Role</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Joined</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-white/5">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">{user.joined}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:underline text-sm">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
