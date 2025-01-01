import { Accordion, Alert, NumberFormatter, Radio, Title } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { IconInfoCircle } from "@tabler/icons-react"
import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import { getNIAAuditionImgUrl, limitIcon, potentialIcon } from "~/assets/media"
import NumberCompose from "~/components/general/numberCompose"
import { AttributeIcon } from "~/components/media/attributeIcon"
import { GimmicksTimeline } from "~/components/media/gimmicksTimeline"
import { NpcScoreTable } from "~/components/media/npcScoreTable"
import { MasterContext } from "~/contexts/masterContext"
import { LevelLimitUpView } from "~/routes/cidol.$id/levelLimitUpView"
import { PotentialLevelView } from "~/routes/cidol.$id/potentialLevelView"
import { produceScenarioStrings } from "~/routes/cidol.$id/produceScenarios"
import { CidolCard } from "~/routes/cidol._index/cidolCard"
import { XIdolCard } from "~/types"
import { ProduceParameterType, ProduceStepAuditionType, ProduceStepType, ProduceType } from "~/types/proto/penum"

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

  const auditionViews = Object.entries(idolCard.auditionScenarios)
    .sort((a, b) => +b[0] - +a[0])
    .map(([produceType, steps]) => {
      const produceScenario = produceScenarioStrings[+produceType]
      const stepElements = Object.entries(steps)
        .sort((a, b) => +b[0] - +a[0])
        .map(([stepType, difficulties]) => {
          difficulties.sort((a, b) => {
            if (a.auditionType !== ProduceStepAuditionType.Unknown) {
              return b.auditionType - a.auditionType
            }
            return b.produceId < a.produceId ? -1 : 1
          })
          const difficultyElements = difficulties.map(difficulty => {
            return (
              <div key={difficulty.baseScore} className="mb-4 p-4 rounded-lg overflow-hidden">
                {+produceType === ProduceType.NextIdolAudition
                  ? <><Title order={4} size="h4" className="text-center leading-8">
                    {`${t(ProduceStepAuditionType[difficulty.auditionType])}`}
                  </Title>
                    <div className="flex justify-center">
                      <div className="aspect-[6.046875] w-[242px]">
                        <img
                          src={getNIAAuditionImgUrl(difficulty.auditionType)}
                          alt="audition type"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-center text-lg leading-10">
                      {t("Required votes: ")}
                      <NumberFormatter value={difficulty.voteCount} thousandSeparator />
                    </p>
                  </>
                  : <Title order={4} size="h3" className="text-center">
                    {`${t(difficulty.produceId)}`}
                  </Title>
                }
                <p className="text-center">
                  {
                    t("Criteria: ")
                  }
                  <span className="px-2 sm:px-2 text-center">
                    <AttributeIcon attribute={ProduceParameterType.Vocal}
                      className="inline-block align-text-bottom h-4 w-4 mr-1"
                    />
                    {difficulty.examBattleConfig.vocal}
                  </span>
                  <span className="px-2 sm:px-2 text-center">
                    <AttributeIcon attribute={ProduceParameterType.Dance}
                      className="inline-block align-text-bottom h-4 w-4 mr-1"
                    />
                    {difficulty.examBattleConfig.dance}
                  </span>
                  <span className="px-2 sm:px-2 text-center">
                    <AttributeIcon attribute={ProduceParameterType.Visual}
                      className="inline-block align-text-bottom h-4 w-4 mr-1"
                    />
                    {difficulty.examBattleConfig.visual}
                  </span>
                </p>
                {difficulty.forceEndScore
                  ? <div className="pt-4">
                    <Alert variant="light" color="blue" icon={<IconInfoCircle />} className="max-w-[560px] mx-auto" >
                      <p>{t("Terminates when score reaches ") + difficulty.forceEndScore}</p>
                    </Alert>
                  </div>
                  : null
                }
                {difficulty.examGimmicks
                  ? <div className="flex flex-col items-center">
                    <p className="pt-4 text-center font-medium text-[--mantine-color-dimmed]">{t("Audition gimmicks timeline")}</p>
                    <p className="pt-2 text-center font-medium">{t("Turns: ")}{difficulty.examBattleConfig.turn}</p>
                    <GimmicksTimeline gimmicks={difficulty.examGimmicks} />
                  </div>
                  : null
                }
                <div className="pt-8 w-full grid grid-cols-1 justify-items-center">
                  <NpcScoreTable npcGroup={difficulty.npcs} limit={3} className="w-full max-w-[560px]" />
                </div>
              </div>
            )
          })
          return (
            <div key={stepType}>
              <Title order={3} size="h3" className="text-center my-6">
                {t(ProduceStepType[+stepType])}
              </Title>
              {difficultyElements}
            </div>
          )
        })
      return (
        <Accordion.Item value={produceScenario.title} key={produceType}>
          <Accordion.Control>
            <div className="flex items-center gap-1">
              <img
                src={produceScenario.imgUrl}
                alt="produce scenario"
                className="object-contain w-6 h-6 aspect-square"
              />
              <p>{t(produceScenario.title)}</p>
            </div>
          </Accordion.Control>
          <Accordion.Panel>
            {stepElements}
          </Accordion.Panel>
        </Accordion.Item>
      )
    })

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
          {auditionViews}
        </Accordion>
      </div>
    </div>
  )
}
