import { Table } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { calcBattleScoreConfig } from "~/data/calculation";
import { ProduceExamBattleScoreConfig } from "~/types/proto/pmaster";
import tableClasses from '~/theme/Table.module.css';

export function ExamBattleScoreConfigTable({
  sortedScoreConfigs,
  className,
}: {
  sortedScoreConfigs: ProduceExamBattleScoreConfig[],
  className?: string,
}) {
  const { t } = useTranslation()

  const scoreConfigData = {
    caption: t("Attribute Score Bonus"),
    head: [t("Parameter Range"), t("Vocal Multiplier"), t("Dance Multiplier"), t("Visual Multiplier")],
    body: calcBattleScoreConfig(sortedScoreConfigs)?.map(config => {
      return [
        `${config.from} ~ ${config.to}`,
        config.vocal,
        config.dance,
        config.visual,
      ]
    })
  }

  return (
    <div className={`${className}`}>
      <Table data={scoreConfigData} captionSide="top" classNames={tableClasses} />
    </div>
  )
}
