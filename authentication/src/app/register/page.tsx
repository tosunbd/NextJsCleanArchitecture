'use client';
import { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setMessage(data.message || '');

    if (res.ok) {
      localStorage.setItem('token', data.token); // store token
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>

        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required
          className="w-full px-3 py-2 mb-4 border rounded" />

        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required
          className="w-full px-3 py-2 mb-4 border rounded" />

        <button type="submit" className="w-full py-2 text-white bg-green-600 rounded hover:bg-green-700">
          Register
        </button>

        {message && <p className="mt-4 text-sm text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
}
