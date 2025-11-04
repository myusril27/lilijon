"use client";

import { useEffect, useState } from "react";

type User = { id: number; name: string; email: string; createdAt: string };

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadUsers() {
    setLoading(true);
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  }

  useEffect(() => { loadUsers(); }, []);

  async function handleDelete(id: number) {
    if (!confirm("Hapus user ini?")) return;
    const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
    if (res.ok) loadUsers();
    else alert("Gagal hapus");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Users</h1>
      {loading ? <p>Loading…</p> : (
        <table className="w-full table-auto">
          <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Created</th><th></th></tr></thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{new Date(u.createdAt).toLocaleString()}</td>
                <td><button onClick={() => handleDelete(u.id)} className="text-red-600">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}