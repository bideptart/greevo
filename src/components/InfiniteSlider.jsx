import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
import './InfiniteSlider.css'

/**
 * A continuous, seamlessly-looping slider — children scroll in one
 * direction indefinitely (duplicated internally for the loop) rather
 * than snapping between discrete slides.
 * Modeled after https://21st.dev/@ibelick/components/infinite-slider
 */
export default function InfiniteSlider({
  children,
  gap = 24,
  reverse = false,
  speed = 40,
  pauseOnHover = true,
  className = '',
}) {
  const trackRef = useRef(null)
  const widthRef = useRef(0)
  const hoveredRef = useRef(false)
  const x = useMotionValue(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const measure = () => {
      widthRef.current = el.scrollWidth / 2
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useAnimationFrame((_, delta) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const width = widthRef.current
    if (!width) return
    if (pauseOnHover && hoveredRef.current) return

    const direction = reverse ? 1 : -1
    let next = x.get() + (direction * speed * delta) / 1000

    if (next <= -width) next += width
    if (next > 0) next -= width

    x.set(next)
  })

  return (
    <div
      className={`infinite-slider ${className}`}
      onMouseEnter={() => { hoveredRef.current = true }}
      onMouseLeave={() => { hoveredRef.current = false }}
    >
      <motion.div className="infinite-slider-track" ref={trackRef} style={{ x, gap: `${gap}px` }}>
        {children}
        {children}
      </motion.div>
    </div>
  )
}
