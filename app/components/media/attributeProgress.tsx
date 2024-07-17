
export function AttributeProgress({
  percentage,
  value,
  attr,
  className,
}: {
  percentage: string,
  value: number,
  attr: "vo" | "da" | "vi",
  className?: string,
}) {
  let colorFrom = ""
  let colorTo = ""
  switch (attr) {
    case "vo":
      colorFrom = "from-vocal"
      colorTo = "to-[#ff92cb]"
      break
    case "da":
      colorFrom = "from-dance"
      colorTo = "to-[#83c2f4]"
      break
    case "vi":
      colorFrom = "from-visual"
      colorTo = "to-[#ffdb93]"
      break
  }

  return (
    <div className="w-full">
      <div className={`flex flex-row justify-start items-center gap-2 transition-width ease-linear duration-500 ${className}`}
        style={{ width: percentage }}
      >
        <div
          className={`flex-1 flex justify-center items-center text-xs capitalize font-medium text-zinc-100 rounded-xl h-[11px] bg-gradient-to-r ${colorFrom} ${colorTo}`}
        >
          {attr}
        </div>
        <span className="flex-none text-lg">{value}</span>
      </div>
    </div>
  )
}
