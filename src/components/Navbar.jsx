import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      className="p-4 shadow-md"
      style={{
        backgroundImage:
          'linear-gradient(to right top, #070a0e, #0b1120, #14132e, #271138, #3f043b)',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-200 tracking-wide">PlantGuard</h1>
        <div className="space-x-6 text-lg">
          <Link to="/" className="text-gray-100 hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="text-gray-100 hover:text-yellow-300 transition">About</Link>
          <Link to="/upload" className="text-gray-100 hover:text-yellow-300 transition">Upload</Link>
        </div>
      </div>
    </nav>
  );
}
