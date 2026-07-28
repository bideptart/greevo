import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Menu, X } from 'lucide-react'
import './navbar-section-2.css'

const navItems = [
  { label: 'Features', to: '/features' },
  { label: 'Industries', to: '/industries' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
]

const LOGO_WIGGLE = {
  rotate: [0, -10, 9, -6, 4, -2, 0],
  scale: [1, 1.12, 0.94, 1.06, 0.98, 1.02, 1],
  transition: { duration: 0.65, ease: 'easeInOut' },
}

// Radial burst geometry — angle in degrees around a circle, distance the
// spark travels, and a size/color pulled from the same sky-blue palette
// used across the site (hero particles, chip icons).
const SPARK_COLORS = ['#38bdf8', '#60a5fa', '#7dd3fc', '#93c5fd', '#2563eb']
const LOGO_SPARKS = Array.from({ length: 10 }).map((_, i) => {
  const angle = (i / 10) * Math.PI * 2 - Math.PI / 2
  const distance = 34 + (i % 3) * 10
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    size: i % 3 === 0 ? 7 : i % 3 === 1 ? 5 : 4,
    color: SPARK_COLORS[i % SPARK_COLORS.length],
    delay: (i % 5) * 0.02,
  }
})

function GreevoLogo() {
  const [tapCount, setTapCount] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <span className="greevo-logo-outer">
      <motion.span
        className="greevo-logo-wrap"
        whileTap={reduceMotion ? undefined : { scale: 0.94 }}
        onTapStart={() => !reduceMotion && setTapCount((c) => c + 1)}
      >
        <motion.img
          key={tapCount}
          src="/brand/greevo-logo.png"
          alt="Greevo"
          className="greevo-logo-img block h-[68px] w-[150px]"
          animate={!reduceMotion && tapCount > 0 ? LOGO_WIGGLE : undefined}
        />
      </motion.span>

      <AnimatePresence>
        {!reduceMotion && tapCount > 0 && (
          <span className="greevo-logo-burst" key={`burst-${tapCount}`} aria-hidden="true">
            {LOGO_SPARKS.map((spark, i) => (
              <motion.span
                className="greevo-burst-spark"
                key={i}
                style={{ width: spark.size, height: spark.size, background: spark.color }}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                animate={{ opacity: [0, 1, 0.9, 0], x: spark.x, y: spark.y, scale: [0.3, 1, 0.9, 0.5] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: spark.delay }}
              />
            ))}
            <motion.span
              className="greevo-burst-ring"
              initial={{ opacity: 0.6, scale: 0.3 }}
              animate={{ opacity: 0, scale: 2.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          </span>
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
