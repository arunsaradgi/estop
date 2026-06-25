import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuItems, categories } from '../data/menu'

function VegDot({ veg }) {
  if (veg === null) return null
  return (
    <span className={`inline-flex w-4 h-4 rounded-sm border-2 items-center justify-center flex-shrink-0 ${veg ? 'border-green-600' : 'border-red-500'}`}>
      <span className={`w-2 h-2 rounded-full ${veg ? 'bg-green-600' : 'bg-red-500'}`} />
    </span>
  )
}

function MenuCard({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className={`bg-white rounded-2xl border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200
        ${item.special ? 'border-yellow-400 ring-1 ring-yellow-200' : 'border-gray-100'}`}
    >
      <div className={`h-36 flex items-center justify-center text-5xl
        ${item.special
          ? 'bg-gradient-to-br from-green-700 to-green-600'
          : 'bg-gradient-to-br from-green-50 to-yellow-50'}`}
      >
        {item.emoji}
      </div>
      <div className="p-4">
        <div className="flex items-start gap-2 mb-1">
          <VegDot veg={item.veg} />
          <h3 className={`text-sm font-bold leading-snug ${item.special ? 'text-green-700' : 'text-gray-900'}`}>
            {item.name}
            {item.special && (
              <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 font-semibold px-2 py-0.5 rounded-lg">
                BESTSELLER
              </span>
            )}
          </h3>
        </div>
        <p className="text-xs text-gray-400 mb-3 leading-relaxed">{item.desc}</p>
        <p className="text-base font-extrabold text-green-700">₹{item.price}</p>
      </div>
    </motion.div>
  )
}

export default function Menu() {
  const [active, setActive] = useState('all')

  const visible = active === 'all'
    ? menuItems
    : menuItems.filter(i => i.cat === active || i.cat === 'all')

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-2">What We Serve</p>
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">Our Menu</h2>
        <p className="text-gray-400 text-base mb-8 max-w-md">From morning bites to evening treats — fresh, affordable & delicious.</p>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map(c => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200
                ${active === c.key
                  ? 'bg-green-700 text-white border-green-700 shadow-sm'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-green-500 hover:text-green-700'}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="text-xs text-gray-400 mt-6 text-center">* Parcel charges extra</p>
      </div>
    </section>
  )
}
