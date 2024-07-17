import { Timeline } from "@mantine/core";
import { ProduceExamGimmickEffectGroup } from "~/types/proto/pmaster";
import { EffectDescription } from "~/components/media/effectDescription";
import { useTranslation } from "react-i18next";

export function GimmicksTimeline({
  gimmicks,
  className,
}: {
  gimmicks: ProduceExamGimmickEffectGroup[],
  className?: string,
}) {
  const { t } = useTranslation()
  return (
    <div className={`${className}`}>
      <Timeline className="pt-4" bulletSize={16} lineWidth={2}>
        {gimmicks.map((gimmick, idx) => {
          return (
            <Timeline.Item key={idx} title={t("Turn ") + gimmick.startTurn}>
              <EffectDescription descriptions={gimmick.descriptions} />
            </Timeline.Item>
          )
        })}
      </Timeline>
    </div>
  )
}
