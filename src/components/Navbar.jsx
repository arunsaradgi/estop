import { useState, useEffect } from 'react'
import { RiStoreLine, RiMenuLine, RiCloseLine } from 'react-icons/ri'

const links = [
  { href: '#menu',     label: 'Menu' },
  { href: '#info',     label: 'Hours' },
  { href: '#location', label: 'Location' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-200 group-hover:scale-105 transition-transform">
            <RiStoreLine className="text-white text-lg" />
          </div>
          <span className="font-extrabold text-xl text-gray-900 tracking-tight">
            E<span className="text-orange-500">Stop</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/917975940704?text=Hi%20E%20Stop%2C%20I%20want%20to%20place%20an%20order!"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm shadow-orange-200"
        >
          Order Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <RiCloseLine className="text-xl" /> : <RiMenuLine className="text-xl" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-5 pt-2 space-y-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/917975940704?text=Hi%20E%20Stop%2C%20I%20want%20to%20place%20an%20order!"
            target="_blank"
            rel="noreferrer"
            className="block mt-3 text-center bg-orange-500 text-white text-sm font-semibold py-2.5 rounded-xl"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  )
}
