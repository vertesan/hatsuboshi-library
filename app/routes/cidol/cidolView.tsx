import { XIdolCard } from "~/types"
import { CidolCard } from "~/routes/cidol/cidolCard"
import { Alert, Card, Radio, Table, Timeline } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { ProduceStepType } from "~/types/proto/penum"
import { EffectDescription } from "~/components/media/effectDescription"
import { IconInfoCircle } from "@tabler/icons-react"
import { LevelLimitUpView } from "~/components/media/levelLimitUpView"
import { PotentialLevelView } from "~/components/media/potentialLevelView"
import { useState } from "react"
import NumberCompose from "~/components/general/numberCompose"
import { GimmicksTimeline } from "~/components/media/gimmicksTimeline"
import { NpcScoreTable } from "~/components/media/npcScoreTable"

export function CidolView({
  idolCard,
}: {
  idolCard: XIdolCard,
}) {
  const { t } = useTranslation()
  const [levels, setLevels] = useState({ levelLimit: 4, potentialLevel: 0 })
  const [skin, setSkin] = useState(idolCard.assetId)

  const npcDatas = idolCard.auditionDifficulty.map(difficulty => {
    return {
      caption: `${t("NPC score ranking")}`,
      head: [t("Rank"), t("Max Score"), t("Min Score")],
      body: difficulty.npcs.map(npc => {
        return [
          npc.number,
          npc.scoreMax,
          npc.scoreMin,
        ]
      }).slice(0, 3)
    }
  })

  const auditionViews = idolCard.auditionDifficulty.map((difficulty, idx) => {
    return (
      <div key={idx} className="mb-4 p-4 rounded-lg shadow-md bg-white dark:bg-[--mantine-color-dark-6] overflow-hidden ">
        <p className="text-center text-xl font-medium">
          {`${t(difficulty.produceId)} - ${t(ProduceStepType[difficulty.stepType])}`}
        </p>
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
        <div className="pt-8">
          <NpcScoreTable npcGroup={difficulty.npcs} limit={3} />
        </div>
      </div>
    )
  }).reverse()

  return (
    <div className="p-4 flex flex-row justify-center">
      <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-[1280px]">

        <div className="w-full">
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
          <Card className="mt-4" shadow="md">
            <p className="pb-2 text-center font-medium">{t("Special Training Bonus")}</p>
            {idolCard.levelLimits.map(levelLimit => {
              return (
                <LevelLimitUpView key={levelLimit.rank} levelLimit={levelLimit} />
              )
            })}
          </Card>
          <Card className="mt-4" shadow="md">
            <p className="pb-2 text-center font-medium">{t("Potential Level Bonus")}</p>
            {idolCard.potentials.map(potential => {
              return (
                <PotentialLevelView key={potential.rank} potential={potential} />
              )
            })}
          </Card>
        </div>

        <div className="w-full">
          {auditionViews}
        </div>

      </div>
    </div>
  )
}
