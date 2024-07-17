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
    <div className={`${className} h-full w-full overflow-hidden flex flex-row justify-center items-center`}>
      <img
        src={limitIcon}
        alt="limit icon"
        className="object-contain max-w-full max-h-full"
      />
      <img
        src={numberMap[limitLevel]}
        alt="limit level"
        className="object-contain max-w-full max-h-full"
      />
    </div>
  )
}

export const LimitIcon = memo(_LimitIcon)
