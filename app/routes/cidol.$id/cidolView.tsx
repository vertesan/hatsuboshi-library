import { Accordion, Alert, Card, Divider, Radio, Title } from "@mantine/core"
import { IconInfoCircle } from "@tabler/icons-react"
import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import NumberCompose from "~/components/general/numberCompose"
import { GimmicksTimeline } from "~/components/media/gimmicksTimeline"
import { LevelLimitUpView } from "~/routes/cidol.$id/levelLimitUpView"
import { NpcScoreTable } from "~/components/media/npcScoreTable"
import { PotentialLevelView } from "~/routes/cidol.$id/potentialLevelView"
import { MasterContext } from "~/contexts/masterContext"
import { CidolCard } from "~/routes/cidol._index/cidolCard"
import { XIdolCard } from "~/types"
import { ProduceStepType } from "~/types/proto/penum"
import { getAssetImgUrl, hajimeImg, limitIcon, potentialIcon } from "~/assets/media"
import { useLocalStorage } from "@mantine/hooks"

export function CidolView({
  idolCard,
}: {
  idolCard: XIdolCard,
}) {
  const { t } = useTranslation()
  const { characters } = useContext(MasterContext)
  const [openedAccs, setOpenedAccs] = useLocalStorage<string[] | undefined>({
    key: "charaviewOpenedAccs",
    defaultValue: ["Special Training Bonus", "Potential Level Bonus"],
    getInitialValueInEffect: false,
  })
  const [levels, setLevels] = useState({ levelLimit: 4, potentialLevel: 0 })
  const [skin, setSkin] = useState(idolCard.assetId)

  const character = characters[idolCard.characterId]

  const auditionViews = idolCard.auditionDifficulty.map((difficulty, idx) => {
    return (
      <div key={idx} className="mb-4 p-4 rounded-lg overflow-hidden">
        {difficulty.stepType === ProduceStepType.AuditionFinal
          ? <>
            {idx === idolCard.auditionDifficulty.length - 1
              ? null
              : <Divider size="xs" className="py-4" />
            }
            <Title order={3} size="h3" className="text-center mb-6">
              {`${t(difficulty.produceId)}`}
            </Title>
          </>
          : null
        }
        <Title order={4} size="h4" className="text-center">
          {`${t(ProduceStepType[difficulty.stepType])}`}
        </Title>
        {difficulty.forceEndScore
          ? <div className="pt-4">
            <Alert variant="light" color="blue" icon={<IconInfoCircle />} >
              <p>{t("Terminates when score reaches ") + difficulty.forceEndScore}</p>
            </Alert>
          </div>
          : null
        }
        {difficulty.examGimmicks
          ? <div className="flex flex-col items-center">
            <p className="pt-4 text-center font-medium text-[--mantine-color-dimmed]">{t("Audition gimmicks timeline")}</p>
            <GimmicksTimeline gimmicks={difficulty.examGimmicks} />
          </div>
          : null
        }
        <div className="pt-8 w-full grid grid-cols-1 justify-items-center">
          <NpcScoreTable npcGroup={difficulty.npcs} limit={3} className="w-full max-w-[560px]" />
        </div>
      </div>
    )
  }).reverse()

  return (
    <div className="p-4 2xl:grid 2xl:grid-cols-2">
      <div className="2xl:fixed 2xl:w-[calc((100vw-264px)/2)]">
        <Title order={2} size="h3" lineClamp={1} className="mb-4">
          {idolCard.name} / {character.lastName + character.firstName}
        </Title>
        <CidolCard disableLink card={idolCard} assetSkinId={skin} limitLevel={levels.levelLimit} potentialLevel={levels.potentialLevel} />
        <div className="mt-4 flex flex-col items-center gap-2">
          <Radio.Group
            value={skin}
            onChange={setSkin}
            name="skin"
            label={t("Choose a skin")}
          >
            <div className="flex flex-row gap-2">
              {idolCard.idolCardSkins.map(idolSkin => {
                return (
                  <Radio.Card
                    key={idolSkin.id}
                    value={idolSkin.assetId}
                    radius="md"
                  >
                    <div className="p-4 flex flex-row flex-nowrap justify-center items-center gap-2">
                      <Radio.Indicator />
                      <div>
                        {idolSkin.name ? idolSkin.name : t("Default")}
                      </div>
                    </div>
                  </Radio.Card>
                )
              })}
            </div>
          </Radio.Group>

          <NumberCompose readOnly width={35} max={6} min={0} step={1} value={levels.levelLimit} className="text-sm" label={t(" Training Level")}
            setValue={(value) => setLevels(prev => ({ ...prev, levelLimit: value }))}
          />
          <NumberCompose readOnly width={35} max={4} min={0} step={1} value={levels.potentialLevel} className="text-sm" label={t("Potential Level")}
            setValue={(value) => setLevels(prev => ({ ...prev, potentialLevel: value }))}
          />
        </div>
      </div>

      <div className="mt-4 2xl:mt-0 2xl:min-h-[70vh] 2xl:col-start-2">
        <Accordion variant="separated" value={openedAccs} onChange={setOpenedAccs} multiple>
          <Accordion.Item value="Special Training Bonus">
            <Accordion.Control>
              <div className="flex items-center gap-1">
                <img
                  src={limitIcon}
                  alt="limit icon"
                  className="object-contain w-6 h-6 aspect-square"
                />
                <p>{t("Special Training Bonus")}</p>
              </div>
            </Accordion.Control>
            <Accordion.Panel>
              <LevelLimitUpView levelLimits={idolCard.levelLimits} />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="Potential Level Bonus">
            <Accordion.Control>
              <div className="flex items-center gap-1">
                <img
                  src={potentialIcon}
                  alt="potential icon"
                  className="object-contain w-6 h-6 aspect-square"
                />
                <p>{t("Potential Level Bonus")}</p>
              </div>
            </Accordion.Control>
            <Accordion.Panel>
              <PotentialLevelView potentials={idolCard.potentials} />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="Scenario: HAJIME">
            <Accordion.Control>
              <div className="flex items-center gap-1">
                <img
                  src={getAssetImgUrl(hajimeImg)}
                  alt="hajime"
                  className="object-contain w-6 h-6 aspect-square"
                />
                <p>{t("Scenario: HAJIME")}</p>
              </div>
            </Accordion.Control>
            <Accordion.Panel>
              {auditionViews}
            </Accordion.Panel>
          </Accordion.Item>

        </Accordion>
      </div>
    </div>
  )
}
