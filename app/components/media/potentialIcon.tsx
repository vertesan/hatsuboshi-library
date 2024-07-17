import { memo } from "react";
import { limitIcon, numberMap, potentialIcon } from "~/assets/media";
import {
  IdolCardLevelLimitRank,
  IdolCardPotentialRank
} from "~/types/proto/penum";

function _PotentialIcon({
  potentialLevel,
  className,
}: {
  potentialLevel: IdolCardPotentialRank,
  className?: string,
}) {
  return (
    <div className={`${className} h-full w-full overflow-hidden flex flex-row justify-center items-center`}>
      <img
        src={potentialIcon}
        alt="potential icon"
        className="object-contain max-w-full max-h-full"
      />
      <img
        src={numberMap[potentialLevel]}
        alt="potential level"
        className="object-contain max-w-full max-h-full"
      />
    </div>
  )
}

export const PotentialIcon = memo(_PotentialIcon)
