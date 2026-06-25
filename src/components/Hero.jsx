import { motion } from 'framer-motion'
import { useState } from 'react'
import { RiMapPinLine, RiMenuLine } from 'react-icons/ri'

const shopImg = '/shop.webp'

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex items-center bg-gradient-to-br from-green-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-700 text-xs font-semibold rounded-full px-4 py-1.5 mb-5"
          >
            <span>🔥</span> Your Hunger Ends Here!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-5"
          >
            Your Favourite<br />
            <span className="text-green-700">E Stop</span><br />
            Eatery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md"
          >
            Hot snacks, cold drinks & hearty meals — made fresh and served with a smile. Your neighbourhood stop for every craving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-2xl transition-all shadow-lg shadow-green-200 hover:-translate-y-0.5"
            >
              <RiMenuLine /> View Menu
            </a>
            <a
              href="#location"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-2xl border border-gray-200 transition-all hover:border-green-400"
            >
              <RiMapPinLine className="text-green-700" /> Find Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex gap-8 mt-10 pt-8 border-t border-gray-100"
          >
            {[
              { num: '40+',   label: 'Menu Items' },
              { num: '5★',    label: 'Google Rating' },
              { num: 'Daily', label: 'Fresh Food' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-gray-900">{s.num}</p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Shop Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:block"
        >
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-green-100 border border-green-100 bg-gradient-to-br from-green-100 to-yellow-50">
            <img
              src={shopImg}
              alt="E Stop Eatery"
              className="w-full h-full object-cover"
              onError={e => {
                e.target.style.display = 'none'
                e.target.parentNode.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center gap-3"><span style="font-size:80px">🍱</span><p style="font-size:13px;color:#6b7280">Add shop.jpg to /public folder</p></div>'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
