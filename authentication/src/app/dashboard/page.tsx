'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-green-50 to-white">
      <div className="w-full max-w-2xl p-10 bg-white border shadow-xl rounded-2xl">
        <h1 className="mb-4 text-4xl font-bold text-center text-green-700">
          🎉 Welcome Back!
        </h1>
        <p className="mb-6 text-lg text-center text-gray-700">
          You're now logged in to the Employee Management System.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="p-6 transition border rounded-xl hover:shadow-lg">
            <h2 className="mb-2 text-xl font-semibold text-green-600">Employee Directory</h2>
            <p className="text-gray-600">View and manage the list of all employees.</p>
          </div>

          <div className="p-6 transition border rounded-xl hover:shadow-lg">
            <h2 className="mb-2 text-xl font-semibold text-green-600">Profile Settings</h2>
            <p className="text-gray-600">Update your personal information and preferences.</p>
          </div>

          <div className="p-6 transition border rounded-xl hover:shadow-lg">
            <h2 className="mb-2 text-xl font-semibold text-green-600">Reports</h2>
            <p className="text-gray-600">Generate monthly and quarterly reports easily.</p>
          </div>

          <div className="p-6 transition border rounded-xl hover:shadow-lg">
            <h2 className="mb-2 text-xl font-semibold text-green-600">Logout</h2>
            <p className="text-gray-600">Securely exit your session.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
