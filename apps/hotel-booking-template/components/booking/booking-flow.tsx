"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { addDays, differenceInDays, format } from "date-fns"
import {
  ArrowLeft,
  ArrowRight,
  Calendar as CalendarIcon,
  Check,
  CreditCard,
  Lock,
  Users,
  Minus,
  Plus,
} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { rooms } from "@/lib/rooms"

const steps = [
  { id: 1, label: "Dates" },
  { id: 2, label: "Room" },
  { id: 3, label: "Add-ons" },
  { id: 4, label: "Guest" },
  { id: 5, label: "Payment" },
  { id: 6, label: "Done" },
]

const addons = [
  { id: "breakfast", label: "Daily Breakfast", price: 45, per: "person / night" },
  { id: "airport", label: "Airport Transfer (Private)", price: 180, per: "one-way" },
  { id: "spa", label: "Spa Credit", price: 250, per: "credit" },
  { id: "dinner", label: "Private Beach Dinner", price: 380, per: "couple" },
]

export function BookingFlow() {
  const [step, setStep] = useState(1)
  const [checkIn, setCheckIn] = useState<Date>(new Date())
  const [checkOut, setCheckOut] = useState<Date>(addDays(new Date(), 3))
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState<string>(rooms[0].slug)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [guest, setGuest] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    special: "",
  })

  const nights = Math.max(1, differenceInDays(checkOut, checkIn))
  const room = rooms.find((r) => r.slug === selectedRoom) ?? rooms[0]
  const roomTotal = room.price * nights
  const addonsTotal = useMemo(() => {
    return selectedAddons.reduce((sum, id) => {
      const a = addons.find((x) => x.id === id)
      if (!a) return sum
      if (a.per.includes("person")) return sum + a.price * adults * nights
      if (a.per.includes("night")) return sum + a.price * nights
      return sum + a.price
    }, 0)
  }, [selectedAddons, adults, nights])
  const taxes = Math.round((roomTotal + addonsTotal) * 0.12)
  const total = roomTotal + addonsTotal + taxes

  const next = () => setStep((s) => Math.min(6, s + 1))
  const prev = () => setStep((s) => Math.max(1, s - 1))

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  const handleConfirm = () => {
    toast.success("Reservation confirmed — a confirmation has been sent to your email.")
    setStep(6)
  }

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-8">
        <Stepper current={step} />

        <div className="mt-10 bg-background border border-border p-6 md:p-10">
          {step === 1 && (
            <StepDates
              checkIn={checkIn}
              setCheckIn={setCheckIn}
              checkOut={checkOut}
              setCheckOut={setCheckOut}
              adults={adults}
              setAdults={setAdults}
              children={children}
              setChildren={setChildren}
            />
          )}

          {step === 2 && (
            <StepRoom
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
              nights={nights}
            />
          )}

          {step === 3 && (
            <StepAddons
              selected={selectedAddons}
              toggle={toggleAddon}
            />
          )}

          {step === 4 && <StepGuest guest={guest} setGuest={setGuest} />}

          {step === 5 && <StepPayment total={total} onConfirm={handleConfirm} />}

          {step === 6 && <StepConfirmation guest={guest} />}
        </div>

        {step < 5 && (
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={prev}
              disabled={step === 1}
              className="rounded-none uppercase tracking-[0.2em] text-xs h-12 px-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
            <Button
              onClick={next}
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none uppercase tracking-[0.2em] text-xs h-12 px-8"
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </div>

      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <Summary
            room={room}
            checkIn={checkIn}
            checkOut={checkOut}
            nights={nights}
            adults={adults}
            children={children}
            selectedAddons={selectedAddons}
            roomTotal={roomTotal}
            addonsTotal={addonsTotal}
            taxes={taxes}
            total={total}
          />
        </div>
      </aside>
    </div>
  )
}

function Stepper({ current }: { current: number }) {
  return (
    <ol className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-2">
      {steps.map((s, i) => (
        <li key={s.id} className="flex items-center gap-2 md:gap-4 shrink-0">
          <div
            className={cn(
              "h-7 w-7 md:h-8 md:w-8 rounded-full border flex items-center justify-center text-xs font-medium",
              s.id < current && "bg-accent border-accent text-accent-foreground",
              s.id === current && "bg-foreground border-foreground text-background",
              s.id > current && "border-border text-muted-foreground",
            )}
          >
            {s.id < current ? <Check className="h-3.5 w-3.5" /> : s.id}
          </div>
          <span
            className={cn(
              "text-[11px] uppercase tracking-[0.2em] hidden md:inline",
              s.id === current ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {s.label}
          </span>
          {i < steps.length - 1 && (
            <span className="hidden md:block h-px w-8 bg-border" />
          )}
        </li>
      ))}
    </ol>
  )
}

function StepDates({
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  adults,
  setAdults,
  children,
  setChildren,
}: {
  checkIn: Date
  setCheckIn: (d: Date) => void
  checkOut: Date
  setCheckOut: (d: Date) => void
  adults: number
  setAdults: (n: number) => void
  children: number
  setChildren: (n: number) => void
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl mb-2">When will you arrive?</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Choose your dates and the number of guests staying with us.
      </p>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <DateBox
          label="Check In"
          date={checkIn}
          onChange={(d) => {
            setCheckIn(d)
            if (d >= checkOut) setCheckOut(addDays(d, 1))
          }}
          minDate={new Date()}
        />
        <DateBox
          label="Check Out"
          date={checkOut}
          onChange={setCheckOut}
          minDate={addDays(checkIn, 1)}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <GuestCounter label="Adults" sub="Ages 13+" value={adults} onChange={setAdults} min={1} max={8} />
        <GuestCounter label="Children" sub="Ages 2–12" value={children} onChange={setChildren} min={0} max={6} />
      </div>
    </div>
  )
}

function DateBox({
  label,
  date,
  onChange,
  minDate,
}: {
  label: string
  date: Date
  onChange: (d: Date) => void
  minDate?: Date
}) {
  return (
    <div>
      <Label className="eyebrow mb-2 block">{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <button className="w-full flex items-center gap-3 border border-border px-4 py-3 h-14 hover:border-accent transition-colors text-left">
            <CalendarIcon className="h-5 w-5 text-accent" />
            <span className="text-base font-medium">{format(date, "EEE, MMM d, yyyy")}</span>
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
    </div>
  )
}

function GuestCounter({
  label,
  sub,
  value,
  onChange,
  min,
  max,
}: {
  label: string
  sub: string
  value: number
  onChange: (n: number) => void
  min: number
  max: number
}) {
  return (
    <div>
      <Label className="eyebrow mb-2 block">{label}</Label>
      <div className="border border-border px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-accent" />
          <div>
            <div className="text-sm font-medium">{value} {label}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{sub}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onChange(Math.max(min, value - 1))}
            disabled={value <= min}
            className="h-8 w-8 border border-border flex items-center justify-center hover:border-accent disabled:opacity-30"
            aria-label={`Decrease ${label}`}
          >
            <Minus className="h-3 w-3" />
          </button>
          <button
            onClick={() => onChange(Math.min(max, value + 1))}
            disabled={value >= max}
            className="h-8 w-8 border border-border flex items-center justify-center hover:border-accent disabled:opacity-30"
            aria-label={`Increase ${label}`}
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  )
}

function StepRoom({
  selectedRoom,
  setSelectedRoom,
  nights,
}: {
  selectedRoom: string
  setSelectedRoom: (s: string) => void
  nights: number
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl mb-2">Choose your suite</h2>
      <p className="text-sm text-muted-foreground mb-8">
        {nights} night{nights !== 1 ? "s" : ""} · Rates shown are per night
      </p>

      <div className="space-y-4">
        {rooms.map((r) => {
          const active = r.slug === selectedRoom
          return (
            <button
              key={r.slug}
              onClick={() => setSelectedRoom(r.slug)}
              className={cn(
                "w-full text-left grid md:grid-cols-[180px_1fr_auto] gap-5 p-4 border transition-colors",
                active ? "border-accent bg-secondary/40" : "border-border hover:border-accent/50",
              )}
            >
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-muted overflow-hidden">
                <Image src={r.image} alt={r.name} fill sizes="180px" className="object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl">{r.name}</h3>
                  {active && (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                      Selected
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground italic">{r.tagline}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{r.size} m²</span>
                  <span>·</span>
                  <span>{r.beds}</span>
                  <span>·</span>
                  <span>{r.view}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-serif text-2xl">${r.price}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  per night
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  ${r.price * nights} total
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function StepAddons({
  selected,
  toggle,
}: {
  selected: string[]
  toggle: (id: string) => void
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl mb-2">Enhance your stay</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Optional additions to curate your visit. All can be added later.
      </p>
      <div className="space-y-3">
        {addons.map((a) => {
          const active = selected.includes(a.id)
          return (
            <label
              key={a.id}
              className={cn(
                "flex items-center justify-between gap-5 p-5 border cursor-pointer transition-colors",
                active ? "border-accent bg-secondary/40" : "border-border hover:border-accent/50",
              )}
            >
              <div className="flex items-center gap-4">
                <Checkbox
                  checked={active}
                  onCheckedChange={() => toggle(a.id)}
                  className="h-5 w-5 rounded-none data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                />
                <div>
                  <div className="font-medium">{a.label}</div>
                  <div className="text-xs text-muted-foreground">{a.per}</div>
                </div>
              </div>
              <div className="font-serif text-xl">${a.price}</div>
            </label>
          )
        })}
      </div>
    </div>
  )
}

function StepGuest({
  guest,
  setGuest,
}: {
  guest: {
    firstName: string
    lastName: string
    email: string
    phone: string
    country: string
    special: string
  }
  setGuest: (g: typeof guest) => void
}) {
  const update = (k: keyof typeof guest, v: string) => setGuest({ ...guest, [k]: v })

  return (
    <div>
      <h2 className="font-serif text-3xl mb-2">Guest details</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Primarily for the reservation — we will greet you by name.
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="f" className="eyebrow mb-2 block">First Name</Label>
          <Input id="f" value={guest.firstName} onChange={(e) => update("firstName", e.target.value)} className="h-12 rounded-none" />
        </div>
        <div>
          <Label htmlFor="l" className="eyebrow mb-2 block">Last Name</Label>
          <Input id="l" value={guest.lastName} onChange={(e) => update("lastName", e.target.value)} className="h-12 rounded-none" />
        </div>
        <div>
          <Label htmlFor="e" className="eyebrow mb-2 block">Email</Label>
          <Input id="e" type="email" value={guest.email} onChange={(e) => update("email", e.target.value)} className="h-12 rounded-none" />
        </div>
        <div>
          <Label htmlFor="p" className="eyebrow mb-2 block">Phone</Label>
          <Input id="p" type="tel" value={guest.phone} onChange={(e) => update("phone", e.target.value)} className="h-12 rounded-none" />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="c" className="eyebrow mb-2 block">Country</Label>
          <Input id="c" value={guest.country} onChange={(e) => update("country", e.target.value)} className="h-12 rounded-none" />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="s" className="eyebrow mb-2 block">Special Requests</Label>
          <Textarea id="s" value={guest.special} onChange={(e) => update("special", e.target.value)} rows={4} className="rounded-none resize-none" placeholder="Allergies, occasions, preferences..." />
        </div>
      </div>
    </div>
  )
}

function StepPayment({ total, onConfirm }: { total: number; onConfirm: () => void }) {
  const [loading, setLoading] = useState(false)

  const handle = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    onConfirm()
  }

  return (
    <div>
      <h2 className="font-serif text-3xl mb-2">Payment</h2>
      <p className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
        <Lock className="h-3.5 w-3.5" /> Secured by 256-bit encryption
      </p>

      <div className="space-y-5">
        <div>
          <Label htmlFor="card" className="eyebrow mb-2 block">Card Number</Label>
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="card" placeholder="4242 4242 4242 4242" className="h-12 rounded-none pl-11" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Label htmlFor="exp" className="eyebrow mb-2 block">Expiry</Label>
            <Input id="exp" placeholder="MM / YY" className="h-12 rounded-none" />
          </div>
          <div>
            <Label htmlFor="cvc" className="eyebrow mb-2 block">CVC</Label>
            <Input id="cvc" placeholder="123" className="h-12 rounded-none" />
          </div>
        </div>
        <div>
          <Label htmlFor="cardname" className="eyebrow mb-2 block">Name on Card</Label>
          <Input id="cardname" className="h-12 rounded-none" />
        </div>
      </div>

      <div className="mt-8 p-5 bg-secondary/60 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Amount due today</span>
          <span className="font-serif text-2xl">${total}</span>
        </div>
      </div>

      <Button
        onClick={handle}
        disabled={loading}
        className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-none uppercase tracking-[0.2em] text-xs h-14"
      >
        {loading ? "Processing..." : `Confirm Reservation · $${total}`}
      </Button>

      <p className="mt-4 text-xs text-center text-muted-foreground">
        Free cancellation until 48 hours before arrival.
      </p>
    </div>
  )
}

function StepConfirmation({
  guest,
}: {
  guest: { firstName: string; lastName: string; email: string }
}) {
  return (
    <div className="text-center py-8">
      <div className="mx-auto h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
        <Check className="h-8 w-8 text-accent" />
      </div>
      <h2 className="mt-6 font-serif text-4xl">Thank you{guest.firstName ? `, ${guest.firstName}` : ""}.</h2>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">
        Your reservation is confirmed. A confirmation has been sent to{" "}
        <span className="text-foreground">{guest.email || "your email"}</span>.
        Our concierge will be in touch to prepare your arrival.
      </p>
      <div className="mt-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        Booking Reference · ML-{Math.random().toString(36).slice(2, 8).toUpperCase()}
      </div>
    </div>
  )
}

function Summary({
  room,
  checkIn,
  checkOut,
  nights,
  adults,
  children,
  selectedAddons,
  roomTotal,
  addonsTotal,
  taxes,
  total,
}: {
  room: (typeof rooms)[number]
  checkIn: Date
  checkOut: Date
  nights: number
  adults: number
  children: number
  selectedAddons: string[]
  roomTotal: number
  addonsTotal: number
  taxes: number
  total: number
}) {
  return (
    <div className="bg-navy text-background p-6 md:p-8">
      <p className="eyebrow text-accent mb-5">Your reservation</p>

      <div className="relative aspect-[4/3] overflow-hidden mb-5">
        <Image src={room.image} alt={room.name} fill sizes="400px" className="object-cover" />
      </div>
      <h3 className="font-serif text-2xl">{room.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-background/60">{room.view}</p>

      <div className="mt-6 space-y-3 text-sm border-t border-white/10 pt-5">
        <Row label="Check in" value={format(checkIn, "EEE, MMM d")} />
        <Row label="Check out" value={format(checkOut, "EEE, MMM d")} />
        <Row label="Guests" value={`${adults + children} · ${nights} night${nights !== 1 ? "s" : ""}`} />
      </div>

      <div className="mt-5 pt-5 border-t border-white/10 space-y-3 text-sm">
        <Row label={`Room × ${nights}`} value={`$${roomTotal}`} />
        {selectedAddons.length > 0 && (
          <Row label="Add-ons" value={`$${addonsTotal}`} />
        )}
        <Row label="Taxes & fees" value={`$${taxes}`} />
      </div>

      <div className="mt-5 pt-5 border-t border-white/10 flex items-end justify-between">
        <span className="text-xs uppercase tracking-[0.2em] text-background/60">Total</span>
        <span className="font-serif text-3xl text-accent">${total}</span>
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-background/70">{label}</span>
      <span className="text-background">{value}</span>
    </div>
  )
}
