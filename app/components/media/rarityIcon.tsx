import { memo } from "react";
import { supportRarityRIcon, supportRaritySrIcon, supportRaritySsrIcon } from "~/assets/media";
import {
  IdolCardRarity,
  ProduceParameterType,
  SupportCardRarity
} from "~/types/proto/penum";

function _RarityIcon({
  rarity,
  className,
}: {
  rarity: SupportCardRarity | IdolCardRarity,
  className?: string,
}) {
  let assetPath = ""
  switch (rarity) {
    case SupportCardRarity.Ssr:
      assetPath = supportRaritySsrIcon
      break
    case SupportCardRarity.Sr:
      assetPath = supportRaritySrIcon
      break
    case SupportCardRarity.R:
      assetPath = supportRarityRIcon
      break
    default: break
  }
  return (
    <div className={`${className} overflow-hidden`}>
      <img
        src={assetPath}
        alt={assetPath}
        className="object-contain max-w-full max-h-full"
      />
    </div>
  )
}

export const RarityIcon = memo(_RarityIcon)
