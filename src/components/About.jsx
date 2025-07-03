import { motion } from 'framer-motion';

export default function About() {
  return (
    <div
      className="px-6 py-20 min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(to left bottom, #6c42a4, #5c489f, #4f4d99, #454f90, #3f5186, #365787, #2f5c87, #2c6185, #176c8c, #00778f, #00818e, #058b8b)',
        color: '#f0f0f0',
      }}
    >
      {/* About Section */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-yellow-300 mb-6">About PlantGuard</h2>
        <p className="text-lg leading-8 text-gray-100">
          <strong>PlantGuard</strong> is an AI-powered platform that empowers farmers and gardeners to detect plant diseases through deep learning. Our intelligent model, trained on thousands of diseased and healthy leaf images, delivers fast and accurate predictions — enabling timely treatment and improved crop health.
        </p>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="text-3xl font-bold text-yellow-200 mb-2">Meet the Team</h3>
        <p className="text-lg text-gray-200">
          The visionaries behind PlantGuard — combining AI, agriculture, and compassion.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {/* Team Member 1 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Kritika Jha"
            className="mx-auto rounded-full w-32 h-32 object-cover mb-4 shadow-md"
          />
          <h4 className="text-xl font-semibold text-yellow-200">Kritika Jha</h4>
          <p className="text-gray-100 mb-2">AI Engineer & Researcher</p>
          <p className="text-sm text-gray-200">
            Kritika leads model development and training. Her focus is on building scalable, real-time plant disease detection pipelines using deep learning and computer vision.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Jayant Kishore"
            className="mx-auto rounded-full w-32 h-32 object-cover mb-4 shadow-md"
          />
          <h4 className="text-xl font-semibold text-yellow-200">Jayant Kishore</h4>
          <p className="text-gray-100 mb-2">Full Stack Developer</p>
          <p className="text-sm text-gray-200">
            Jayant built the web interface and backend infrastructure. He ensures seamless user experience and smooth integration of the AI model into a production-ready system.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
