import { Link } from "@remix-run/react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { arrowDaUp, arrowViUp, arrowVoUp } from "~/assets/media";
import { AttributeProgress } from "~/components/media/attributeProgress";
import { EffectDescription } from "~/components/media/effectDescription";
import { ProduceCardIcon } from "~/components/media/produceCard";
import { ProduceItemIcon } from "~/components/media/produceItem";
import { MasterContext } from "~/contexts/masterContext";
import { calcAttribute, calcGrowthPermils } from "~/data/calculation";
import { CidolImage } from "~/routes/cidol/cidolImage";
import { XIdolCard } from "~/types";
import { IdolCardLevelLimitRank, IdolCardPotentialRank } from "~/types/proto/penum";

export function CidolCard({
  card,
  limitLevel,
  potentialLevel,
  assetSkinId,
  disableLink,
  countTEBonus = true,
}: {
  card: XIdolCard,
  limitLevel: IdolCardLevelLimitRank,
  potentialLevel: IdolCardPotentialRank,
  assetSkinId?: string,
  disableLink?: boolean,
  countTEBonus?: boolean,
}) {
  const { t } = useTranslation()
  const xMaster = useContext(MasterContext)

  const attrs = calcAttribute({ card, limitLevel, potentialLevel, countTEBonus, trueEndBonus: xMaster.characterTrueEndBonus })
  const growthRates = calcGrowthPermils({ card, limitLevel, potentialLevel, countTEBonus, trueEndBonus: xMaster.characterTrueEndBonus })

  const max = Math.max(attrs.vo, attrs.da, attrs.vi)
  const voProgressPercentage = attrs.vo / max * 100 + "%"
  const daProgressPercentage = attrs.da / max * 100 + "%"
  const viProgressPercentage = attrs.vi / max * 100 + "%"

  const voGrowthPercentage = (growthRates.vo / 10).toFixed(1) + "%"
  const daGrowthPercentage = (growthRates.da / 10).toFixed(1) + "%"
  const viGrowthPercentage = (growthRates.vi / 10).toFixed(1) + "%"

  const pCard = card.produceCards[limitLevel < 4 ? 0 : 1]
  const pItem = card.produceItems[potentialLevel < 2 ? 0 : 1]

  const cidolImageComponent = <CidolImage limitLevel={limitLevel} potentialLevel={potentialLevel} card={card} assetSkinId={assetSkinId} showIcons />

  return (
    <div
      className="flex flex-row rounded-lg bg-white dark:bg-[--mantine-color-dark-6] overflow-hidden w-full h-[280px] sm:h-[380px] max-h-[380px] shadow-md"
    >
      <div className="flex-none aspect-[9/16] h-[280px] sm:h-[380px]">
        {disableLink
          ? cidolImageComponent
          : <Link to={`/cidol/${card.id}`}>{cidolImageComponent}</Link>
        }
      </div>
      <div className="flex-1 p-2 flex flex-col gap-1">
        <div className="flex flex-row gap-2">
          <div className="flex-1 flex flex-col justify-center">
            <AttributeProgress percentage={voProgressPercentage} value={attrs.vo} attr="vo" />
            <AttributeProgress percentage={daProgressPercentage} value={attrs.da} attr="da" />
            <AttributeProgress percentage={viProgressPercentage} value={attrs.vi} attr="vi" />
          </div>

          <div className="flex-none border-l-2 dark:border-zinc-600 pl-2 flex flex-col justify-center items-center text-sm">
            <p>{t("Total")}</p>
            <p className="font-bold text-lg">{attrs.vo + attrs.da + attrs.vi}</p>
            <p className="text-emerald-600">{t("St.")}</p>
            <p className="text-emerald-600 font-bold text-lg">{attrs.st}</p>
          </div>
        </div>

        <div className="flex flex-row text-center text-sm md:text-lg">
          <p className="flex-1">
            <img src={arrowVoUp} alt="voup" className="h-2 w-2 sm:h-3 sm:w-3 align-baseline inline-block" />
            &nbsp;{voGrowthPercentage}
          </p>
          <p className="flex-1 border-l-2 dark:border-zinc-600">
            <img src={arrowDaUp} alt="daup" className="h-2 w-2 sm:h-3 sm:w-3 align-baseline inline-block" />
            &nbsp;{daGrowthPercentage}
          </p>
          <p className="flex-1 border-l-2 dark:border-zinc-600">
            <img src={arrowViUp} alt="viup" className="h-2 w-2 sm:h-3 sm:w-3 align-baseline inline-block" />
            &nbsp;{viGrowthPercentage}
          </p>
        </div>

        <div className="flex-1 flex flex-row sm:flex-col">
          <div className="flex-1 flex flex-row gap-2 justify-center sm:justify-start items-center">
            <ProduceCardIcon withHoverDescription card={pCard} className="flex-none relative h-[68px] w-[68px]" />
            <div className="hidden sm:block flex-1 md:text-sm"><EffectDescription descriptions={pCard.descriptions} /></div>
          </div>
          <div className="flex-1 flex flex-row gap-2 justify-center sm:justify-start items-center">
            <ProduceItemIcon withHoverDescription item={pItem} className="flex-none relative h-[68px] w-[68px]" />
            <div className="hidden sm:block flex-1 md:text-sm"><EffectDescription descriptions={pItem.descriptions} /></div>
          </div>
        </div>

      </div>
    </div>
  )
}
