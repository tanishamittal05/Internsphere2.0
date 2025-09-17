import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Internsphere</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/profile" className="hover:text-cyan-400">Profile</Link>
        <Link to="/dashboard" className="hover:text-cyan-400">Dashboard</Link>
        <Link to="/tracker" className="hover:text-cyan-400">Tracker</Link>
        <Link to="/saved" className="hover:text-cyan-400">Saved</Link>
        <Link to="/admin" className="hover:text-cyan-400">Admin</Link>
      </div>
    </nav>
  )
}

export default Navbar