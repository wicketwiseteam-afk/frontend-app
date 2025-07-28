import { motion } from "framer-motion";
import logo from "../assets/image.png";
import styles from "./LoginPage.module.css";
import { useState } from "react";

const RegisterPage = () => {
  const [role, setRole] = useState("Analyst");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className={`${styles.glow}`} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name *"
              className="w-1/2 px-4 py-3 rounded-lg bg-white/10 placeholder-gray-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="w-1/2 px-4 py-3 rounded-lg bg-white/10 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Username *"
            className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-400 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password *"
            className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-400 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-gray-400 focus:outline-none"
          />

          {/* Role Dropdown */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none"
          >
            <option value="Analyst">Analyst</option>
            <option value="Coach">Coach</option>
            <option value="Player">Player</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-400 font-bold hover:scale-105 transition"
          >
            Register
          </button>
        </form>

        {/* Switch to Login */}
        <p className="text-center mt-6 text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-400 cursor-pointer underline">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
