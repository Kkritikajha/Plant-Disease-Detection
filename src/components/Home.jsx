import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div
      className="px-6 py-24 min-h-screen space-y-20"
      style={{
        backgroundImage:
          'linear-gradient(to right top, #070a0e, #0b1120, #14132e, #271138, #3f043b)',
        color: '#f1f1f1',
      }}
    >
      {/* Hero Section */}
      <motion.h2
        className="text-6xl font-bold text-yellow-300 text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to PlantGuard
      </motion.h2>

      <motion.p
        className="text-xl text-center text-gray-100 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Empowering farmers through AI technology. Identify plant diseases early and
        protect your agricultural yield from unnecessary losses.
      </motion.p>

      {/* Info Grid Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 text-lg max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-200">Why It Matters</h3>
          <ul className="space-y-3 list-disc pl-5 text-gray-100">
            <li><strong>Crop Diseases:</strong> Blight, rust, mildew & bacterial spots silently destroy yields.</li>
            <li><strong>Farmer Loss:</strong> Delayed detection leads to financial loss & low productivity.</li>
            <li><strong>AI Aid:</strong> PlantGuard uses image classification to detect symptoms like chlorosis and wilting.</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-200">How PlantGuard Helps</h3>
          <ul className="space-y-3 list-disc pl-5 text-gray-100">
            <li>Detect diseases early before they spread across the field.</li>
            <li>Understand symptoms like necrosis, fungal spores, wilting, and leaf curl.</li>
            <li>Empower smart farming with machine learning and computer vision.</li>
          </ul>
        </div>
      </motion.div>

      {/* Agricultural Knowledge Sections */}
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Sustainable Farming */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://straydoginstitute.org/wp-content/uploads/2021/06/iStock-1130072643.jpg"
            alt="Sustainable farming"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold text-yellow-200 mb-4">Sustainable Farming</h3>
            <p className="text-gray-100">
              Sustainable farming involves eco-friendly practices like crop rotation, organic fertilizers, and reduced water usage. It's key to long-term agricultural health.
            </p>
          </div>
        </motion.div>

        {/* Common Plant Diseases */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <img
            src="https://envii.co.uk/cdn/shop/files/1285.jpg?v=1740500632&width=1500"
            alt="Common plant diseases"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold text-yellow-200 mb-4">Common Plant Diseases</h3>
            <p className="text-gray-100">
              Diseases like leaf spot, downy mildew, and powdery mildew can be hard to spot early. Learn to recognize early symptoms and prevent crop loss with knowledge and tech.
            </p>
          </div>
        </motion.div>

        {/* Smart Agriculture with AI */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <img
            src="https://d17ocfn2f5o4rl.cloudfront.net/wp-content/uploads/2023/07/BP-AI-in-Agriculture-The-Future-of-Farming_body-im-8.jpg"
            alt="Smart Agriculture"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold text-yellow-200 mb-4">Smart Agriculture with AI</h3>
            <p className="text-gray-100">
              AI and computer vision revolutionize agriculture — from disease detection to crop monitoring, PlantGuard enables farmers to make timely and informed decisions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
