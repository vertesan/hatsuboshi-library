import { XIdolCard } from "~/types";
import { IdolCardLevelLimitEffectType, IdolCardPotentialEffectType, ProduceEffectType, ProduceParameterType } from "~/types/proto/penum";
import { UnArray } from "~/types/utils";
import { AttributeIcon } from "~/components/media/attributeIcon";
import { t } from "i18next";
import { Divider, Table } from "@mantine/core";
import { EffectSpan } from "~/routes/cidol.$id/effectSpan";
import { ProduceEffectIcon } from "~/components/media/effectIcon";
import { staminaIcon } from "~/assets/media";
import { AttributeGrowthRow } from "./attributeGrowthRow";

export function PotentialLevelView({
  potentials,
  className,
}: {
  potentials: XIdolCard['potentials'],
  className?: string,
}) {
  const tableRows: React.ReactNode[] = []

  potentials.forEach((potential, idx) => {
    let tableData: React.ReactNode
    potential.effectTypes.forEach((effectType, idx) => {
      switch (effectType) {
        case IdolCardPotentialEffectType.ProduceVoDaViGrowthRatePermil:
          tableData = (
            <AttributeGrowthRow
              vo={potential.produceVocalGrowthRatePermil}
              da={potential.produceDanceGrowthRatePermil}
              vi={potential.produceVisualGrowthRatePermil}
            />
          )
          break
        case IdolCardPotentialEffectType.ProduceSkill:
          tableData = (
            <div>
              <EffectSpan className="pl-2" produceSkill={potential.produceSkill!} />
            </div>
          )
          break
        case IdolCardPotentialEffectType.InitialProduceItemChange:
          tableData = (
            <div className={`relative flex flex-row pl-2 items-center gap-2 rounded-lg ${className}`}>
              <ProduceEffectIcon className="flex-none relative h-8 w-8" effectType={ProduceEffectType.ProduceCardUpgrade} />
              <p className="whitespace-pre-wrap text-xs sm:text-sm">固有Pアイテム強化</p>
            </div>
          )
          break
        case IdolCardPotentialEffectType.ProduceStamina:
          tableData = (
            <div className="flex flex-row">
              <span className="flex-1 text-center">
                <img src={staminaIcon} alt="" className="inline-block align-text-bottom h-4 w-4 mr-1" />
                {t("Stamina") + ` + ${potential.effectValue}`}
              </span>
            </div>
          )
      }
    })
    tableRows.push(
      <Table.Tr key={idx}>
        <Table.Th w={80} h={55} className="text-center">{t("Level ") + potential.rank}</Table.Th>
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

    // <div className={`pb-4 ${className}`}>
    //   <Divider labelPosition="center" my="sm" label={t("Potential Level ") + potential.rank} />
    //   {elements}
    // </div>
  )
}
