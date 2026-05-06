"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export function ImpactCounter({ value, duration = 1800, prefix = "", suffix = "", decimals = 0 }: Props) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const animate = (t: number) => {
              const progress = Math.min((t - start) / duration, 1)
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3)
              setCurrent(value * eased)
              if (progress < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.3 },
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value, duration])

  const formatted = current.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
