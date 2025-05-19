
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
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 to-gray-800 p-8 text-white font-sans">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contently – Futuristic Social Scheduler
      </motion.h1>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-950 border border-zinc-700 rounded-lg p-6 space-y-4">
          <label className="block text-sm font-medium">Choose Platform</label>
          <select
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-lg"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="X">X (Twitter)</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
          </select>

          <label className="block text-sm font-medium">Write Your Post</label>
          <textarea
            placeholder="Craft your futuristic content here..."
            className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-lg p-2"
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <label className="block text-sm font-medium mt-4">Pick a Date & Time</label>
          <input
            type="datetime-local"
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-lg"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button
            className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
            onClick={handleSubmit}
          >
            Schedule Post
          </button>
        </div>
      </div>
    </div>
  );
}
