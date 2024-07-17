import { memo } from "react";
import { plan1Icon, plan2Icon, plan3Icon, planCommonIcon, supportAttrAssistIcon, supportAttrDanceIcon, supportAttrVisualIcon, supportAttrVocalIcon } from "~/assets/media";
import { ProducePlanType, SupportCardType } from "~/types/proto/penum";

function _PlanIcon({
  planType,
  className,
}: {
  planType: ProducePlanType,
  className?: string,
}) {
  let assetPath = ""
  switch (planType) {
    case ProducePlanType.Common:
      assetPath = planCommonIcon
      break
    case ProducePlanType.Plan1:
      assetPath = plan1Icon
      break
    case ProducePlanType.Plan2:
      assetPath = plan2Icon
      break
    case ProducePlanType.Plan3:
      assetPath = plan3Icon
      break
    default: break
  }
  return (
    <div className={`${className} aspect-square`}>
      <img
        src={assetPath}
        alt={assetPath}
        className="object-fill"
      />
    </div>
  )
}

export const PlanIcon = memo(_PlanIcon)
