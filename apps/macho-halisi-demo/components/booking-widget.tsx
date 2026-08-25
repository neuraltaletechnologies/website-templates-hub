"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { format, addDays } from "date-fns"
import { Calendar as CalendarIcon, Users, Minus, Plus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type Variant = "hero" | "inline" | "compact"

export function BookingWidget({ variant = "hero" }: { variant?: Variant }) {
  const router = useRouter()
  const [checkIn, setCheckIn] = useState<Date>(new Date())
  const [checkOut, setCheckOut] = useState<Date>(addDays(new Date(), 3))
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [rooms, setRooms] = useState(1)

  const isHero = variant === "hero"
  const isCompact = variant === "compact"

  const handleSearch = () => {
    const params = new URLSearchParams({
      checkIn: format(checkIn, "yyyy-MM-dd"),
      checkOut: format(checkOut, "yyyy-MM-dd"),
      adults: String(adults),
      children: String(children),
      rooms: String(rooms),
    })
    router.push(`/rooms?${params}`)
  }

  return (
    <div
      className={cn(
        "bg-background border border-border shadow-xl",
        isHero && "p-4 md:p-2",
        !isHero && "p-4",
      )}
    >
      <div
        className={cn(
          "grid gap-3",
          isHero ? "md:grid-cols-[1fr_1fr_1fr_auto] md:gap-0 md:items-stretch" : "md:grid-cols-4",
        )}
      >
        <DateField
          label="Start Date"
          date={checkIn}
          onChange={(d) => {
            setCheckIn(d)
            if (d >= checkOut) setCheckOut(addDays(d, 1))
          }}
          minDate={new Date()}
          isHero={isHero}
        />
        <div
          className={cn(
            isHero && "md:border-l md:border-border",
          )}
        >
          <DateField
            label="End Date"
            date={checkOut}
            onChange={setCheckOut}
            minDate={addDays(checkIn, 1)}
            isHero={isHero}
          />
        </div>
        <div
          className={cn(
            isHero && "md:border-l md:border-border",
          )}
        >
          <GuestsField
            adults={adults}
            setAdults={setAdults}
            childrenCount={children}
            setChildren={setChildren}
            rooms={rooms}
            setRooms={setRooms}
            isHero={isHero}
          />
        </div>
        <Button
          onClick={handleSearch}
          className={cn(
            "bg-accent text-accent-foreground hover:bg-accent/90 rounded-none uppercase tracking-[0.2em] text-xs",
            isHero ? "md:h-auto h-12 px-8" : "h-12",
            isCompact && "md:col-span-4",
          )}
        >
          <span>Check Availability</span>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

function DateField({
  label,
  date,
  onChange,
  minDate,
  isHero,
}: {
  label: string
  date: Date
  onChange: (d: Date) => void
  minDate?: Date
  isHero?: boolean
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-3 text-left px-4 py-3 hover:bg-secondary/60 transition-colors w-full",
            isHero && "md:py-4",
          )}
        >
          <CalendarIcon className="h-5 w-5 text-accent shrink-0" />
          <div className="min-w-0">
            <div className="eyebrow">{label}</div>
            <div className="text-sm font-medium truncate">
              {format(date, "EEE, MMM d")}
            </div>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => d && onChange(d)}
          disabled={(d) => (minDate ? d < minDate : false)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

function GuestsField({
  adults,
  setAdults,
  childrenCount,
  setChildren,
  rooms,
  setRooms,
  isHero,
}: {
  adults: number
  setAdults: (n: number) => void
  childrenCount: number
  setChildren: (n: number) => void
  rooms: number
  setRooms: (n: number) => void
  isHero?: boolean
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-3 text-left px-4 py-3 hover:bg-secondary/60 transition-colors w-full",
            isHero && "md:py-4",
          )}
        >
          <Users className="h-5 w-5 text-accent shrink-0" />
          <div className="min-w-0">
            <div className="eyebrow">Travelers</div>
            <div className="text-sm font-medium">
              {adults + childrenCount} Traveler{adults + childrenCount !== 1 ? "s" : ""}
              {" · "}
              {rooms} Vehicle{rooms !== 1 ? "s" : ""}
            </div>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-5" align="start">
        <div className="space-y-5">
          <Counter label="Adults" sub="Ages 13+" value={adults} onChange={setAdults} min={1} max={8} />
          <Counter label="Children" sub="Ages 2–12" value={childrenCount} onChange={setChildren} min={0} max={6} />
          <Counter label="Vehicles" sub="Safari vehicles needed" value={rooms} onChange={setRooms} min={1} max={4} />
        </div>
      </PopoverContent>
    </Popover>
  )
}

function Counter({
  label,
  sub,
  value,
  onChange,
  min,
  max,
}: {
  label: string
  sub?: string
  value: number
  onChange: (n: number) => void
  min: number
  max: number
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm font-medium">{label}</div>
        {sub && <div className="text-xs text-muted-foreground">{sub}</div>}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="h-8 w-8 border border-border flex items-center justify-center hover:border-accent disabled:opacity-30"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="w-6 text-center text-sm font-medium tabular-nums">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="h-8 w-8 border border-border flex items-center justify-center hover:border-accent disabled:opacity-30"
          aria-label={`Increase ${label}`}
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
