import { Table } from "@mantine/core";
import { t } from "i18next";
import { staminaIcon } from "~/assets/media";
import { AttributeIcon } from "~/components/media/attributeIcon";
import { ProduceEffectIcon } from "~/components/media/effectIcon";
import { EffectSpan } from "~/routes/cidol.$id/effectSpan";
import { XIdolCard } from "~/types";
import { IdolCardLevelLimitEffectType, ProduceEffectType, ProduceParameterType } from "~/types/proto/penum";
import { AttributeRow } from "~/routes/cidol.$id/attributeRow";

export function LevelLimitUpView({
  levelLimits,
  className,
}: {
  levelLimits: XIdolCard['levelLimits'],
  className?: string,
}) {
  const tableRows: React.ReactNode[] = []

  levelLimits.forEach((levelLimit, idx) => {
    let tableData: React.ReactNode
    levelLimit.effectTypes.forEach((effectType, idx) => {
      switch (effectType) {
        case IdolCardLevelLimitEffectType.ProduceVoDaVi:
          tableData = (
            <AttributeRow
              vo={levelLimit.produceVocal}
              da={levelLimit.produceDance}
              vi={levelLimit.produceVisual}
            />
          )
          break
        case IdolCardLevelLimitEffectType.ProduceSkill:
          tableData = (
            <div key={`${idx}_${effectType}`}>
              <EffectSpan className="pl-2" produceSkill={levelLimit.produceSkill!} />
            </div>
          )
          break
        case IdolCardLevelLimitEffectType.ProduceCardUpgrade:
          tableData = (
            <div key={`${idx}_${effectType}`} className="relative flex flex-row items-center gap-2 rounded-lg pl-2">
              <ProduceEffectIcon className="flex-none relative h-8 w-8" effectType={ProduceEffectType.ProduceCardUpgrade} />
              <p className="whitespace-pre-wrap text-xs sm:text-sm">固有Pカード強化</p>
            </div>
          )
          break
        case IdolCardLevelLimitEffectType.ProduceStamina:
          tableData = (
            <div key={`${idx}_${effectType}`} className="flex flex-row">
              <span className="px-4 text-center">
                <img src={staminaIcon} alt="" className="inline-block align-text-bottom h-4 w-4 mr-1" />
                {t("Stamina") + ` + ${levelLimit.effectValue}`}
              </span>
            </div>
          )
      }
    })
    tableRows.push(
      <Table.Tr key={idx}>
        <Table.Th w={80} h={55} className="text-center">{t("Level ") + levelLimit.rank}</Table.Th>
        <Table.Td>{tableData}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <div className={`pb-4 ${className}`}>
      <Table captionSide="top" variant="vertical" layout="fixed" className="rounded-xl overflow-hidden">
        <Table.Tbody>
          {tableRows}
        </Table.Tbody>
      </Table>
    </div>
  )
}
