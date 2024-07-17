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
    <div className={`${className} min-h-0 min-w-0 w-full h-full flex justify-center items-center`}>
      <img
        src={potentialIcon}
        alt="potential icon"
        className="object-contain min-w-0 min-h-0 max-w-full max-h-full"
      />
      <img
        src={numberMap[potentialLevel]}
        alt="potential level"
        className="object-contain min-w-0 min-h-0 max-w-full max-h-full"
      />
    </div>
  )
}

export const PotentialIcon = memo(_PotentialIcon)
