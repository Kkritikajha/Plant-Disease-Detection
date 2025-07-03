export default function Footer() {
  return (
    <footer
      className="py-6 text-center"
      style={{
        backgroundImage:
          'linear-gradient(to left bottom, #6c42a4, #5c489f, #4f4d99, #454f90, #3f5186, #365787, #2f5c87, #2c6185, #176c8c, #00778f, #00818e, #058b8b)',
        color: '#f1f1f1',
      }}
    >
      <p className="text-sm tracking-wide">
        &copy; 2025 <span className="font-semibold text-yellow-300">PlantGuard</span>. All rights reserved.
      </p>
    </footer>
  );
}
