import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const { motion } = window.FramerMotion;

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Interview Platform</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Interview</li>
          <li className="hover:text-blue-500 cursor-pointer">Practice</li>
          <li className="hover:text-blue-500 cursor-pointer">Code</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="flex flex-col items-center justify-center h-96"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          Welcome to Your Interview Platform
        </h1>
        <p className="text-gray-600 text-lg text-center max-w-xl">
          Practice coding problems, simulate interviews, and improve your skills online.
        </p>
      </motion.section>

      {/* Features Section */}
      <section className="px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Interview</h2>
          <p>Simulate real interview scenarios and get feedback.</p>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Practice</h2>
          <p>Solve coding challenges and track your progress.</p>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Code</h2>
          <p>Write, test, and share code directly in the browser.</p>
        </motion.div>
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



export default App
