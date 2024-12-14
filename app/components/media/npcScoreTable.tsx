import { Table } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { ProduceExamBattleNpcGroup } from "~/types/proto/pmaster";
import tableClasses from '~/theme/Table.module.css';

export function NpcScoreTable({
  npcGroup,
  limit = 3,
  className,
}: {
  npcGroup: ProduceExamBattleNpcGroup[],
  limit?: number,
  className?: string,
}) {
  const { t } = useTranslation()

  const npcDatas = {
    caption: `${t("NPC score ranking")}`,
    head: [t("Rank"), t("Max Score"), t("Min Score")],
    body: npcGroup.map(npc => {
      return [
        npc.number,
        npc.scoreMax,
        npc.scoreMin,
      ]
    }).slice(0, limit)
  }

  return (
    <div className={`${className}`}>
      <Table data={npcDatas} captionSide="top" variant="vertical" classNames={tableClasses} />
    </div>
  )
}
