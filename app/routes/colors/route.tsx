import { CopyButton, Title } from "@mantine/core"
import { IconChecks, IconCopy } from "@tabler/icons-react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { getSDFaceImgUrl } from "~/assets/media"
import { MasterContext } from "~/contexts/masterContext"
import { charaColors } from "~/data/characterColors"
import { Character } from "~/types/proto/pmaster"

export default function ColorsLayout() {
  const xMaster = useContext(MasterContext)
  const { t } = useTranslation()
  const colorSquareElements = Object.entries(xMaster.characters)
    .filter(x => x[1].isPlayable || x[1].id === "jsna" || x[1].id === "hmsz")
    .map(([k, character]) => {
      return <ColorSquare key={k} character={character} />
    })
  return (
    <div className="p-4">
      <Title order={2} className="pb-4">{t("Colors")}</Title>
      <p className="pb-4">{t("Sources from in-game data, arranged alphabetically.")}</p>
      <div className="max-w-[540px] grid grid-cols-3 gap-y-2">
        {colorSquareElements}
      </div>
    </div>
  )
}

function ColorSquare({ character }: { character: Character }) {
  const colors = charaColors[character.id as keyof typeof charaColors]
  const colorString = `${character.id}-main`
  return (
    <div className="flex flex-col justify-center items-center">
      <div className={`group border-neutral-200 border-[min(8px,2vw)] rounded-xl bg-${colorString} aspect-square h-[min(144px,26vw)] w-[min(144px,26vw)]`} >
        <div className="w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-[400ms]">
          <img alt='icon' src={getSDFaceImgUrl(character.id)} className='h-12 w-12' />
          <div className="flex items-center rounded-sm text-white bg-neutral-600">
            <CopyButton value={`#${colors.mainColor}`}>
              {({ copied, copy }) => (
                copied
                  ? <IconChecks className="w-[70%] h-[70%] text-green-500" stroke={1.5} />
                  : <IconCopy className="w-[70%] h-[70%] text-white cursor-pointer" stroke={1.5} onClick={copy} />
              )}
            </CopyButton>
            <span>{`#${colors.mainColor}`}</span>
          </div>
        </div>
      </div>
      <p className="text-md">{character.lastName + " " + character.firstName}</p>
      <p className="text-xs">{character.alphabetLastName + " " + character.alphabetFirstName}</p>
    </div>
  )
}
