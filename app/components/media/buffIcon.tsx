import { memo } from "react";
import { buffTypeBackground, getExamEffectImgUrl } from "~/assets/media";
import { ProduceDescriptionType, ProduceExamEffectType } from "~/types/proto/penum";

function _ExamEffectIcon({
  effectType,
  className,
  ...props
}: {
  effectType: ProduceExamEffectType
  className?: string
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>) {
  if ([ProduceExamEffectType.ExamLessonAddMultipleParameterBuff].includes(effectType)) {
    return null
  }
  const bgImg = buffTypeBackground[effectType as keyof typeof buffTypeBackground]
  const iconImg = getExamEffectImgUrl(effectType, ProduceDescriptionType.ProduceExamEffectType)
  return (
    <div className={`relative aspect-square overflow-visible ${className}`} {...props}>
      <img src={bgImg} alt={bgImg} className="object-contain absolute inset-0" />
      <img src={iconImg} alt={iconImg} className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[77%] w-[77%]" />
    </div>
  )
}

export const ExamEffectIcon = memo(_ExamEffectIcon)
