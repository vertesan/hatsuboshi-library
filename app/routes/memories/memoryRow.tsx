import { Checkbox, UnstyledButton } from "@mantine/core"
import { useDisclosure, useToggle } from "@mantine/hooks"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import { memo, useMemo, useRef, useState } from "react"
import { getResultGradeImgUrl, onStartIcon } from "~/assets/media"
import { ProduceEffectIcon } from "~/components/media/effectIcon"
import { PlanIcon } from "~/components/media/planIcon"
import { ProduceCardIcon } from "~/components/media/produceCard"
import { ProduceItemIcon } from "~/components/media/produceItem"
import { XMemoryInspector, XUserMemory } from "~/types"
import { ProduceEffectType, ProduceMemoryProduceCardPhaseType } from "~/types/proto/penum"
import { ProduceEffect } from "~/types/proto/pmaster"

function _MemoryRow({
  xUserMemory,
  xMemory,
  outterChecked,
  className,
}: {
  xUserMemory: XUserMemory,
  xMemory: XMemoryInspector,
  outterChecked: boolean,
  className?: string,
}) {
  const [checked, setChecked] = useDisclosure(xUserMemory.checked)
  const pCard = xMemory.produceCards[`${xUserMemory.produceCard.id}-${xUserMemory.produceCard.upgradeCount}`]
  dayjs.extend(utc)
  dayjs.extend(timezone)

  const attrAbilities = useRef<[ProduceEffect | null, ProduceEffect | null, ProduceEffect | null]>([null, null, null])
  useMemo(() => {
    xUserMemory.abilities.forEach(a => {
      const eff = xMemory.memoryAbilities[a.id]?.skill.produceEffects[0]
      if ([ProduceEffectType.VocalAddition, ProduceEffectType.VocalGrowthRateAddition].includes(eff.produceEffectType)) {
        attrAbilities.current[0] = eff
      } else if ([ProduceEffectType.DanceAddition, ProduceEffectType.DanceGrowthRateAddition].includes(eff.produceEffectType)) {
        attrAbilities.current[1] = eff
      } else if ([ProduceEffectType.VisualAddition, ProduceEffectType.VisualGrowthRateAddition].includes(eff.produceEffectType)) {
        attrAbilities.current[2] = eff
      }
    })
  }, [])

  const onClick = () => {
    xUserMemory.checked = !checked
    setChecked.toggle()
  }

  const isPermil = (effect: ProduceEffect) => {
    if (
      effect.produceEffectType === ProduceEffectType.VocalGrowthRateAddition ||
      effect.produceEffectType === ProduceEffectType.DanceGrowthRateAddition ||
      effect.produceEffectType === ProduceEffectType.VisualGrowthRateAddition
    ) {
      return true
    }
    return false
  }

  // keep instance & state synced
  if (checked !== xUserMemory.checked) {
    setChecked.toggle()
  }

  return (
    <UnstyledButton className={`${className} relative min-w-[1250px]`} onClick={onClick}>
      <div className={`${checked ? "bg-emerald-400 bg-opacity-20" : "bg-[var(--mantine-color-gray-1)] dark:bg-[var(--mantine-color-dark-6)]"} p-2 rounded-lg flex justify-start items-center cursor-pointer gap-4`}>
        <Checkbox
          checked={checked}
          onChange={(event) => {
            // xUserMemory.checked = event.currentTarget.checked
            // setChecked(event.currentTarget.checked)
          }}
        />
        <div className="h-6 w-6">
          <PlanIcon planType={xUserMemory.planType} />
        </div>
        <div className="h-6 w-6">
          <img src={getResultGradeImgUrl(xUserMemory.grade)} alt="grade" className="object-contain h-6 w-6" />
        </div>
        <div className="relative w-16">
          <ProduceCardIcon
            card={pCard}
            character={xUserMemory.characterId}
            className="relative h-16 w-16"
          />
          <div className="absolute top-1 left-1/2 -translate-x-1/2 h-[20px] w-[53.328px]">
            {xUserMemory.produceCardPhaseType === ProduceMemoryProduceCardPhaseType.ProduceStart
              ? <img src={onStartIcon} alt="onStart" className="object-fill h-[20px] w-[53.328px]" />
              : null
            }
          </div>
        </div>
        <div className="w-[54px] h-16">
          {attrAbilities.current.map((effect, idx) => {
            if (effect === null) return (<div key={idx} className="h-[21px] w-[54px]"></div>)
            return (
              <div key={effect?.id} className="flex justify-start items-center gap-1">
                <div className="h-[21px] w-[21px]">
                  <ProduceEffectIcon
                    className="relative h-[21px] w-[21px]"
                    effectType={effect.produceEffectType}
                  />
                </div>
                <span className="text-sm leading-4 w-[32px]">
                  {isPermil(effect)
                    ? (effect.effectValueMin / 10.0).toString() + "%"
                    : effect.effectValueMin
                  }
                </span>
              </div>
            )
          })}
        </div>
        <span className="w-[65px] text-md">{dayjs(+xUserMemory.shotTime).tz("Asia/Tokyo").format("YY/MM/DD")}</span>
        <span className="w-[50px] font-medium text-lg">{xUserMemory.power}</span>
        <div className="grid grid-cols-6">
          {xUserMemory.examBattleProduceCards.map(card => {
            return (
              <ProduceCardIcon
                key={card.id}
                card={xMemory.produceCards[`${card.id}-${card.upgradeCount}`]}
                character={xUserMemory.characterId}
                className="relative h-16 w-16"
              />
            )
          })}
        </div>
        <div className="grid grid-cols-3">
          {xUserMemory.examBattleProduceItemIds.map(it => {
            return (
              <ProduceItemIcon
                key={it}
                item={xMemory.produceItems[it]}
                className="relative h-16 w-16"
              />
            )
          })}
        </div>
        <span className="w-8 text-right text-vocal">{xUserMemory.vocal}</span>
        <span className="w-8 text-right text-dance">{xUserMemory.dance}</span>
        <span className="w-8 text-right text-visual">{xUserMemory.visual}</span>
        <span className="w-8 text-right text-emerald-600">{xUserMemory.stamina}</span>
      </div>
      <div className="absolute top-0 left-2 text-lg font-medium">
        {xUserMemory.isProtected ? "Locked" : ""}
      </div>
      <div className="absolute bottom-0 left-2 text-lg font-medium">
        {xUserMemory.memoryTagId !== "" ? "Tagged" : ""}
      </div>
    </UnstyledButton>
  )
}

export const MemoryRow = memo(_MemoryRow)
