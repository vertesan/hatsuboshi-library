import { memo } from "react"
import { multiplier, numberMap, numberMinus } from "~/assets/media"

function _CostNumberIcon({
  value,
  noMinus = false,
  withMultiplier = false,
  invert = false,
  className,
}: {
  value: number,
  noMinus?: boolean,
  withMultiplier?: boolean,
  invert?: boolean,
  className?: string,
}) {
  const numbers = [...value.toString()]
  return (
    <div className={`flex flex-row justify-center items-center ${className} ${invert ? "invert" : ""}`}>
      {value !== 0 && !noMinus
        ? <img src={numberMinus} alt="minus" className="object-contain h-full" />
        : null
      }
      {withMultiplier
        ? <img src={multiplier} alt="x" className="object-contain h-full" />
        : null
      }
      {numbers.map((num, idx) => {
        return (
          <img key={idx} src={numberMap[+num as keyof typeof numberMap]} alt="num" className="object-contain h-full" />
        )
      })}
    </div>
  )
}

export const CostNumberIcon = memo(_CostNumberIcon)
