import { memo } from "react";
import { blockIcon } from "~/assets/media";
import { CostNumberIcon } from "~/components/media/costNumberIcon";

function _BlockIcon({
  blockValue,
  className,
}: {
  blockValue: number
  className?: string
}) {
  return (
    <div className={`${className}`}>
      <div className="relative h-full w-full">
        <div className="absolute h-full w-full top-0 right-0">
          <img className="absolute top-0 object-contain" src={blockIcon} alt="stamina" />
          <CostNumberIcon value={blockValue} noMinus className="absolute top-[3px] inset-x-0 h-[55%]" />
        </div>
      </div>
    </div>
  )
}

export const BlockIcon = memo(_BlockIcon)
