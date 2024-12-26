import { useTranslation } from "react-i18next"
import { XMaster } from "~/types"
import { UnArray } from "~/types/utils"
import { EffectDescription } from "./effectDescription"
import { GimmicksTimeline } from "./gimmicksTimeline"
import { PlanIcon } from "./planIcon"
import { ProduceCardIcon } from "./produceCard"
import { ProduceItemIcon } from "./produceItem"

export function PvpStage({
  stage,
  cards,
  className,
}: {
  stage: UnArray<Required<XMaster>['pvp']['pvpRateConfig']['stages']>,
  cards: Required<XMaster>['pvp']['pvpRateConfig']['commonProduceCards'],
  className?: string,
}) {
  const { t } = useTranslation()

  return (
    <div className={`${className}`}>
      <div className="flex flex-row gap-2">
        <div className="flex-1">
          <p className="text-xl">{t("Stage ") + stage.stageType}</p>

          {stage.produceItems?.map(produceItem =>
            <div key={produceItem.id} className="mt-2 flex flex-row gap-2 items-center">
              <ProduceItemIcon withHoverDescription item={produceItem} className="flex-none relative h-[68px] w-[68px]" />
              <EffectDescription descriptions={produceItem.produceDescriptions} />
            </div>
          )}

          {cards[stage.planType]
            ? <>
              <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(68px,1fr))] sm:grid-cols-[repeat(auto-fit,68px)]">
                {
                  cards[stage.planType]?.map((card, idx) => {
                    return (
                      <div key={idx}>
                        <ProduceCardIcon card={card} className="relative h-[68px] w-[68px]" closeDelay={50} withHoverDescription />
                      </div>
                    )
                  })
                }
              </div>
            </>
            : null
          }
        </div>

        <div className="border-l-2 dark:border-zinc-600 pl-2 flex-none flex flex-col justify-center items-center">
          <div className="h-8 w-8 sm:h-12 sm:w-12">
            <PlanIcon planType={stage.planType} />
          </div>
          <p>{t("Rounds")}</p>
          <p>{stage.turn}</p>
        </div>
      </div>

      {stage.examGimmicks
        ? <div className="mt-2">
          <GimmicksTimeline gimmicks={stage.examGimmicks} />
        </div>
        : null
      }

    </div>
  )
}
