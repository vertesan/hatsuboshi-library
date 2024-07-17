import { memo } from "react";
import { supportAttrAssistIcon, supportAttrDanceIcon, supportAttrVisualIcon, supportAttrVocalIcon } from "~/assets/media";
import { SupportCardType } from "~/types/proto/penum";

function _SupportCardTypeIcon({
  cardType,
  className,
}: {
  cardType: SupportCardType,
  className?: string,
}) {
  let assetPath = ""
  switch (cardType) {
    case SupportCardType.Vocal:
      assetPath = supportAttrVocalIcon
      break
    case SupportCardType.Dance:
      assetPath = supportAttrDanceIcon
      break
    case SupportCardType.Visual:
      assetPath = supportAttrVisualIcon
      break
    case SupportCardType.Assist:
      assetPath = supportAttrAssistIcon
      break
    default: break
  }
  return (
    <div className={`${className} aspect-square overflow-hidden`}>
      <img
        src={assetPath}
        alt={assetPath}
        className="object-fill max-w-full max-h-full"
      />
    </div>
  )
}

export const SupportCardTypeIcon = memo(_SupportCardTypeIcon)
