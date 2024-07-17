import { memo } from "react";
import { buffTypeBackground, getExamEffectImgUrl } from "~/assets/media";
import { ProduceExamEffectType } from "~/types/proto/penum";

function _ExamEffectIcon({
  effectType,
  className,
}: {
  effectType: ProduceExamEffectType
  className?: string
}) {
  const bgImg = buffTypeBackground[effectType]
  const iconImg = getExamEffectImgUrl(effectType)
  return (
    <div className={`relative aspect-square overflow-visible ${className}`}>
      <img src={bgImg} alt={bgImg} className="object-contain absolute inset-0" />
      <img src={iconImg} alt={iconImg} className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[80%]" />
    </div>
  )
}

export const ExamEffectIcon = memo(_ExamEffectIcon)
