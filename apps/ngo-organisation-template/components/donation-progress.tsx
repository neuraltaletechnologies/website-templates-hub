import { cn } from "@/lib/utils"

interface Props {
  raised: number
  goal: number
  currency?: string
  donors?: number
  daysLeft?: number
  className?: string
}

export function DonationProgress({
  raised,
  goal,
  currency = "$",
  donors,
  daysLeft,
  className,
}: Props) {
  const pct = Math.min(100, Math.round((raised / goal) * 100))
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-end justify-between text-sm">
        <div>
          <div className="font-serif text-2xl font-semibold text-foreground">
            {currency}
            {raised.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">
            raised of {currency}
            {goal.toLocaleString()} goal
          </div>
        </div>
        <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {pct}% funded
        </div>
      </div>
      <div
        className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      {(donors || daysLeft) && (
        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          {donors !== undefined && <span>{donors.toLocaleString()} donors</span>}
          {donors !== undefined && daysLeft !== undefined && <span>&middot;</span>}
          {daysLeft !== undefined && <span>{daysLeft} days left</span>}
        </div>
      )}
    </div>
  )
}
