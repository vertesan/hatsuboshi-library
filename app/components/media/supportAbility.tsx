import { XSupportCard } from "~/types"
import { UnArray } from "~/types/utils"
import { ProduceEffectIcon } from "~/components/media/effectIcon"
import { EffectDescription } from "~/components/media/effectDescription"
import React from "react"
import { useTranslation } from "react-i18next"

export function SupportAbility({
  supportCardSkillLevels,
  level,
  className,
  ...props
}: {
  supportCardSkillLevels: UnArray<XSupportCard['produceSkills']>,
  level: { cardLevel?: number, skillLevel?: number },
  className?: string,
} & React.ComponentProps<'div'>) {
  const { t } = useTranslation()
  let unlockLevel = 0
  const getSkillLevel = (cardLevel: number) => {
    for (let i = supportCardSkillLevels.length - 1; i >= 0; i--) {
      if (supportCardSkillLevels[i].supportCardLevel <= cardLevel) {
        return supportCardSkillLevels[i].produceSkillLevel
      }
    }
    unlockLevel = supportCardSkillLevels[0].supportCardLevel
    return 0
  }
  const skillLevel = level.skillLevel
    ? level.skillLevel
    : level.cardLevel
      ? getSkillLevel(level.cardLevel)
      : 0
  const skill = supportCardSkillLevels.find(level => level.produceSkillLevel === skillLevel) ?? supportCardSkillLevels[0]
  return (
    <div className={`relative flex flex-row items-center gap-2 p-2 border-2 rounded-lg ${className}`} {...props}>
      <ProduceEffectIcon className="flex-none relative h-8 w-8" effectType={skill.produceSkill.produceEffects[0].produceEffectType} />
      <EffectDescription descriptions={skill.produceSkill.produceDescriptions} />
      {skillLevel
        ? null
        : <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-lg backdrop-blur-[2px] dark:backdrop-brightness-[0.7]">
          <p className="text-xl font-semibold">{t("Unlock at Lv") + unlockLevel}</p>
        </div>
      }
    </div>
  )
}
