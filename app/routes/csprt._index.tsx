import { ActionIcon, Pagination } from "@mantine/core"
import { useDisclosure, useLocalStorage } from "@mantine/hooks"
import { MetaFunction, useOutletContext } from "@remix-run/react"
import { IconZoom } from "@tabler/icons-react"
import { useMemo, useState } from "react"
import {
  constructThirdEventEffects,
  defaultSupportCardFilter,
  filterSupportCards
} from "~/data/supportCardFilters"
import { getLocalString } from "~/i18n"
import { CsprtCard } from "~/routes/csprt/csprtCard"
import { SupportCardFilter, XSupportCard } from "~/types"
import { XMaster } from "~/types/data/master"
import { OptionPannel } from "./csprt/optionPannel"
import { useTranslation } from "react-i18next"

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-csprt")
  return [
    { title: title },
  ]
}

export default function Csprt() {
  const [xSupportCards, xMaster] = useOutletContext<[XSupportCard[], XMaster]>()
  const { t } = useTranslation()
  const [opened, handlers] = useDisclosure(false)
  const [activePage, setPage] = useState(1)
  const [filter, setFilter] = useLocalStorage<SupportCardFilter>({
    key: "supportCardFilter",
    defaultValue: defaultSupportCardFilter,
    getInitialValueInEffect: false,
  })
  const setFilterAndJump: typeof setFilter = (valOrFunc) => {
    setFilter(valOrFunc)
    setPage(1)
  }

  const eventTypes = useMemo(() => {
    return constructThirdEventEffects(xSupportCards)
  }, [xSupportCards])

  const [filteredCards, matchedSkills] = filterSupportCards(filter, xSupportCards)
  filteredCards.sort((a, b) => +a.order - +b.order)

  const paginatedCards = filteredCards.slice(((activePage - 1) * 10), activePage * 10)

  return (
    <>
      <div className="p-4 flex relative">
        <div className="flex-[1_0_100%] sm:flex-[1_0_27rem] xl:pr-[476px]">
          <Pagination value={activePage} onChange={setPage}
            total={(filteredCards.length - 1) / 10 + 1} siblings={1}
            className={`pb-4 flex flex-row justify-center ${filteredCards.length ? "block" : "hidden"}`}
          />
          {filteredCards.length
            ? null
            : <div className="w-full h-[80vh] flex flex-row justify-center items-center">
              <p className="text-4xl">{t("No results")}</p>
            </div>
          }
          <div className="grid grid-cols-1 3xl:grid-cols-2 4xl:grid-cols-3 gap-y-4 justify-items-center">
            {
              paginatedCards.map((card, idx) => {
                return (
                  <CsprtCard
                    key={card.id}
                    card={card}
                    disableLink
                    showEnhanced={filter.showEnhanced}
                    matchedSkills={matchedSkills[card.id]}
                    level={filter.level}
                  />
                )
              })
            }
          </div>
          <Pagination value={activePage} onChange={setPage}
            total={(filteredCards.length - 1) / 10 + 1} siblings={1}
            className={`pt-4 flex flex-row justify-center ${filteredCards.length ? "block" : "hidden"}`}
          />
        </div>
        <div
          className={`fixed z-[102] px-2 pb-24 top-2 left-0 right-0 h-screen w-screen overflow-x-hidden overflow-y-auto
            bg-[--mantine-color-body] ${opened ? "" : "translate-x-full"} sm:z-[111]
            xl:top-auto xl:left-auto xl:z-[100] xl:flex-none xl:w-[460px] xl:block xl:translate-x-0
            transition-transform duration-150 ease-in-out`
          }
        >
          <OptionPannel
            filter={filter}
            setFilterAndJump={setFilterAndJump}
            setFilter={setFilter}
            options={{
              thirdEventEffectTypes: eventTypes,
              characters: xMaster.characters
            }}
          />
        </div>
      </div>
      <ActionIcon
        variant="light"
        className="fixed z-[103] sm:z-[112] right-4 bottom-12 rounded-full h-9 w-9 xl:hidden"
        onClick={() => { handlers.toggle() }}
      >
        <IconZoom className="w-[65%] h-[65%]" stroke={1.5} />
      </ActionIcon>
    </>
  )
}
