import { memo } from "react";
import { supportAttrAssistIcon, supportAttrDanceIcon, supportAttrVisualIcon, supportAttrVocalIcon } from "~/assets/media";
import { ProduceParameterType } from "~/types/proto/penum";

function _AttributeIcon({
  attribute,
  className,
}: {
  attribute: ProduceParameterType,
  className?: string,
}) {
  let assetNamePath = ""
  switch (attribute) {
    case ProduceParameterType.Vocal:
      assetNamePath = supportAttrVocalIcon
      break
    case ProduceParameterType.Dance:
      assetNamePath = supportAttrDanceIcon
      break
    case ProduceParameterType.Visual:
      assetNamePath = supportAttrVisualIcon
      break
    default:
      assetNamePath = supportAttrAssistIcon
      break
  }
  return (
    <div className={`${className} aspect-square overflow-hidden`}>
      <img
        src={assetNamePath}
        alt={assetNamePath}
        className="object-fill max-w-full max-h-full"
      />
    </div>
  )
}

export const AttributeIcon = memo(_AttributeIcon)
