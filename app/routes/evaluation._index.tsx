import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { Button, Popover } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { MetaFunction, useOutletContext } from "@remix-run/react"
import { useContext, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { DraggableProduceCard } from "~/components/media/draggableProduceCard"
import { MasterContext } from "~/contexts/masterContext"
import { evaluationMap } from "~/data/evaluation"
import { defaultEvaluationFilter, filterEvaCards } from "~/data/evaluationFilter"
import { constructProduceExamEffectType } from "~/data/pCardFilters"
import { getLocalString } from "~/i18n"
import { DroppableMemorySlots } from "~/routes/evaluation/memorySlots"
import { OptionPannel } from "~/routes/evaluation/optionPannel"
import { MemorySlots, ProduceCardFilter, XProduceCard } from "~/types"

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-evaluation")
  return [
    { title: title },
  ]
}

export default function Evaluation() {
  const xMaster = useContext(MasterContext)
  const { t } = useTranslation()
  const [level0Cards, xProduceCards, xEnhancedCards] = useOutletContext<
    [XProduceCard[], { [x: string]: XProduceCard }, { [x: string]: XProduceCard }]
  >()
  const [opened, setOpened] = useState(false)
  const [popupHint, setPopupHint] = useState("")
  const setHintOpened = (
    category: 'dedicate2free' | 'support2free' | 'free2dedicate' | 'duplicated'
  ) => {
    setOpened(true)
    switch (category) {
      case 'dedicate2free': setPopupHint(t("Cannot set P-Idol dedicated card into non-dedicated cells")); break;
      case 'support2free': setPopupHint(t("Cannot set S-Card into non S-Card cells")); break;
      case 'free2dedicate': setPopupHint(t("Cannot set common card into dedicated card cell")); break;
      case 'duplicated': setPopupHint(t("Cannot set duplicated cards")); break;
    }
    setTimeout(() => {
      setOpened(false)
    }, 3000)
  }
  const [hideEvaMobileHint, setEvaMobileHint] = useLocalStorage<boolean>({
    key: "evaMobileHint",
    defaultValue: false,
    getInitialValueInEffect: false,
  })
  const [filter, setFilter] = useLocalStorage<ProduceCardFilter>({
    key: "evaluationFilter",
    defaultValue: defaultEvaluationFilter,
    getInitialValueInEffect: false,
  })
  const [memorySlots, setMemorySlots] = useLocalStorage<MemorySlots>({
    key: "evaluationSlots",
    defaultValue: [null, null, null, null, null, null],
    getInitialValueInEffect: false,
  })

  const examEffectTypes = useMemo(() => {
    return constructProduceExamEffectType(level0Cards, xMaster.produceDescriptionExamEffectType)
  }, [level0Cards, xMaster.produceDescriptionExamEffectType])

  const filteredCards = useMemo(() => {
    return filterEvaCards(filter, level0Cards)
      .reduce((acc, cur) => {
        if (acc[cur.evaluation] === undefined) {
          acc[cur.evaluation] = []
        }
        acc[cur.evaluation].push(cur)
        return acc
      }, {} as { [x: number]: XProduceCard[] })
  }, [filter])

  const onDrop = (event: DragEndEvent) => {
    const { over, active } = event
    const regex = /-d\d$/
    const realCardId = active.id.toString().replace(regex, "")

    const isFromBox = regex.exec(active.id.toString()) === null
    if (!over) {
      if (!isFromBox) {
        // remove from slot
        setMemorySlots(prev => {
          const curr = [...prev] as MemorySlots
          const idx = curr.findIndex(slot => slot?.cardId === realCardId)
          curr[idx] = null
          return curr
        })
      }
      return
    }

    const isDedicatedSlot = over.id === '0'
    const isSupportSlot = over.id === '1'
    const card = xProduceCards[realCardId]
    if (!card) return
    if (card.originIdolCardId && !isDedicatedSlot) {
      // trying to set dedicated card into non-dedicated slot
      setHintOpened('dedicate2free')
      return
    }
    if (card.originSupportCardId && !isSupportSlot) {
      // trying to set support card into non-support card slot
      setHintOpened('support2free')
      return
    }
    if (!card.originIdolCardId && !card.originSupportCardId && isDedicatedSlot) {
      // trying to set normal card into dedicated slot
      setHintOpened('free2dedicate')
      return
    }

    if (memorySlots.some(slot => slot?.cardId === realCardId)) {
      // has duplicated card
      if (isFromBox) {
        setHintOpened('duplicated')
        return
      }
      // switch position
      setMemorySlots(prev => {
        const curr = [...prev] as MemorySlots
        const fromIdx = prev.findIndex(slot => slot?.cardId === realCardId)
        const fromSlot = prev[fromIdx]
        const toSlot = prev[+over.id]
        if (isSupportSlot && toSlot) {
          // support card cannot be swithed
          const toCard = xProduceCards[toSlot.cardId]
          if (toCard.originSupportCardId) {
            setHintOpened('support2free')
            return prev
          }
        }
        curr[fromIdx] = toSlot
        curr[+over.id] = fromSlot
        return curr
      })
    } else {
      setMemorySlots(prev => {
        const curr = [...prev] as MemorySlots
        curr[+over.id] = {
          cardId: isFromBox ? active.id.toString() : realCardId,
          enhanced: false,
        }
        return curr
      })
    }
  }

  return (
    <>
      <div className={`md:hidden ${hideEvaMobileHint ? "hidden" : ""} fixed w-full h-full z-[99999] backdrop-blur-md dark:backdrop-brightness-50`}>
        <div className="fixed w-screen h-screen flex flex-col justify-center items-center gap-4">
          <div>
            {t("This page is not adapted for mobile devices")}
          </div>
          <Button
            onClick={() => { setEvaMobileHint(true) }}
          >
            {t("I don't care")}
          </Button>
        </div>
      </div>
      <div className="p-4 flex flex-row relative min-w-[1080px]">
        <DndContext
          onDragEnd={onDrop}
        >
          <div className="flex-[1_0_27rem]">
            <Popover opened={opened}>
              <Popover.Target>
                <DroppableMemorySlots
                  memorySlots={memorySlots}
                  setMemorySlots={setMemorySlots}
                />
              </Popover.Target>
              <Popover.Dropdown>
                {popupHint}
              </Popover.Dropdown>
            </Popover>

            {Object.keys(filteredCards).length
              ? null
              : <div className="w-full h-[80vh] flex flex-row justify-center items-center">
                <p className="text-4xl">{t("No results")}</p>
              </div>
            }
            <div>
              {
                Object.entries(filteredCards).map(([eva, cards], idx) => {
                  return (
                    <>
                      <p className="pt-4">{t("Eva. ") + evaluationMap[+eva].text}</p>
                      <div key={idx} className="grid grid-cols-[repeat(auto-fit,68px)]">
                        {cards.map((card, idx) => {
                          return (
                            <DraggableProduceCard
                              key={idx}
                              card={card}
                              character="kllj"
                              className="flex-none relative h-[68px] w-[68px]"
                            />
                          )
                        })}
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </DndContext>

        <div className={`px-2 pb-24 bg-[--mantine-color-body] flex-none w-[340px] block`}>
          <OptionPannel
            filter={filter}
            setFilter={setFilter}
            options={{
              characters: xMaster.characters,
              examEffectTypes,
            }}
          />
        </div>
      </div>
    </>
  )
}
