import { useTranslation } from "react-i18next";
import { EffectDescription } from "~/components/media/effectDescription";
import { ProduceEffectIcon } from "~/components/media/effectIcon";
import { ProduceEffectType } from "~/types/proto/penum";
import { ProduceEffect, ProduceSkill } from "~/types/proto/pmaster";

export function EffectSpan({
  produceSkill,
  className,
}: {
  produceSkill: ProduceSkill & { produceEffects: ProduceEffect[] },
  className?: string,
}) {
  const { t } = useTranslation()
  return (
    <div className={`relative flex flex-row items-center gap-2 rounded-lg ${className}`}>
      <ProduceEffectIcon className="flex-none relative h-8 w-8" effectType={produceSkill.produceEffects[0].produceEffectType} />
      {produceSkill.produceEffects[0].produceEffectType === ProduceEffectType.IdolCardProduceCardCustomizeEnable
        ? <p>{t("Make dedicated produce card customizable")}</p>
        : <EffectDescription descriptions={produceSkill.produceDescriptions} />
      }
    </div>
  )
}
