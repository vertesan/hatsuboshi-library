import { EffectDescription } from "~/components/media/effectDescription";
import { ProduceEffectIcon } from "~/components/media/effectIcon";
import { ProduceEffect, ProduceSkill } from "~/types/proto/pmaster";

export function EffectSpan({
  produceSkill,
  className,
}: {
  produceSkill: ProduceSkill & { produceEffects: ProduceEffect[] },
  className?: string,
}) {
  return (
    <div className={`relative flex flex-row items-center gap-2 rounded-lg ${className}`}>
      <ProduceEffectIcon className="flex-none relative h-8 w-8" effectType={produceSkill.produceEffects[0].produceEffectType} />
      <EffectDescription descriptions={produceSkill.produceDescriptions} />
    </div>
  )
}
