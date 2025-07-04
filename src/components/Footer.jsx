export default function Footer() {
  return (
    <footer
      className="py-6 text-center"
      style={{
        backgroundImage:
          'linear-gradient(to right top, #070a0e, #0b1120, #14132e, #271138, #3f043b)',
        color: '#f1f1f1',
      }}
    >
      <p className="text-sm tracking-wide">
        &copy; 2025 <span className="font-semibold text-yellow-300">PlantGuard</span>. All rights reserved.
      </p>
    </footer>
  );
}

