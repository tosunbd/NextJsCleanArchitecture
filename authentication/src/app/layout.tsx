import Link from 'next/link';
import './globals.css';


export const metadata = {
  title: 'Clean Auth App',
  description: 'Simple login + register',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow">
          <div className="text-xl font-bold text-blue-600">CleanAuth</div>
          <div className="space-x-4">
            <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
            <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
