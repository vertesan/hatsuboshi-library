import { useDroppable } from "@dnd-kit/core";
import { Switch } from "@mantine/core";
import { useOutletContext } from "@remix-run/react";
import { t } from "i18next";
import { Dispatch, forwardRef, LegacyRef, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { DraggableProduceCard } from "~/components/media/draggableProduceCard";
import { rankEvaluation } from "~/data/evaluation";
import { MemorySlots, XProduceCard } from "~/types";

export const DroppableMemorySlots = forwardRef(({
  memorySlots,
  setMemorySlots,
  offset,
  className,
}: {
  memorySlots: MemorySlots,
  setMemorySlots: Dispatch<SetStateAction<MemorySlots>>,
  offset: number,
  className?: string,
}, ref: LegacyRef<HTMLDivElement>) => {
  const [_, xProduceCards, xEnhancedCards] = useOutletContext<
    [XProduceCard[], { [x: string]: XProduceCard }, { [x: string]: XProduceCard }]
  >()
  const { t } = useTranslation()
  const getRealIndex = (idx: number) => idx + offset
  const cards = memorySlots
    .slice(offset, 6 + offset)
    .map(slot => {
      if (!slot) return null
      if (slot.enhanced) {
        return xEnhancedCards[slot.cardId]
      } else {
        return xProduceCards[slot.cardId]
      }
    })
  const totalEva = cards.reduce((acc, cur) => {
    acc += cur?.evaluation ?? 0
    return acc
  }, 0)

  return (
    <div className={`${className} flex justify-center gap-x-8`} ref={ref}>
      <div className="grid grid-cols-[96px_repeat(6,66px)] justify-center items-center gap-2">
        <div className="text-left self-end">
          {t("Evaluation")}
        </div>
        {cards.map((card, idx) => {
          return (
            <div key={getRealIndex(idx)} className="text-center self-end">
              {card?.evaluation}
            </div>
          )
        })}
        <div>
          {t("Slot")}
        </div>
        {cards.map((card, idx) => {
          return (
            <DroppableMemorySlot
              key={getRealIndex(idx)}
              card={card}
              droppableId={getRealIndex(idx).toString()}
            />
          )
        })}
        <div>
          {t("Enhance")}
        </div>
        {memorySlots.slice(offset, 6 + offset).map((slot, idx) => {
          return (
            <div key={getRealIndex(idx)} className="justify-self-center">
              <Switch
                disabled={slot === null}
                checked={slot?.enhanced}
                onChange={(event) => setMemorySlots(prev => {
                  const realIdx = getRealIndex(idx)
                  const targetSlot = prev[realIdx]
                  if (!targetSlot) return prev
                  targetSlot.enhanced = event.currentTarget.checked
                  const curr = [...prev] as MemorySlots
                  curr[realIdx] = targetSlot
                  return curr
                })}
              />
            </div>
          )
        })}
      </div>
      <div>
        <div className="text-center">
          {totalEva}
        </div>
        {Object.entries(rankEvaluation).map(([k, v]) => {
          const inRange = totalEva >= v.from && totalEva <= v.to
          return (
            <div key={k} className={`text-right ${inRange ? "text-emerald-600" : ""}`}>
              {`${k} [${v.from}, ${v.to}]`}
            </div>
          )
        })}
      </div>
    </div>
  )
})
DroppableMemorySlots.displayName = "DroppableMemorySlots"

function DroppableMemorySlot({
  droppableId,
  card,
}: {
  droppableId: string,
  card: XProduceCard | null,
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: droppableId,
  })
  const hintText =
    ['0', '6'].includes(droppableId)
      ? t("Dedicated")
      : ['1', '7'].includes(droppableId)
        ? t("Support & Common")
        : null
  return (
    <div className={`relative h-[68px] w-[68px] bg-zinc-300 dark:bg-zinc-700 rounded-lg aspect-square transition-[outline] ${isOver ? "outline" : null}`} ref={setNodeRef}>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[62px] whitespace-pre-line text-center text-xs">{hintText}</span>
      {card
        ? <DraggableProduceCard
          card={card}
          draggableId={card.id + `-d${droppableId}`}
          className="relative h-[68px] w-[68px]"
        />
        : null
      }
    </div>
  )
}
