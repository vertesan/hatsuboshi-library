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
      <img src={bgImg} alt={bgImg} className="object-fill absolute inset-0" />
      <div className="absolute inset-0 h-full w-full flex items-center justify-center">
        <img src={iconImg} alt={iconImg} className="object-fill h-[80%] w-[80%]" />
      </div>
    </div>
  )
}

export const ExamEffectIcon = memo(_ExamEffectIcon)
