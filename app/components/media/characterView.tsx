import { useContext } from "react"
import { getCharaFullImgUrl, getCharaSignImgUrl } from "~/assets/media"
import { MasterContext } from "~/contexts/masterContext"
import { CharacterInfo } from "./characterInfo"
import { AchievementView } from "./achievements"
import { charaColors } from "~/data/characterColors";
import { ColorSwatch } from "@mantine/core"

export function CharacterView({
  charaId,
}: {
  charaId: string,
}) {
  const xMaster = useContext(MasterContext)
  const chara = xMaster.characters[charaId]
  const detail = xMaster.characterDetails[charaId]
  const colors = charaColors[chara.id as keyof typeof charaColors]
  const name = chara.lastName + " " + chara.firstName
  const alphabetName = chara.alphabetFirstName + " " + chara.alphabetLastName
  const achievements = Object.entries(xMaster.achievements)
    .filter(([_, v]) => v.characterId === charaId)
    .map(x => x[1])
  return (
    <div className="p-4 xl:grid xl:grid-cols-[2fr_1fr]">
      <div>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
          <div className="flex-none w-full sm:w-[380px] relative aspect-[9/16]">
            <img
              src={getCharaFullImgUrl(chara.id)}
              alt={chara.id}
              className="object-cover h-full"
            />
            <div className="absolute top-0 inset-x-0 text-center">
              <p>{alphabetName}</p>
              <p className="text-2xl">{name}</p>
            </div>
          </div>

          <div className="flex-none">
            <div className="aspect-square h-[256px] w-[256px]">
              <img
                src={getCharaSignImgUrl(chara.id)}
                alt={chara.id}
                className="aspect-square h-[256px] w-[256px] invert dark:invert-0"
              />
            </div>

            <div className="pt-4 flex flex-row gap-4">
              <ColorSwatch color={`#${colors.mainColor}`} />
              <p>#{colors.mainColor}</p>
            </div>
            <div className="pt-4 flex flex-row gap-4">
              <ColorSwatch color={`#${colors.gradientColor1}`} />
              <p>#{colors.gradientColor1}</p>
            </div>
            <div className="pt-4 flex flex-row gap-4">
              <ColorSwatch color={`#${colors.gradientColor2}`} />
              <p>#{colors.gradientColor2}</p>
            </div>
            <div className="pt-4 flex flex-row gap-4">
              <ColorSwatch color={`#${colors.textColor}`} />
              <p>#{colors.textColor}</p>
            </div>
          </div>
        </div>

        <div>
          <CharacterInfo chara={chara} charaDetails={detail} />
        </div>
      </div>

      <div>
        <AchievementView achievements={achievements} />
      </div>
    </div>
  )
}
