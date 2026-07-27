import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Features', to: '/features' },
  { label: 'Industries', panelId: 'industries' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Company', panelId: 'company' },
  { label: 'FAQ', to: '/faq' },
]

const menuPanels = [
  {
    id: 'industries',
    items: [
      { title: 'Finance', description: 'Secure, compliant calling for advisors and support teams.', to: '/industries' },
      { title: 'Retail', description: 'Route customers to the right store or support queue.', to: '/industries' },
      { title: 'SaaS', description: 'Onboarding, renewals, and support, unified for CS teams.', to: '/industries' },
    ],
  },
  {
    id: 'company',
    items: [
      { title: 'About', description: 'Learn what Greevo is building and why.', to: '/' },
      { title: 'Blog', description: 'Product updates, guides, and company news.', to: '/blog' },
      { title: 'Contact', description: 'Talk to sales or start a free trial.', to: '/contact' },
    ],
  },
]

function getPanel(panelId) {
  return menuPanels.find((panel) => panel.id === panelId)
}

function GreevoLogo() {
  return <img src="/brand/greevo-logo.png" alt="Greevo" className="h-[68px] w-[150px]" />
}

function PanelCard({ item }) {
  return (
    <Link
      to={item.to}
      className="group relative flex min-h-[132px] flex-col justify-between overflow-hidden rounded-xl border border-white/15 bg-white/10 p-4 transition-all hover:border-white/30 hover:bg-white/15"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_50%)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        <h4 className="text-base font-medium !text-white">{item.title}</h4>
        <p className="mt-1 text-[10px] leading-normal text-blue-100/80 transition-colors group-hover:text-white">{item.description}</p>
      </div>
      <span className="relative z-10 mt-5 text-[10px] font-medium text-blue-100/70">
        Explore <ArrowRight className="ml-1 inline size-3" />
      </span>
    </Link>
  )
}

function DropdownPanel({ panel }) {
  return (
    <div className="grid grid-cols-3 gap-4 bg-[#1480E2] p-4">
      {panel.items.map((item) => (
        <PanelCard key={item.title} item={item} />
      ))}
    </div>
  )
}

export default function NavbarSectionTwo() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null)
  const activePanel = getPanel(activeMenu)

  const toggleMenu = (menuName) => setActiveMenu(activeMenu === menuName ? null : menuName)
  const closeAll = () => {
    setActiveMenu(null)
    setMobileOpen(false)
    setMobileActiveMenu(null)
  }

  return (
    <div className="relative z-50 w-full select-none bg-white px-6 pb-0 pt-0 font-sans text-zinc-900">
      <div className="relative z-30 mx-auto hidden h-16 w-full max-w-7xl items-center justify-between lg:flex">
        <Link to="/" onClick={closeAll} className="flex items-center">
          <GreevoLogo />
        </Link>

        <div
          className="absolute left-1/2 top-0 hidden w-[620px] -translate-x-1/2 lg:block"
          style={{ filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.18))' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="pointer-events-none absolute -left-[18px] top-0 z-10 text-[#1480E2]">
            <path d="M 20 20 L 20 0 L 0 0 C 11.046 0 20 11.046 20 20 Z" fill="currentColor" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="pointer-events-none absolute -right-[18px] top-0 z-10 text-[#1480E2]">
            <path d="M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z" fill="currentColor" />
          </svg>

          <motion.div
            animate={{ height: activePanel ? 232 : 64 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative flex w-full flex-col justify-start overflow-hidden bg-[#1480E2]"
            style={{ borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}
          >
            <div className="z-20 flex h-16 items-center justify-center px-6">
              <nav className="flex w-full items-center justify-center gap-5 text-sm font-medium !text-white">
                {navItems.map((item) =>
                  item.panelId ? (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => toggleMenu(item.panelId)}
                      className={`flex cursor-pointer items-center gap-1 appearance-none rounded-full border-0 bg-transparent px-3 py-1 text-[14px] outline-none transition-all !text-white ${
                        activeMenu === item.panelId
                          ? 'bg-gradient-to-r from-blue-500 to-violet-600 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
                          : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 opacity-70 transition-transform duration-300 ${
                          activeMenu === item.panelId ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      onClick={closeAll}
                      className="px-2 py-1 !text-white transition-colors duration-250"
                    >
                      {item.label}
                    </NavLink>
                  )
                )}
              </nav>
            </div>

            <AnimatePresence mode="wait">
              {activePanel && (
                <motion.div
                  key={activePanel.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="overflow-hidden border-t border-white/15 bg-[#1480E2]"
                  onClick={closeAll}
                >
                  <DropdownPanel panel={activePanel} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="text-[15px] font-medium text-zinc-600 transition-colors hover:text-zinc-900">
            Sign in
          </Link>
          <Link
            to="/contact"
            className="group flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-[14px] font-semibold !text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Get Started
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="relative z-30 mx-auto flex h-14 w-full max-w-7xl items-center justify-between lg:hidden">
        <Link to="/" onClick={closeAll} className="text-black">
          <GreevoLogo />
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            onClick={closeAll}
            className="group flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold !text-white shadow-sm"
          >
            Get Started
            <ArrowRight className="h-3 w-3" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="grid size-9 place-items-center rounded-lg border border-zinc-200 text-zinc-900"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="relative z-20 mx-auto w-full max-w-7xl overflow-hidden rounded-xl bg-[#1480E2] text-white shadow-xl lg:hidden"
          >
            <div className="grid gap-1 p-4">
              {navItems.map((item) => {
                const panel = item.panelId ? getPanel(item.panelId) : null
                const isOpen = mobileActiveMenu === item.panelId

                if (!item.panelId) {
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={closeAll}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setMobileActiveMenu(isOpen ? null : item.panelId)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-zinc-300 hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                      <ChevronDown className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && panel && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mx-3 mb-2 grid gap-2 border-l border-white/10 pl-3 pt-1">
                            {panel.items.map((panelItem) => (
                              <Link key={panelItem.title} to={panelItem.to} onClick={closeAll} className="rounded-md px-3 py-2 hover:bg-white/5">
                                <span className="block text-sm font-medium text-white">{panelItem.title}</span>
                                {panelItem.description && (
                                  <span className="mt-0.5 block text-xs leading-5 text-zinc-500">{panelItem.description}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
