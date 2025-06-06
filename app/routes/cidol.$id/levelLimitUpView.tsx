import { Table } from "@mantine/core";
import { t } from "i18next";
import { staminaIcon } from "~/assets/media";
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
    const tableData: React.ReactNode[] = []
    levelLimit.effectTypes?.forEach((effectType, idx) => {
      switch (effectType) {
        case IdolCardLevelLimitEffectType.ProduceVoDaVi:
          tableData.push(
            <AttributeRow
              key={`${idx}_${effectType}`}
              vo={levelLimit?.produceVocal ?? 0}
              da={levelLimit?.produceDance ?? 0}
              vi={levelLimit?.produceVisual ?? 0}
            />
          )
          break
        case IdolCardLevelLimitEffectType.ProduceSkill:
          tableData.push(
            <div key={`${idx}_${effectType}`}>
              <EffectSpan className="pl-2" produceSkill={levelLimit.produceSkill!} />
            </div>
          )
          break
        case IdolCardLevelLimitEffectType.ProduceCardUpgrade:
          tableData.push(
            <div key={`${idx}_${effectType}`} className="relative flex flex-row items-center gap-2 rounded-lg pl-2">
              <ProduceEffectIcon className="flex-none relative h-8 w-8" effectType={ProduceEffectType.ProduceCardUpgrade} />
              <p className="whitespace-pre-wrap text-xs sm:text-sm">固有Pカード強化</p>
            </div>
          )
          break
        case IdolCardLevelLimitEffectType.ProduceStamina:
          tableData.push(
            <div key={`${idx}_${effectType}`} className="flex flex-row">
              <span className="px-2 text-center">
                <img src={staminaIcon} alt="" className="inline-block align-text-bottom h-4 w-4 mr-1" />
                {t("Stamina") + ` + ${levelLimit.effectValue}`}
              </span>
            </div>
          )
      }
    })
    tableRows.push(
      <Table.Tr key={idx}>
        <Table.Th w={80} h={55} className="text-center">
          {t("Level ") + levelLimit.rank}
        </Table.Th>
        <Table.Td>
          <div className="flex flex-col gap-2 items-start justify-center">
            {tableData}
          </div>
        </Table.Td>
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
