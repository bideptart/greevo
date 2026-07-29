import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import './navbar-section-2.css'

const navItems = [
  { label: 'Features', to: '/features' },
  { label: 'Industries', panelId: 'industries' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Company', panelId: 'company' },
  { label: 'FAQ', to: '/faq' },
]

function panelFlatItems(panel) {
  return panel.groups ? panel.groups.flatMap((g) => g.items) : panel.items
}

const menuPanels = [
  {
    id: 'industries',
    groups: [
      {
        id: 'core',
        label: 'Core Industries',
        blurb: 'Finance, retail, and SaaS teams.',
        headline: 'Software-first teams, covered end to end.',
        icon: 'account_balance',
        items: [
          { title: 'Finance', icon: 'account_balance', description: 'Secure, compliant calling for advisors and support teams.', to: '/industries' },
          { title: 'Retail & eCom', icon: 'storefront', description: 'Route customers to the right store or support queue.', to: '/industries' },
          { title: 'SaaS & Tech', icon: 'cloud', description: 'Onboarding, renewals, and support, unified for CS teams.', to: '/industries' },
          { title: 'BFSI & Fintech', icon: 'payments', description: 'Qualify loan and insurance leads, chase EMI and premium dues, and run KYC and renewal reminders 24/7.', to: '/industries' },
        ],
      },
      {
        id: 'ops',
        label: 'Operations & Teams',
        blurb: 'Logistics, remote, and enterprise IT.',
        headline: 'Keep distributed teams moving, on one login.',
        icon: 'local_shipping',
        items: [
          { title: 'Logistics', icon: 'local_shipping', description: 'Dispatch, driver check-ins, and delivery updates that keep moving.', to: '/industries' },
          { title: 'Remote Teams', icon: 'groups', description: 'One login for distributed agents across every time zone.', to: '/industries' },
          { title: 'Enterprise IT', icon: 'dns', description: 'SSO, audit logs, and uptime SLAs built for scale.', to: '/industries' },
          { title: 'Automotive', icon: 'directions_car', description: 'Schedule service, follow up on test drives, and keep the BDC ringing all day.', to: '/industries' },
        ],
      },
      {
        id: 'local',
        label: 'Local & Field Services',
        blurb: 'Real estate, home services, and more.',
        headline: 'Never miss a lead while you’re on site.',
        icon: 'home_repair_service',
        items: [
          { title: 'Real Estate', icon: 'home', description: 'Qualify buyer & seller leads 24/7 and book site visits on your calendar.', to: '/industries' },
          { title: 'Home Services', icon: 'home_repair_service', description: 'Capture every after-hours service request and dispatch the right tech.', to: '/industries' },
          { title: 'Restaurants', icon: 'restaurant', description: 'Take reservations and answer hours and menu questions, fluently.', to: '/industries' },
          { title: 'Legal', icon: 'gavel', description: 'Intake new clients and book consults without a paralegal stuck on the phone.', to: '/industries' },
        ],
      },
      {
        id: 'consumer',
        label: 'Retail & Finance',
        blurb: 'Education, e-commerce, fitness, and BPO.',
        headline: 'Consumer-facing teams, always reachable.',
        icon: 'storefront',
        items: [
          { title: 'Education', icon: 'school', description: 'Admissions intake and student-success calls without burning out counsellors.', to: '/industries' },
          { title: 'E-commerce', icon: 'shopping_bag', description: 'Order status, returns, and sizing questions handled 24/7.', to: '/industries' },
          { title: 'Fitness & Wellness', icon: 'fitness_center', description: 'Class bookings, upsells, and no-show recovery for studios and gyms.', to: '/industries' },
          { title: 'BPO & Call Centres', icon: 'support_agent', description: 'Automate Tier-1 queues and answer every caller in under three seconds.', to: '/industries' },
        ],
      },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    blurb: 'About, blog, and how to reach us.',
    headline: 'Get to know the team behind Greevo.',
    items: [
      { title: 'About', icon: 'info', description: 'Learn what Greevo is building and why.', to: '/about' },
      { title: 'Blog', icon: 'article', description: 'Product updates, guides, and company news.', to: '/blog' },
      { title: 'Contact', icon: 'call', description: 'Talk to sales or start a free trial.', to: '/contact' },
    ],
  },
]

function getPanel(panelId) {
  return menuPanels.find((panel) => panel.id === panelId)
}

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

function FeatureItem({ item }) {
  return (
    <Link to={item.to} className="group -m-2 flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-50">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1480E2]">
        <span className="material-symbols-outlined text-[19px] !text-current">{item.icon}</span>
      </span>
      <span className="min-w-0">
        <span className="block text-[15px] font-semibold text-zinc-900">{item.title}</span>
        <span className="block text-[13px] leading-snug text-zinc-500">{item.description}</span>
      </span>
    </Link>
  )
}

function MegaPanelBody({ eyebrow, overviewTo, headline, blurb, items }) {
  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#1480E2]">
          <span className="size-1.5 rounded-full bg-[#1480E2]" />
          {eyebrow}
        </span>
        <Link
          to={overviewTo}
          className="group inline-flex items-center gap-1 rounded-full border border-zinc-200 px-4 py-2 text-[13px] font-semibold !text-zinc-700 transition-colors hover:bg-zinc-50"
        >
          Overview <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <h3 className="mt-4 text-[28px] font-bold leading-tight text-zinc-900">{headline}</h3>
      <p className="mt-2 max-w-lg text-[14.5px] leading-snug text-zinc-500">{blurb}</p>

      <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5">
        {items.map((item) => (
          <FeatureItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  )
}

function MegaPanelFooter() {
  return (
    <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50 px-6 py-3.5">
      <span className="flex items-center gap-1.5 text-[13px] text-zinc-500">
        <span className="material-symbols-outlined text-[16px] text-[#1480E2]">auto_awesome</span>
        Every plan includes AI overflow coverage. 14-day free trial.
      </span>
      <div className="flex items-center gap-2">
        <Link
          to="/pricing"
          className="rounded-full px-4 py-2 text-[13px] font-semibold transition-opacity hover:opacity-80"
          style={{ color: '#2563eb' }}
        >
          Compare plans
        </Link>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-1 rounded-full px-4 py-2 text-[13px] font-semibold !text-white shadow-sm transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(to right, #60a5fa, #2563eb)' }}
        >
          Talk to sales <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}

function IndustriesDropdownPanel({ panel }) {
  const [activeGroup, setActiveGroup] = useState(panel.groups[0].id)
  const group = panel.groups.find((g) => g.id === activeGroup) ?? panel.groups[0]

  return (
    <div className="bg-white">
      <div className="flex">
        <div className="w-[260px] shrink-0 border-r border-zinc-100 p-4">
          <div className="mb-3 flex items-center justify-between px-1">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400">Our Industries</span>
            <span className="text-[11px] text-zinc-400">{panel.groups.length} groups</span>
          </div>
          <div className="flex flex-col gap-2">
            {panel.groups.map((g) => (
              <button
                key={g.id}
                type="button"
                onMouseEnter={() => setActiveGroup(g.id)}
                className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                  activeGroup === g.id ? 'border-zinc-200 bg-white shadow-sm' : 'border-transparent hover:bg-zinc-50'
                }`}
              >
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                    activeGroup === g.id ? 'bg-blue-50 text-[#1480E2]' : 'bg-zinc-100 text-zinc-500'
                  }`}
                >
                  <span className="material-symbols-outlined text-[19px] !text-current">{g.icon}</span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5 text-[14.5px] font-semibold text-zinc-900">
                    <span className="truncate">{g.label}</span>
                    {activeGroup === g.id && <span className="size-1.5 shrink-0 rounded-full bg-[#1480E2]" />}
                  </span>
                  <span className="block truncate text-[12.5px] text-zinc-400">{g.blurb}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <MegaPanelBody eyebrow={group.label} overviewTo="/industries" headline={group.headline} blurb={group.blurb} items={group.items} />
      </div>

      <MegaPanelFooter />
    </div>
  )
}

function DropdownPanel({ panel }) {
  if (panel.groups) return <IndustriesDropdownPanel panel={panel} />

  return (
    <div className="bg-white">
      <MegaPanelBody eyebrow={panel.label} overviewTo="/about" headline={panel.headline} blurb={panel.blurb} items={panel.items} />
      <MegaPanelFooter />
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

        <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block" onMouseLeave={() => setActiveMenu(null)}>
          <div className="relative z-20 flex h-16 w-[680px] items-center justify-center px-6">
            <nav className="flex w-full items-center justify-center gap-5 text-sm font-medium">
              {navItems.map((item) =>
                item.panelId ? (
                  <Link
                    key={item.label}
                    to={item.to ?? '#'}
                    onClick={(e) => {
                      if (!item.to) e.preventDefault()
                      closeAll()
                    }}
                    onMouseEnter={() => setActiveMenu(item.panelId)}
                    className={`navbar-pill-link flex cursor-pointer items-center gap-1 appearance-none rounded-full border-0 px-3 py-1.5 text-[14px] outline-none ${
                      activeMenu === item.panelId ? 'is-active shadow-sm' : ''
                    }`}
                  >
                    <span className="navbar-pill-link-label flex items-center gap-1">
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 opacity-70 transition-transform duration-300 ${
                          activeMenu === item.panelId ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </Link>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    onClick={closeAll}
                    onMouseEnter={() => setActiveMenu(null)}
                    className="navbar-pill-link rounded-full px-3 py-1.5"
                  >
                    <span className="navbar-pill-link-label">{item.label}</span>
                  </NavLink>
                )
              )}
            </nav>
          </div>

          <AnimatePresence>
            {activePanel && (
              <motion.div
                key={activePanel.id}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.16 }}
                className="absolute left-1/2 top-full w-[1040px] -translate-x-1/2 pt-3"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={closeAll}>
                  <DropdownPanel panel={activePanel} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="text-[15px] font-medium text-zinc-600 transition-colors hover:text-zinc-900">
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

      <div className="relative z-30 mx-auto flex h-14 w-full max-w-7xl items-center justify-between lg:hidden">
        <Link to="/" onClick={closeAll} className="text-black">
          <GreevoLogo />
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            onClick={closeAll}
            className="group flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold !text-white shadow-sm"
            style={{ background: 'linear-gradient(to right, #60a5fa, #2563eb)' }}
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
                    <div className="flex items-center justify-between rounded-lg text-sm text-zinc-300 hover:bg-white/10 hover:text-white">
                      {item.to ? (
                        <Link to={item.to} onClick={closeAll} className="flex-1 px-3 py-2">
                          {item.label}
                        </Link>
                      ) : (
                        <span className="flex-1 px-3 py-2">{item.label}</span>
                      )}
                      <button
                        type="button"
                        onClick={() => setMobileActiveMenu(isOpen ? null : item.panelId)}
                        className="px-3 py-2"
                      >
                        <ChevronDown className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
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
                            {panelFlatItems(panel).map((panelItem) => (
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
