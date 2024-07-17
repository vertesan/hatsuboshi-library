import { Accordion, Alert, Card, RingProgress } from "@mantine/core"
import { IconChevronsDown, IconInfoCircle, IconSettings } from "@tabler/icons-react"
import dayjs from "dayjs"
import { useTranslation } from "react-i18next"
import { contestIcon } from "~/assets/media"
import { ExamSettingTable } from "~/components/media/examSettingTable"
import { XMaster } from "~/types"
import { ExamBattleScoreConfigTable } from "./examBattleScoreConfigTable"
import { PvpStage } from "./pvpStage"

export function PvpRate({
  pvp,
  className,
}: {
  pvp: XMaster['pvp'],
  className?: string,
}) {
  const { t } = useTranslation()

  if (!pvp) {
    return (
      <div>
        <Alert className="" color="red" variant="light" icon={<IconInfoCircle />}>
          {t("Currently no contest is going on")}
        </Alert>
      </div>
    )
  }

  const startTime = +pvp.startTime
  const endTime = +pvp.endTime
  const now = Date.now()
  const progressPercentage = Math.floor((now - startTime) / (endTime - startTime) * 100)

  return (
    <div className={`${className}`}>
      <div className="flex flex-row items-center justify-center gap-2">
        <img src={contestIcon} alt="contest icon" className="object-contain h-[90px] w-[90px] invert dark:invert-0" />
        <div className="flex-1 flex flex-col items-center sm:text-lg">
          <p className="text-center">
            {dayjs(startTime).format("YYYY-MM-DD HH:mm:ss (UTCZ)")}
          </p>
          <p><IconChevronsDown /></p>
          <p className="text-center">
            {dayjs(endTime).format("YYYY-MM-DD HH:mm:ss (UTCZ)")}
          </p>
        </div>
        <RingProgress
          sections={[{ value: progressPercentage, color: 'sky' }]}
          roundCaps
          label={
            <p className="text-center text-lg font-medium">
              {progressPercentage}%
            </p>
          }
        />
      </div>

      <div className="pt-4 grid grid-cols-1 gap-2">
        {pvp.pvpRateConfig.stages.map((stage, idx) => {
          return (
            <Card key={idx} className="w-full" shadow="md" >
              <PvpStage key={idx} stage={stage} cards={pvp.pvpRateConfig.commonProduceCards} className="" />
            </Card>
          )
        })}
      </div>

      <div className="pt-8">
        <ExamBattleScoreConfigTable sortedScoreConfigs={pvp.pvpRateConfig.produceExamBattleScoreConfigs} />
      </div>

      <div className="pt-4">
        <Accordion variant="separated">
          <Accordion.Item value="Contest Configurations">
            <Accordion.Control icon={<IconSettings />} >{t("Contest Configurations")}</Accordion.Control>
            <Accordion.Panel>
              <ExamSettingTable examSetting={pvp.pvpRateConfig.examSetting} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>

    </div >
  )
}
