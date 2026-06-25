import { useEffect, useState } from 'react'
import { RiTimeLine, RiMapPinLine, RiPhoneLine } from 'react-icons/ri'

function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const check = () => {
      const now = new Date()
      const mins = now.getHours() * 60 + now.getMinutes()
      setIsOpen(mins >= 390 && mins < 1320) // 6:30–22:00
    }
    check()
    const t = setInterval(check, 60000)
    return () => clearInterval(t)
  }, [])
  return isOpen
}

const hours = [
  { day: 'Mon – Sun', time: '6:30 AM – 10:00 PM' },
]

export default function Info() {
  const isOpen = useIsOpen()

  const cards = [
    {
      icon: RiTimeLine,
      title: 'Opening Hours',
      content: (
        <div>
          <span className={`inline-flex items-center gap-2 text-xs font-semibold mb-4 ${isOpen ? 'text-green-600' : 'text-red-500'}`}>
            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-400'}`} />
            {isOpen ? 'Open Now' : 'Closed Now'}
          </span>
          {hours.map(h => (
            <div key={h.day} className="flex justify-between text-sm py-2 border-b border-gray-100 last:border-0">
              <span className="font-semibold text-gray-800">{h.day}</span>
              <span className="text-gray-500">{h.time}</span>
            </div>
          ))}
          <p className="text-xs text-gray-400 mt-3">* Hours may differ on public holidays</p>
        </div>
      ),
    },
    {
      icon: RiMapPinLine,
      title: 'Address',
      content: (
        <div className="space-y-2">
          <p className="text-sm text-gray-600 leading-relaxed">
            E Stop Eatery<br />
            5th Block, SMV, Railway Layout,<br />
            Jnana Ganga Nagar,<br />
            Bengaluru, Karnataka 560110
          </p>
          <a
            href="https://www.google.com/maps/place/E+Stop/@12.9582646,77.4406528,13z/data=!4m6!3m5!1s0x3bae3f0025971be1:0x3925ece2f61b2b68!8m2!3d12.9582564!4d77.4818545!16s%2Fg%2F11z7p8dq7p?entry=ttu&g_ep=EgoyMDI2MDYyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors mt-2"
          >
            <RiMapPinLine /> Open in Google Maps →
          </a>
        </div>
      ),
    },
    {
      icon: RiPhoneLine,
      title: 'Get in Touch',
      content: (
        <div className="space-y-3">
          <a href="tel:+917975940704" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
            📞 +91 79759 40704
          </a>
          <a
            href="https://wa.me/917975940704?text=Hi%20E%20Stop%2C%20I%20want%20to%20place%20an%20order!"
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
          >
            💬 WhatsApp Us
          </a>
          <a
            href="https://www.instagram.com/estop.ullal/"
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
          >
            📷 @estop.ullal
          </a>
        </div>
      ),
    },
  ]

  return (
    <section id="info" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">Visit Us</p>
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">Hours & Info</h2>
        <p className="text-gray-400 text-base mb-10">We're open every day — never far from a great meal.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map(card => (
            <div key={card.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <card.icon className="text-orange-500 text-xl" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-4">{card.title}</h3>
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
