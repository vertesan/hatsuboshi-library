import { ActionIcon, Card, Divider, List, Pagination, Table } from "@mantine/core"
import { useDisclosure, useLocalStorage } from "@mantine/hooks"
import { MetaFunction, useOutletContext } from "@remix-run/react"
import { IconZoom } from "@tabler/icons-react"
import { useContext, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { EffectDescription } from "~/components/media/effectDescription"
import { ProduceCardIcon } from "~/components/media/produceCard"
import { MasterContext } from "~/contexts/masterContext"
import { constructProduceExamEffectType, defaultPCardFilter, filterCustPCards } from "~/data/pCardFilters"
import { getLocalString } from "~/i18n"
import { ProduceCardFilter } from "~/types"
import { XCustProduceCard } from "~/types/data/pcard"
import { ProduceCardCategory } from "~/types/proto/penum"
import { OptionPannel } from "~/routes/pcard/optionPannel"
import { CustomizationRow, CustomizationView } from "~/components/media/cardCustomization"

const ITEMS_PER_PAGE = 24

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-pcard")
  return [
    { title: title },
  ]
}

export default function PCard() {
  const xMaster = useContext(MasterContext)
  const [xCustProduceCards] = useOutletContext<[XCustProduceCard[]]>()
  const [opened, handlers] = useDisclosure(false)
  const [activePage, setPage] = useState(1)
  const [filter, setFilter] = useLocalStorage<ProduceCardFilter>({
    key: "produceCardFilter2",
    defaultValue: defaultPCardFilter,
    getInitialValueInEffect: false,
  })
  const setFilterAndJump: typeof setFilter = (valOrFunc) => {
    setFilter(valOrFunc)
    setPage(1)
  }
  const { t } = useTranslation()

  const examEffectTypes = useMemo(() => {
    return constructProduceExamEffectType(xCustProduceCards, xMaster.produceDescriptionExamEffectType)
  }, [xCustProduceCards, xMaster.produceDescriptionExamEffectType])

  const filteredCards = useMemo(() => {
    return filterCustPCards(filter, xCustProduceCards)
  }, [filter])

  filteredCards.sort((a, b) => {
    if (a.category === ProduceCardCategory.Trouble || b.category === ProduceCardCategory.Trouble) {
      return a.category === ProduceCardCategory.Trouble ? 1 : -1
    }
    return +a.order - +b.order
  })
  const paginatedCards = filteredCards.slice(((activePage - 1) * ITEMS_PER_PAGE), activePage * ITEMS_PER_PAGE)

  return (
    <>
      <div className="p-4 flex flex-row relative">
        <div className="flex-[1_0_100%] sm:flex-[1_0_27rem] xl:pr-[396px]">
          <div className="max-w-[1680px] justify-self-center">
            <Pagination value={activePage} onChange={setPage} size="md"
              total={(filteredCards.length - 1) / ITEMS_PER_PAGE + 1} siblings={1} boundaries={1}
              className={`pb-4 flex flex-row justify-center ${filteredCards.length ? "block" : "hidden"}`}
            />

            {filteredCards.length
              ? null
              : <div className="w-full h-[80vh] flex flex-row justify-center items-center">
                <p className="text-4xl">{t("No results")}</p>
              </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-4 4xl:grid-cols-6 gap-4 justify-items-start">
              {
                paginatedCards.map((pCard, idx) => {
                  return (
                    <Card shadow="md" withBorder key={idx} className="p-2 w-full">
                      <div className="flex flex-col gap-2">
                        <div className="flex-1 flex flex-row gap-4 justify-center sm:justify-start items-center">
                          <ProduceCardIcon
                            card={pCard}
                            character="kllj"
                            className="flex-none relative h-[68px] w-[68px]"
                          />
                          <div className="flex-1 text-sm self-start">
                            <p className="text-lg">{pCard.name}</p>
                            <p>{t("Eva. ") + pCard.evaluation}</p>
                            {pCard.unlockProducerLevel > 0
                              ? <p>{t("P-Lv. ") + pCard.unlockProducerLevel}</p>
                              : null}
                          </div>
                        </div>
                        <div className="flex-1 text-sm self-start">
                          <div className="pt-2"><EffectDescription descriptions={pCard.produceDescriptions} /></div>
                        </div>
                        {
                          filter.displayCustomization
                            ? <CustomizationView pCard={pCard} hideEva />
                            : null
                        }
                      </div>
                    </Card>
                  )
                })
              }
            </div>

            <Pagination value={activePage} onChange={setPage} size="md"
              total={(filteredCards.length - 1) / ITEMS_PER_PAGE + 1} siblings={1} boundaries={1}
              className={`pt-4 flex flex-row justify-center ${filteredCards.length ? "block" : "hidden"}`}
            />
          </div>
        </div>

        <div className={`fixed z-[102] px-2 pb-24 top-2 left-0 right-0 h-screen w-screen overflow-x-hidden overflow-y-auto
          bg-[--mantine-color-body] ${opened ? "" : "translate-x-full"} sm:z-[111]
          xl:top-auto xl:left-auto xl:z-[100] xl:flex-none xl:w-[380px] xl:block xl:translate-x-0
          transition-transform duration-150 ease-in-out`
        }>
          <OptionPannel
            filter={filter}
            setFilter={setFilter}
            setFilterAndJump={setFilterAndJump}
            options={{
              characters: xMaster.characters,
              examEffectTypes,
            }}
          />
        </div>
      </div>

      <ActionIcon
        variant="light"
        className="fixed z-[103] sm:z-[112] right-4 bottom-12 rounded-full h-12 w-12 xl:hidden"
        onClick={() => { handlers.toggle() }}
      >
        <IconZoom className="w-[65%] h-[65%]" stroke={1.5} />
      </ActionIcon>
    </>
  )
}
