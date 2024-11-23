import { ColorSwatch, Tabs } from "@mantine/core"
import { Link } from "@remix-run/react"
import { IconRubberStamp } from "@tabler/icons-react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { getAssetImgUrl, getCharaFullImgUrl, getCharaSignImgUrl, routeCidolIcon, routeCsprtIcon } from "~/assets/media"
import { NavIcon } from "~/components/general/navbar"
import { CharacterInfo } from "~/components/media/characterInfo"
import { MasterContext } from "~/contexts/masterContext"
import { charaColors } from "~/data/characterColors"
import { CidolImage } from "../cidol/cidolImage"
import { CsprtImage } from "../csprt/csprtImage"
import { useLocalStorage } from "@mantine/hooks"

export function CharacterView({
  charaId,
}: {
  charaId: string,
}) {
  const xMaster = useContext(MasterContext)
  const { t } = useTranslation()
  const [openedTab, setOpenedTab] = useLocalStorage<string | null>({
    key: "characterOpenedTab",
    defaultValue: "Stamps",
    getInitialValueInEffect: false,
  })
  const chara = xMaster.characters[charaId]
  const detail = xMaster.characterDetails[charaId]
  const colors = charaColors[chara.id as keyof typeof charaColors]
  const name = chara.lastName + " " + chara.firstName
  const alphabetName = chara.alphabetFirstName + " " + chara.alphabetLastName

  // const achievements = Object.entries(xMaster.achievements)
  //   .filter(([_, v]) => v.characterId === charaId)
  //   .map(x => x[1])

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center">
        <div className="h-[680px] max-h-[calc(100vw/9*16)] relative aspect-[9/16]">
          <img
            src={getCharaFullImgUrl(chara.id)}
            alt={chara.id}
            className="object-cover h-full"
          />
          <img
            src={getCharaSignImgUrl(chara.id)}
            alt={chara.id}
            className="absolute bottom-2 left-2 aspect-square h-[20%] invert dark:invert-0"
          />
          <div className="absolute top-0 inset-x-0 text-center">
            <p>{alphabetName}</p>
            <p className="text-xl lg:text-2xl">{name}</p>
          </div>
          <div className="absolute bottom-[150px] left-4 flex flex-row gap-4">
            <ColorSwatch color={`#${colors.mainColor}`} />
            <p>#{colors.mainColor}</p>
          </div>
        </div>

        <div className="w-full">
          <CharacterInfo chara={chara} charaDetails={detail} />
        </div>
      </div>


      <Tabs defaultValue={openedTab} onChange={setOpenedTab} keepMounted={false}>
        <Tabs.List>
          <Tabs.Tab value="Stamps" leftSection={<IconRubberStamp width={16} height={16} />} >
            {t("Stamps")}
          </Tabs.Tab>
          <Tabs.Tab value="P-Idols" leftSection={<NavIcon src={routeCidolIcon} />} >
            {t("P-Idols")}
          </Tabs.Tab>
          <Tabs.Tab value="S-Cards" leftSection={<NavIcon src={routeCsprtIcon} />} >
            {t("S-Cards")}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel className="pt-2" value="Stamps">
          <div className="grid grid-cols-[repeat(auto-fit,128px)] gap-2">
            {
              xMaster.guildReactions
                .filter(x => RegExp(`${charaId}-\\d+$`).test(x.assetId))
                .map(guildReaction => {
                  return (
                    <div key={guildReaction.id} className="aspect-square w-[128px] h-[128px]">
                      <img alt="stamp" src={getAssetImgUrl(guildReaction.assetId)} className="w-[128px] h-[128px]" />
                    </div>
                  )
                })
            }
          </div>
        </Tabs.Panel>

        <Tabs.Panel className="pt-2" value="P-Idols">
          <div className="grid grid-cols-[repeat(auto-fit,180px)] gap-2">
            {
              chara.idolCardIds
                .slice()
                .reverse()
                .map(cardId => {
                  return (
                    <Link key={cardId} to={`/cidol/${cardId}`}>
                      <div className="aspect-[9/16] w-[180px] rounded-md overflow-hidden">
                        <CidolImage card={undefined} assetId={cardId.replace("i_card", "cidol")} />
                      </div>
                    </Link>
                  )
                })
            }
          </div>
        </Tabs.Panel>

        <Tabs.Panel className="pt-2" value="S-Cards">
          <div className="grid grid-cols-[repeat(auto-fit,410px)] gap-2">
            {
              chara.supportCardIds
                .slice()
                .reverse()
                .map(cardId => {
                  return (
                    <div key={cardId} className="aspect-[16/9] w-[calc(100vw-32px)] sm:w-[410px] rounded-md overflow-hidden">
                      <CsprtImage card={undefined} assetId={cardId.replace("s_card", "csprt")} />
                    </div>
                  )
                })
            }
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}
