import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Features', to: '/features' },
  { label: 'Industries', to: '/industries' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
]

// A tight, restrained "vibrate" — small rapid horizontal jitter that
// settles quickly, rather than a cartoonish wiggle. Reads as a crisp
// acknowledgement of the click, not a toy.
const LOGO_VIBRATE = {
  x: [0, -3, 3, -2.5, 2.5, -1.5, 1.5, -0.5, 0.5, 0],
  transition: { duration: 0.45, ease: 'easeInOut' },
}

function GreevoLogo() {
  const [clickCount, setClickCount] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <span className="relative inline-flex items-center" onClick={() => !reduceMotion && setClickCount((c) => c + 1)}>
      <motion.img
        key={clickCount}
        src="/brand/greevo-logo.png"
        alt="Greevo"
        className="block h-[68px] w-[150px] transition-[filter] duration-300 hover:brightness-105"
        style={{ filter: 'drop-shadow(0 0 0 rgba(37,99,235,0))' }}
        whileHover={reduceMotion ? undefined : { scale: 1.045, filter: 'drop-shadow(0 4px 14px rgba(37,99,235,0.35))' }}
        animate={!reduceMotion && clickCount > 0 ? LOGO_VIBRATE : undefined}
        transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
      />

      <AnimatePresence>
        {!reduceMotion && clickCount > 0 && (
          <motion.span
            key={`ring-${clickCount}`}
            className="pointer-events-none absolute inset-0 -z-10 rounded-full"
            style={{ boxShadow: '0 0 0 1.5px #2563eb' }}
            initial={{ opacity: 0.55, scale: 0.85 }}
            animate={{ opacity: 0, scale: 1.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
    </span>
  )
}

export default function NavbarSectionTwo() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const closeAll = () => setMobileOpen(false)

  return (
    <div className="relative z-50 w-full select-none border-b border-zinc-100 bg-white px-6 font-sans text-zinc-900">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between lg:hidden">
        <Link to="/" onClick={closeAll} className="text-black">
          <GreevoLogo />
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="grid size-9 place-items-center rounded-lg border border-zinc-200 text-zinc-900"
        >
          {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div className="mx-auto hidden h-16 w-full max-w-7xl items-center justify-between lg:flex">
        <Link to="/" onClick={closeAll} className="flex items-center">
          <GreevoLogo />
        </Link>

        <nav className="relative flex items-center gap-1 overflow-visible rounded-full bg-[#1d1d27] p-1.5 shadow-lg shadow-zinc-900/20">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to
            return (
              <NavLink key={item.label} to={item.to} className="relative z-10">
                <span
                  className={`relative flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive ? '-translate-y-2 !text-white' : '!text-zinc-400 hover:!text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full shadow-lg shadow-blue-600/50"
                      style={{ background: 'linear-gradient(135deg, #60a5fa, #2563eb)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </span>
              </NavLink>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="text-[15px] font-medium !text-zinc-600 transition-colors hover:!text-zinc-900">
            Sign in
          </Link>
          <Link
            to="/contact"
            className="group flex items-center gap-1.5 rounded-lg px-4 py-2 text-[14px] font-semibold !text-white shadow-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(to right, #60a5fa, #2563eb)' }}
          >
            Get Started
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="relative z-20 mx-auto w-full max-w-7xl overflow-hidden lg:hidden"
          >
            <div className="grid gap-1 pb-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={closeAll}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm ${isActive ? '!text-blue-600' : '!text-zinc-700 hover:bg-zinc-50 hover:!text-zinc-900'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={closeAll}
                className="group mt-2 flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-[14px] font-semibold !text-white shadow-sm"
                style={{ background: 'linear-gradient(to right, #60a5fa, #2563eb)' }}
              >
                Get Started
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
