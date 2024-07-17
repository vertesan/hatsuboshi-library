import { HoverCard } from "@mantine/core"
import React, { useMemo, useRef } from "react"
import * as media from "~/assets/media"
import { getAssetImgUrl, staminaIcon } from "~/assets/media"
import { EffectDescription } from "~/components/media/effectDescription"
import { PlusIcon } from "~/components/media/plusIcon"
import { ExamCostType, ProduceCardCategory, ProduceCardRarity, ProduceExamEffectType } from "~/types/proto/penum"
import { ProduceCard } from "~/types/proto/pmaster"
import { ExamEffectIcon } from "./buffIcon"

/** Remember to set position (relative or absolute) attribute */
export function ProduceCardIcon({
  card,
  withHoverDescription,
  closeDelay = 50,
  className,
  ...props
}: {
  card: ProduceCard,
  withHoverDescription?: boolean,
  closeDelay?: number,
  className?: string,
} & Omit<React.ComponentProps<'div'>, 'className'>) {

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

  const cardElement = (
    <div className={`aspect-square overflow-hidden border-2 rounded-lg border-zinc-500 ${className}`} {...props}>
      <img
        src={getAssetImgUrl(card.assetId)}
        alt={card.id}
        className="absolute object-fill"
      />
      <img
        src={frameIcon}
        alt={frameIcon}
        className="absolute object-fill"
      />
      {/* <CostIcon card={card} className="absolute right-0 bottom-0 w-1/3 h-1/3" /> */}
      {card.upgradeCount
        ? <PlusIcon
          upgradeCount={card.upgradeCount}
          className="absolute right-0 h-full w-1/4"
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

function CostIcon({
  card,
  className,
}: {
  card: ProduceCard,
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
    const costMap = {
      [ExamCostType.ExamLessonBuff]: ProduceExamEffectType.ExamLessonBuff,
      [ExamCostType.ExamReview]: ProduceExamEffectType.ExamReview,
      [ExamCostType.ExamCardPlayAggressive]: ProduceExamEffectType.ExamCardPlayAggressive,
      [ExamCostType.ExamParameterBuff]: ProduceExamEffectType.ExamParameterBuff,
    }
    costValue = card.costValue
    costImageComponent = <ExamEffectIcon className="absolute top-0 right-0 object-contain" effectType={costMap[card.costType]} />
  }

  const bg = `url('${costImageSrc}')`

  return (
    <div className={`${className}`}>
      <div className="relative h-full w-full">
        {costImageComponent
          ? costImageComponent
          : <>
            <img className="absolute bottom-0 inset-x-0 object-fill" src={costImageSrc} alt="stamina icon" />
            <p className="absolute bottom-0 inset-x-0 text-xs sm:text-sm text-center text-white font-bold text-outline-black">{costValue ? `-${costValue}` : costValue}</p>
          </>
        }
      </div>
    </div>
  )

}
