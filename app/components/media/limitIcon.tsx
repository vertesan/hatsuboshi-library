import { memo } from "react";
import { limitIcon, numberMap } from "~/assets/media";
import {
  IdolCardLevelLimitRank
} from "~/types/proto/penum";

function _LimitIcon({
  limitLevel,
  className,
}: {
  limitLevel: IdolCardLevelLimitRank,
  className?: string,
}) {
  return (
    <div className={`${className} min-h-0 min-w-0 w-full h-full flex justify-center items-center`}>
      <img
        src={limitIcon}
        alt="limit icon"
        className="object-contain min-w-0 min-h-0 max-w-full max-h-full"
      />
      <img
        src={numberMap[limitLevel]}
        alt="limit level"
        className="object-contain min-w-0 min-h-0 max-w-full max-h-full"
      />
    </div>
  )
}

export const LimitIcon = memo(_LimitIcon)
