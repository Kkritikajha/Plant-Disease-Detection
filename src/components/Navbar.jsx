import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      className="p-4 shadow-md"
      style={{
        backgroundImage:
          'linear-gradient(to left bottom, #6c42a4, #5c489f, #4f4d99, #454f90, #3f5186, #365787, #2f5c87, #2c6185, #176c8c, #00778f, #00818e, #058b8b)',
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
