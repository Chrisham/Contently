
'use client';
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contently() {
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("X");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16));

  const handleSubmit = () => {
    alert(`Scheduled post for ${platform} on ${date}:\n\n${content}`);
    setContent("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8 text-white font-sans">
      <motion.h1
        className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contently – AI-Powered Scheduler
      </motion.h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Choose Platform</label>
            <select
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            >
              <option value="X">X (Twitter)</option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Write Your Post</label>
            <textarea
              placeholder="Craft your futuristic content here..."
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Pick a Date & Time</label>
            <input
              type="datetime-local"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button
            className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
            onClick={handleSubmit}
          >
            Schedule Post
          </button>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-xl hidden md:flex flex-col justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Smart Scheduling</h2>
            <p className="text-zinc-400">Contently helps you plan and schedule social posts with ease using a modern, elegant interface built for creators.</p>
            <div className="mt-8 text-sm text-zinc-500">
              🧠 AI-powered tools coming soon!
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
