import { HoverCard } from "@mantine/core"
import React, { memo } from "react"
import * as media from "~/assets/media"
import { getAssetImgUrl, staminaIcon } from "~/assets/media"
import { EffectDescription } from "~/components/media/effectDescription"
import { PlusIcon } from "~/components/media/plusIcon"
import { costMap } from "~/data/examCostMap"
import { XProduceCard } from "~/types"
import { ExamCostType, ProduceCardCategory, ProduceCardRarity, ProduceExamEffectType } from "~/types/proto/penum"
import { BlockIcon } from "./blockIcon"
import { ExamEffectIcon } from "./buffIcon"
import { CostNumberIcon } from "./costNumberIcon"

export const ProduceCardIcon = memo(_ProduceCardIcon)

/** Remember to set position (relative or absolute) attribute */
function _ProduceCardIcon({
  card,
  character = "kllj",
  withHoverDescription,
  closeDelay = 50,
  className,
  ...props
}: {
  card: XProduceCard,
  character?: string,
  withHoverDescription?: boolean,
  closeDelay?: number,
  className?: string,
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>) {

  const applyedAssetId = card.isCharacterAsset
    ? card.assetId + "-" + character
    : card.assetId

  const frameIcon = (() => {
    switch (card.category) {
      case ProduceCardCategory.ActiveSkill:
        switch (card.rarity) {
          case ProduceCardRarity.Ssr: return media.cardActiveFrameSsr
          case ProduceCardRarity.Sr: return media.cardActiveFrameSr
          case ProduceCardRarity.R: return media.cardActiveFrameR
          default: return media.cardActiveFrameN
        }
      case ProduceCardCategory.MentalSkill:
        switch (card.rarity) {
          case ProduceCardRarity.Ssr: return media.cardMentalFrameSsr
          case ProduceCardRarity.Sr: return media.cardMentalFrameSr
          case ProduceCardRarity.R: return media.cardMentalFrameR
          default: return media.cardMentalFrameN
        }
      case ProduceCardCategory.Trouble:
        return media.cardTroubleFrame
      default:
        return media.cardTroubleFrame
    }
  })()

  const blockValue = card.playEffects.find(
    effect =>
      effect.produceExamEffect.effectType === ProduceExamEffectType.ExamBlock ||
      effect.produceExamEffect.effectType === ProduceExamEffectType.ExamBlockAddMultipleAggressive
  )?.produceExamEffect.effectValue1

  const cardElement = (
    <div className={`aspect-square overflow-hidden border-2 rounded-lg border-zinc-500 ${className}`} {...props}>
      <img
        src={getAssetImgUrl(applyedAssetId)}
        alt={card.id}
        className="absolute object-fill"
      />
      <img
        src={frameIcon}
        alt={frameIcon}
        className="absolute object-fill"
      />
      <PlayEffectsIcon card={card} className="absolute left-0 bottom-0 w-[29%] h-full" />
      <LessonIcon card={card} className="absolute left-0 top-0 h-1/4 opacity-70" />
      {blockValue !== undefined
        ? <BlockIcon blockValue={blockValue} className="absolute right-0 top-0 w-1/3 h-1/3" />
        : null
      }
      <CostIcon card={card} className="absolute right-0 bottom-0 w-1/3 h-1/3" />
      {card.upgradeCount
        ? <PlusIcon
          upgradeCount={card.upgradeCount}
          className="absolute -right-[2px] h-full w-[30%]"
        />
        : null
      }
    </div>
  )

  return withHoverDescription
    ? <HoverCard shadow="md" closeDelay={closeDelay} width={240} withArrow arrowSize={8} offset={2} position="top">
      <HoverCard.Target>{cardElement}</HoverCard.Target>
      <HoverCard.Dropdown onClick={(e) => { e.preventDefault() }}>
        <p className="font-medium pb-1 text-md dark:text-white">{card.name}</p>
        <EffectDescription descriptions={card.descriptions} />
      </HoverCard.Dropdown>
    </HoverCard>
    : cardElement
}

function LessonIcon({
  card,
  className,
}: {
  card: XProduceCard,
  className?: string,
}) {
  const lessonEffect = card.playEffects.find(
    effect => effect.produceExamEffect.effectType === ProduceExamEffectType.ExamLesson
  )
  if (lessonEffect === undefined) return null
  const multiplier = lessonEffect.produceExamEffect.effectCount

  return (
    <div className={`${className}`}>
      <div className="flex flex-row justify-start h-full">
        <CostNumberIcon
          value={lessonEffect.produceExamEffect.effectValue1}
          invert noMinus
          className="h-full"
        />
        {multiplier > 1
          ? <div className="bg-black opacity-70 rounded-3xl w-[18px] h-[80%] flex justify-center items-center">
            <CostNumberIcon
              value={multiplier}
              noMinus
              withMultiplier
              className="h-[70%]"
            />
          </div>
          : null
        }
      </div>
    </div>
  )
}

function PlayEffectsIcon({
  card,
  className,
}: {
  card: XProduceCard,
  className?: string,
}) {
  const displayEffects = card.playEffects
    .filter(effect =>
      !effect.hideIcon &&
      effect.produceExamEffect.effectType !== ProduceExamEffectType.ExamLesson &&
      effect.produceExamEffect.effectType !== ProduceExamEffectType.ExamBlock &&
      effect.produceExamEffect.effectType !== ProduceExamEffectType.ExamBlockPerUseCardCount &&
      effect.produceExamEffect.effectType !== ProduceExamEffectType.ExamBlockAddMultipleAggressive &&
      effect.produceExamEffect.effectType !== ProduceExamEffectType.StanceLock
    ).map(effect =>
      effect.produceExamEffect.effectType
    )
  if (card.produceCardStatusEnchantId) {
    displayEffects.push(ProduceExamEffectType.ExamAddGrowEffect)
  }
  return (
    displayEffects.length > 0
      ? <div className={`${className}`}>
        <div className="flex flex-col w-full h-full justify-end">
          {displayEffects.map((effectType, idx) => {
            return (
              <ExamEffectIcon
                key={idx}
                className="aspect-square w-full object-contain"
                effectType={effectType}
              />
            )
          })}
        </div>
      </div>
      : null
  )
}

function CostIcon({
  card,
  className,
}: {
  card: XProduceCard,
  className?: string,
}) {
  let costValue = card.stamina
  let costImageSrc = staminaIcon
  let costImageComponent
  if (card.forceStamina !== 0) {
    costValue = card.forceStamina
    costImageSrc = media.staminaRedIcon
  }
  if (card.costType !== ExamCostType.Unknown) {
    costValue = card.costValue
    costImageComponent = <ExamEffectIcon className="absolute -top-2 object-contain" effectType={costMap[card.costType]} />
  }

  return (
    <div className={`${className}`}>
      <div className="relative h-full w-full">
        <div className="absolute h-full w-full bottom-0 right-0">
          {costImageComponent
            ? costImageComponent
            : <img className="absolute bottom-0 object-contain" src={costImageSrc} alt="stamina" />
          }
          <CostNumberIcon value={costValue} className="absolute bottom-[3px] inset-x-0 h-[55%]" />
        </div>
      </div>
    </div>
  )
}
