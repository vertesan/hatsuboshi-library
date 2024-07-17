import { XIdolCard } from "~/types";
import { IdolCardLevelLimitEffectType, IdolCardPotentialEffectType, ProduceEffectType, ProduceParameterType } from "~/types/proto/penum";
import { UnArrary } from "~/types/utils";
import { AttributeIcon } from "./attributeIcon";
import { t } from "i18next";
import { Divider } from "@mantine/core";
import { EffectSpan } from "~/components/media/effectSpan";
import { ProduceEffectIcon } from "./effectIcon";
import { staminaIcon } from "~/assets/media";

export function PotentialLevelView({
  potential,
  className,
}: {
  potential: UnArrary<XIdolCard['potentials']>
  className?: string,
}) {
  const elements: JSX.Element[] = []
  potential.effectTypes.forEach((effectType, idx) => {
    switch (effectType) {
      case IdolCardPotentialEffectType.ProduceVoDaViGrowthRatePermil:
        elements.push(
          <div key={`${idx}_${effectType}`} className="flex flex-row">
            <span className="flex-1 text-center">
              <AttributeIcon attribute={ProduceParameterType.Vocal}
                className="inline-block align-text-bottom h-4 w-4 mr-1"
              />
              {`Vo + ${potential.produceVocalGrowthRatePermil}`}
            </span>
            <span className="flex-1 text-center border-l-2 dark:border-zinc-600">
              <AttributeIcon attribute={ProduceParameterType.Dance}
                className="inline-block align-text-bottom h-4 w-4 mr-1"
              />
              {`Da + ${potential.produceDanceGrowthRatePermil}`}
            </span>
            <span className="flex-1 text-center border-l-2 dark:border-zinc-600">
              <AttributeIcon attribute={ProduceParameterType.Visual}
                className="inline-block align-text-bottom h-4 w-4 mr-1"
              />
              {`Vi + ${potential.produceVisualGrowthRatePermil}`}
            </span>
          </div>
        )
        break
      case IdolCardPotentialEffectType.ProduceSkill:
        elements.push(
          <div key={`${idx}_${effectType}`} >
            <EffectSpan className="" produceSkill={potential.produceSkill!} />
          </div>
        )
        break
      case IdolCardPotentialEffectType.InitialProduceItemChange:
        elements.push(
          <div key={`${idx}_${effectType}`} className={`relative flex flex-row justify-center items-center gap-2 rounded-lg ${className}`}>
            <ProduceEffectIcon className="flex-none relative h-8 w-8" effectType={ProduceEffectType.ProduceCardUpgrade} />
            <p className="whitespace-pre-wrap text-xs sm:text-sm">固有Pアイテム強化</p>
          </div>
        )
        break
      case IdolCardPotentialEffectType.ProduceStamina:
        elements.push(
          <div key={`${idx}_${effectType}`} className="flex flex-row">
            <span className="flex-1 text-center">
              <img src={staminaIcon} alt="" className="inline-block align-text-bottom h-4 w-4 mr-1" />
              {t("Stamina") + ` + ${potential.effectValue}`}
            </span>
          </div>
        )
    }
  })
  return (
    <div className={`pb-4 ${className}`}>
      <Divider labelPosition="center" my="sm" label={t("Potential Level ") + potential.rank} />
      {elements}
    </div>
  )
}
