import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

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
        icon: 'account_balance',
        items: [
          { title: 'Finance', description: 'Secure, compliant calling for advisors and support teams.', to: '/industries' },
          { title: 'Retail & eCom', description: 'Route customers to the right store or support queue.', to: '/industries' },
          { title: 'SaaS & Tech', description: 'Onboarding, renewals, and support, unified for CS teams.', to: '/industries' },
          { title: 'BFSI & Fintech', description: 'Qualify loan and insurance leads, chase EMI and premium dues, and run KYC and renewal reminders 24/7 — in Hindi and every regional language.', to: '/industries' },
        ],
      },
      {
        id: 'ops',
        label: 'Operations & Teams',
        blurb: 'Logistics, remote, and enterprise IT.',
        icon: 'local_shipping',
        items: [
          { title: 'Logistics', description: 'Dispatch, driver check-ins, and delivery updates that keep moving.', to: '/industries' },
          { title: 'Remote Teams', description: 'One login for distributed agents across every time zone.', to: '/industries' },
          { title: 'Enterprise IT', description: 'SSO, audit logs, and uptime SLAs built for scale.', to: '/industries' },
          { title: 'Automotive', description: 'Schedule service, follow up on test drives, and keep the BDC ringing 24 hours a day across every dealership.', to: '/industries' },
        ],
      },
      {
        id: 'local',
        label: 'Local & Field Services',
        blurb: 'Real estate, home services, and more.',
        icon: 'home_repair_service',
        items: [
          { title: 'Real Estate', description: 'Qualify buyer & seller leads 24/7, book site visits on your calendar, and follow up the moment a listing gets a hit.', to: '/industries' },
          { title: 'Home Services', description: 'Capture every after-hours service request, dispatch the right tech, and never lose a job to a slow callback again.', to: '/industries' },
          { title: 'Restaurants', description: 'Take reservations, confirm large parties, answer hours and menu questions — fluently, in any language.', to: '/industries' },
          { title: 'Legal', description: 'Intake new clients, qualify cases by jurisdiction and statute of limitations, and book consults — without a paralegal stuck on the phone.', to: '/industries' },
        ],
      },
      {
        id: 'consumer',
        label: 'Retail & Finance',
        blurb: 'Education, e-commerce, fitness, and BPO.',
        icon: 'storefront',
        items: [
          { title: 'Education', description: 'Admissions intake, fee-payment follow-ups, and student-success calls without burning out your counsellors.', to: '/industries' },
          { title: 'E-commerce', description: 'Order status, returns, fitting and sizing — handled 24/7 in any language, with a tone that matches your brand.', to: '/industries' },
          { title: 'Fitness & Wellness', description: 'Class bookings, membership upsells, and no-show recovery for studios and gyms — without a front-desk human.', to: '/industries' },
          { title: 'BPO & Call Centres', description: 'Automate Tier-1 inbound and outbound queues, answer every caller in under three seconds, and cut cost-per-call across all Indian languages — round the clock.', to: '/industries' },
        ],
      },
    ],
  },
  {
    id: 'company',
    items: [
      { title: 'About', description: 'Learn what Greevo is building and why.', to: '/about' },
      { title: 'Blog', description: 'Product updates, guides, and company news.', to: '/blog' },
      { title: 'Contact', description: 'Talk to sales or start a free trial.', to: '/contact' },
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

function PanelCard({ item, compact }) {
  if (compact) {
    return (
      <Link
        to={item.to}
        className="group relative flex flex-col overflow-hidden rounded-xl border border-white/40 bg-white p-2 shadow-sm transition-all hover:-translate-y-0.5 hover:border-white hover:shadow-md"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,128,226,0.08),transparent_50%)] opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative z-10 flex items-start justify-between gap-2">
          <h4 className="truncate text-[13px] font-medium !text-zinc-900">{item.title}</h4>
          <span className="mt-0.5 flex shrink-0 items-center gap-0.5 text-[9px] font-medium text-[#1480E2]">
            Explore <ArrowRight className="size-2.5" />
          </span>
        </div>
        <p className="relative z-10 mt-1 h-[26px] overflow-hidden text-[10px] leading-snug text-zinc-500 transition-colors group-hover:text-zinc-700">
          {item.description}
        </p>
      </Link>
    )
  }

  return (
    <Link
      to={item.to}
      className="group relative flex min-h-[132px] flex-col justify-between overflow-hidden rounded-xl border border-white/40 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-white hover:shadow-md"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,128,226,0.08),transparent_50%)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        <h4 className="text-base font-medium !text-zinc-900">{item.title}</h4>
        <p className="mt-1 text-[10px] leading-normal text-zinc-500 transition-colors group-hover:text-zinc-700">{item.description}</p>
      </div>
      <span className="relative z-10 mt-5 text-[10px] font-medium text-[#1480E2]">
        Explore <ArrowRight className="ml-1 inline size-3" />
      </span>
    </Link>
  )
}

function IndustriesDropdownPanel({ panel }) {
  const [activeGroup, setActiveGroup] = useState(panel.groups[0].id)
  const group = panel.groups.find((g) => g.id === activeGroup) ?? panel.groups[0]

  return (
    <div className="flex bg-[#1480E2]">
      <div className="flex w-[380px] shrink-0 gap-3 border-r border-white/15 p-3">
        <div className="flex h-full w-[140px] shrink-0 flex-col">
          <span className="mb-2 flex items-center gap-1.5 px-1 text-[10px] font-semibold uppercase tracking-wide text-blue-100/70">
            <span className="size-1.5 rounded-full bg-blue-100/70" />
            Platform
          </span>
          <Link
            to="/industries"
            className="group flex min-h-[180px] flex-col gap-2.5 rounded-xl bg-white/10 p-3 transition-colors hover:bg-white/20"
          >
            <span className="flex items-center gap-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                <span className="material-symbols-outlined text-[15px] !text-current">grid_view</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[12px] font-semibold !text-white">Industries</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
            <p className="text-[9.5px] leading-snug text-blue-100/80">
              Built for how your industry actually works. Greevo adapts to the workflows your team already runs — across finance, retail, logistics, real estate, healthcare, and every vertical in between, with compliance, routing, and 24/7 AI coverage built in from day one.
            </p>
          </Link>

          <div className="mt-auto rounded-xl bg-white/10 p-2.5">
            <span className="block text-[20px] font-bold leading-none !text-white">16</span>
            <span className="mt-1 block text-[10px] leading-tight text-blue-100/70">Industries covered</span>
          </div>
        </div>

        <div className="min-w-0 flex-1 border-l border-white/15 pl-3">
          <span className="mb-2 flex items-center gap-1.5 px-1 text-[10px] font-semibold uppercase tracking-wide text-blue-100/70">
            <span className="size-1.5 rounded-full bg-blue-100/70" />
            Explore
          </span>
          <div className="flex flex-col gap-2">
            {panel.groups.map((g) => (
              <button
                key={g.id}
                type="button"
                onMouseEnter={() => setActiveGroup(g.id)}
                className={`group flex w-full items-center gap-2.5 rounded-xl border p-2 text-left transition-all ${
                  activeGroup === g.id
                    ? 'border-transparent bg-white shadow-md'
                    : 'border-dashed border-white/25 bg-white/5 hover:border-white/40 hover:bg-white/10'
                }`}
              >
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                    activeGroup === g.id ? 'bg-blue-50 text-[#1480E2]' : 'bg-white/10 text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[17px] !text-current">{g.icon}</span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block truncate text-[12.5px] font-semibold ${activeGroup === g.id ? '!text-zinc-900' : '!text-white'}`}>
                    {g.label}
                  </span>
                  <span className={`block text-[10px] leading-tight ${activeGroup === g.id ? 'text-zinc-500' : 'text-blue-100/70'}`}>
                    {g.blurb}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">
        <span className="mb-3 block text-[10px] font-semibold uppercase tracking-wide text-blue-100">{group.label}</span>
        <div className="flex flex-col items-stretch gap-2">
          {group.items.map((item) => (
            <PanelCard key={item.title} item={item} compact />
          ))}
        </div>
      </div>
    </div>
  )
}

function DropdownPanel({ panel }) {
  if (panel.groups) return <IndustriesDropdownPanel panel={panel} />

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
          className="absolute left-1/2 top-0 hidden w-[680px] -translate-x-1/2 lg:block"
          style={{ filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.18))' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="pointer-events-none absolute -left-[18px] top-0 z-10 text-[#1480E2]">
            <path d="M 20 20 L 20 0 L 0 0 C 11.046 0 20 11.046 20 20 Z" fill="currentColor" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="pointer-events-none absolute -right-[18px] top-0 z-10 text-[#1480E2]">
            <path d="M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z" fill="currentColor" />
          </svg>

          <motion.div
            animate={{ height: activePanel ? 'auto' : 64 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative flex w-full flex-col justify-start overflow-hidden bg-[#1480E2]"
            style={{ borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="z-20 flex h-16 items-center justify-center px-6">
              <nav className="flex w-full items-center justify-center gap-5 text-sm font-medium !text-white">
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
                      className={`flex cursor-pointer items-center gap-1 appearance-none rounded-full border-0 px-3 py-1 text-[14px] outline-none transition-all ${
                        activeMenu === item.panelId
                          ? 'bg-white !text-blue-600 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
                          : 'bg-transparent !text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 opacity-70 transition-transform duration-300 ${
                          activeMenu === item.panelId ? 'rotate-180' : ''
                        }`}
                      />
                    </Link>
                  ) : (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      onClick={closeAll}
                      onMouseEnter={() => setActiveMenu(null)}
                      className="rounded-full px-3 py-1 !text-white transition-all duration-250 hover:bg-white hover:!text-blue-600"
                    >
                      {item.label}
                    </NavLink>
                  )
                )}
              </nav>
            </div>

            {activePanel && (
              <div
                className="overflow-hidden border-t border-white/15 bg-[#1480E2]"
                style={{ opacity: activePanel ? 1 : 0, transition: 'opacity 0.18s ease' }}
                onClick={closeAll}
              >
                <DropdownPanel panel={activePanel} />
              </div>
            )}
          </motion.div>
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
