import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { Button, Divider, Popover } from "@mantine/core"
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
import { MemorySlots, ProduceCardFilter, XCustProduceCard } from "~/types"
import { ProduceCardCategory, ProduceCardRarity } from "~/types/proto/penum"

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
    [XCustProduceCard[], { [x: string]: XCustProduceCard }, { [x: string]: XCustProduceCard }]
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
    key: "evaluationSlots_v2",
    defaultValue: [
      null, null, null, null, null, null,
      null, null, null, null, null, null,
    ],
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
        if (
          cur.category !== ProduceCardCategory.Trouble &&
          cur.rarity !== ProduceCardRarity.N
        ) {
          acc[cur.evaluation].push(cur)
        }
        return acc
      }, {} as { [x: number]: XCustProduceCard[] })
  }, [filter])

  const onDrop = (event: DragEndEvent) => {
    const { over, active } = event
    const regex = /-d(\d+)$/
    const testResult = regex.exec(active.id.toString())
    const isFromBox = testResult === null
    let realCardId = active.id.toString()
    if (!isFromBox) {
      realCardId = realCardId.replace(regex, "")
    }

    if (!over) {
      if (!isFromBox) {
        // remove from slot
        setMemorySlots(prev => {
          const curr = [...prev] as MemorySlots
          // const idx = curr.findIndex(slot => slot?.cardId === realCardId)
          const idx = +testResult[1]
          curr[idx] = null
          return curr
        })
      }
      return
    }

    const isToDedicatedSlot = over.id === '0' || over.id === '6'
    const isToSupportSlot = over.id === '1' || over.id === '7'
    const isFromSupportSlot = isFromBox ? false : testResult[1] === '1' || testResult[1] === '7' ? true : false
    const offset = +over.id < 6 ? 0 : 6
    const card = xProduceCards[realCardId]
    if (!card) return
    if (card.originIdolCardId && !isToDedicatedSlot) {
      // trying to set dedicated card into non-dedicated slot
      setHintOpened('dedicate2free')
      return
    }
    if (card.originSupportCardId && !isToSupportSlot) {
      // trying to set support card into non-support card slot
      setHintOpened('support2free')
      return
    }
    if (!card.originIdolCardId && !card.originSupportCardId && isToDedicatedSlot) {
      // trying to set normal card into dedicated slot
      setHintOpened('free2dedicate')
      return
    }

    const hasDuplication = (cardId?: string, _offset?: number) => {
      if (cardId === undefined) return false
      if (_offset === undefined) _offset = offset
      const slots = memorySlots.slice(_offset, 6 + _offset)
      return slots.some(slot => slot?.cardId === cardId)
    }
    const isSameGroup = (i1: number, i2: number) => {
      return i1 < 6 && i2 < 6 || i1 >= 6 && i2 >= 6
        ? true
        : false
    }

    if (!isFromBox) {
      const activePosition = +testResult[1]
      const overPosition = +over.id
      if (
        !isSameGroup(activePosition, overPosition) &&
        (
          hasDuplication(memorySlots[activePosition]?.cardId, overPosition < 6 ? 0 : 6) ||
          hasDuplication(memorySlots[overPosition]?.cardId, activePosition < 6 ? 0 : 6)
        ) &&
        memorySlots[activePosition]?.cardId !== memorySlots[overPosition]?.cardId
      ) {
        // has duplicated card
        setHintOpened('duplicated')
        return
      } else {
        // switch position
        setMemorySlots(prev => {
          const curr = [...prev] as MemorySlots
          const fromSlot = prev[activePosition]
          const toSlot = prev[overPosition]
          if (
            toSlot &&
            isToSupportSlot !== isFromSupportSlot &&
            (xProduceCards[fromSlot!.cardId].originSupportCardId !== "") !== (xProduceCards[toSlot!.cardId].originSupportCardId !== "")
          ) {
            setHintOpened('support2free')
            return prev
          }
          curr[activePosition] = toSlot
          curr[overPosition] = fromSlot
          return curr
        })
      }
    } else {
      if (hasDuplication(realCardId)) {
        // has duplicated card
        setHintOpened('duplicated')
        return
      }
      setMemorySlots(prev => {
        const curr = [...prev] as MemorySlots
        curr[+over.id] = {
          cardId: realCardId,
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
          <div className="flex-[1_0_27rem] flex flex-col">
            <div className="pb-4 w-max self-center">
              <DroppableMemorySlots
                memorySlots={memorySlots}
                setMemorySlots={setMemorySlots}
                offset={0}
              />
            </div>
            <Popover opened={opened}>
              <Popover.Target>
                <div className="w-max self-center">
                  <Divider />
                  <DroppableMemorySlots
                    className="pt-2"
                    memorySlots={memorySlots}
                    setMemorySlots={setMemorySlots}
                    offset={6}
                  />
                </div>
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
            <div className="grid grid-cols-[minmax(0,2fr),minmax(0,3fr)]">
              <div>
                {
                  Object.entries(filteredCards)
                    .filter(([eva, _]) => [1, 32].includes(+eva))
                    .map(([eva, cards], idx) => {
                      return (
                        <div key={idx}>
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
                        </div>
                      )
                    })
                }
              </div>
              <div>
                {
                  Object.entries(filteredCards)
                    .filter(([eva, _]) => ![1, 32].includes(+eva))
                    .map(([eva, cards], idx) => {
                      if (!evaluationMap[+eva]) return null
                      return (
                        <div key={idx}>
                          <p className="pt-4">{t("Eva. ") + evaluationMap[+eva]?.text}</p>
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
                        </div>
                      )
                    })
                }
              </div>
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
