import { MetaFunction } from "@remix-run/react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { CharacterItem } from "~/components/media/characterItem"
import { MasterContext } from "~/contexts/masterContext"
import { getLocalString } from "~/i18n"
import { useHorizontalScroll } from "~/utils/hooks"

export const meta: MetaFunction = () => {
  const title = getLocalString("meta-character")
  return [
    { title: title },
  ]
}

export default function Characters() {
  const xMaster = useContext(MasterContext)
  const { t } = useTranslation()
  if (typeof document !== 'undefined') {
    document.title = t("meta-characters")
  }
  const scrollRef = useHorizontalScroll<HTMLDivElement>()

  return (
    <div
      className="h-[calc(100vh-220px)] p-4 flex flex-row overflow-x-auto no-scrollbar"
      ref={scrollRef}
    >
      {
        Object.entries(xMaster.characters)
          .filter(([_, chara]) => chara.isPlayable)
          .sort((a, b) => a[1].order - b[1].order)
          .map(([id, chara]) => {
            return (
              <CharacterItem key={id} chara={chara} />
            )
          })
      }
    </div>
  )
}
