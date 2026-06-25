import { motion } from 'framer-motion'
import { RiWhatsappLine, RiPhoneLine, RiMapPinLine, RiInstagramLine } from 'react-icons/ri'

const buttons = [
  {
    href: 'https://wa.me/917975940704?text=Hi%20E%20Stop%2C%20I%20want%20to%20place%20an%20order!',
    icon: RiWhatsappLine,
    label: 'WhatsApp Order',
    className: 'bg-[#25d366] hover:bg-[#20bd5c] text-white',
  },
  {
    href: 'tel:+917975940704',
    icon: RiPhoneLine,
    label: 'Call Us',
    className: 'bg-orange-500 hover:bg-orange-600 text-white',
  },
  {
    href: 'https://www.google.com/maps/place/E+Stop/@12.9582564,77.4818545,17z',
    icon: RiMapPinLine,
    label: 'Get Directions',
    className: 'bg-blue-500 hover:bg-blue-600 text-white',
  },
  {
    href: 'https://www.instagram.com/estop.ullal/',
    icon: RiInstagramLine,
    label: 'Instagram',
    className: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white',
  },
]

const pills = ['🕐 Open Daily', '🍱 Fresh Food Always', '💰 Affordable Prices', '📍 Jnana Ganga Nagar']

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Reach Us</p>
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Come Say Hello 👋</h2>
          <p className="text-gray-400 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Walk in, call us or drop a WhatsApp — we're always happy to serve you.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {buttons.map(btn => (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith('tel') ? '_self' : '_blank'}
                rel="noreferrer"
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-lg ${btn.className}`}
              >
                <btn.icon className="text-lg" />
                {btn.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 justify-center pt-8 border-t border-gray-800 text-sm text-gray-500">
            {pills.map(p => <span key={p}>{p}</span>)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
