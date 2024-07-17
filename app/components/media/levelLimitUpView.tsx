import { XIdolCard } from "~/types";
import { IdolCardLevelLimitEffectType, ProduceEffectType, ProduceParameterType } from "~/types/proto/penum";
import { UnArrary } from "~/types/utils";
import { AttributeIcon } from "./attributeIcon";
import { t } from "i18next";
import { Divider } from "@mantine/core";
import { EffectSpan } from "~/components/media/effectSpan";
import { ProduceEffectIcon } from "./effectIcon";
import { staminaIcon } from "~/assets/media";

export function LevelLimitUpView({
  levelLimit,
  className,
}: {
  levelLimit: UnArrary<XIdolCard['levelLimits']>
  className?: string,
}) {
  const elements: JSX.Element[] = []
  levelLimit.effectTypes.forEach((effectType, idx) => {
    switch (effectType) {
      case IdolCardLevelLimitEffectType.ProduceVoDaVi:
        elements.push(
          <div key={`${idx}_${effectType}`} className="flex flex-row">
            <span className="flex-1 text-center">
              <AttributeIcon attribute={ProduceParameterType.Vocal}
                className="inline-block align-text-bottom h-4 w-4 mr-1"
              />
              {`Vo + ${levelLimit.produceVocal}`}
            </span>
            <span className="flex-1 text-center border-l-2 dark:border-zinc-600">
              <AttributeIcon attribute={ProduceParameterType.Dance}
                className="inline-block align-text-bottom h-4 w-4 mr-1"
              />
              {`Da + ${levelLimit.produceDance}`}
            </span>
            <span className="flex-1 text-center border-l-2 dark:border-zinc-600">
              <AttributeIcon attribute={ProduceParameterType.Visual}
                className="inline-block align-text-bottom h-4 w-4 mr-1"
              />
              {`Vi + ${levelLimit.produceVisual}`}
            </span>
          </div>
        )
        break
      case IdolCardLevelLimitEffectType.ProduceSkill:
        elements.push(
          <div key={`${idx}_${effectType}`}>
            <EffectSpan className="" produceSkill={levelLimit.produceSkill!} />
          </div>
        )
        break
      case IdolCardLevelLimitEffectType.ProduceCardUpgrade:
        elements.push(
          <div key={`${idx}_${effectType}`} className={`relative flex flex-row justify-center items-center gap-2 rounded-lg ${className}`}>
            <ProduceEffectIcon className="flex-none relative h-8 w-8" effectType={ProduceEffectType.ProduceCardUpgrade} />
            <p className="whitespace-pre-wrap text-xs sm:text-sm">固有Pカード強化</p>
          </div>
        )
        break
      case IdolCardLevelLimitEffectType.ProduceStamina:
        elements.push(
          <div key={`${idx}_${effectType}`} className="flex flex-row">
            <span className="flex-1 text-center">
              <img src={staminaIcon} alt="" className="inline-block align-text-bottom h-4 w-4 mr-1" />
              {t("Stamina") + ` + ${levelLimit.effectValue}`}
            </span>
          </div>
        )
    }
  })
  return (
    <div className={`pb-4 ${className}`}>
      <Divider labelPosition="center" my="sm" label={t("Training Level ") + levelLimit.rank} />
      {elements}
    </div>
  )
}
